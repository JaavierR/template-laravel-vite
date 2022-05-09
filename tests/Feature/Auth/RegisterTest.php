<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_user_can_register_with_email_confirmation()
    {
        Notification::fake();

        $user = [
            'name' => 'John Doe',
            'email' => 'jhon.doe@test.cl',
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        $this->postJson(route('register'), $user)
            ->assertCreated();

        $this->assertDatabaseHas(
            'users',
            [
            'name' => 'John Doe',
            'email' => 'jhon.doe@test.cl',
            ]
        );

        $user = User::where('email', $user['email'])->first();

        Notification::assertSentTo(
            $user,
            VerifyEmail::class
        );
    }

    public function test_verify_email_validates_user()
    {
        $this->withoutExceptionHandling();
        $notification = new VerifyEmail();
        $user = User::factory()->create(['email_verified_at' => null]);

        $this->assertFalse($user->hasVerifiedEmail());

        $mail = $notification->toMail($user);
        $uri = $mail->actionUrl;

        $this->actingAs($user)->get($uri);

        $this->assertTrue(User::find($user->id)->hasVerifiedEmail());
    }
}
