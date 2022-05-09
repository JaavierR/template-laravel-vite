<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_user_can_login_with_email_and_password()
    {
        $user = User::factory()->create();

        $response = $this->postJson(
            route('login'),
            [
            'email' => $user->email,
            'password' => 'password'
            ]
        );

        $response->assertSessionHasNoErrors();

        $this->assertAuthenticatedAs($user);
    }

    public function test_if_user_email_is_not_available_then_it_return_error()
    {
        $this->postJson(
            route('login'),
            [
            'email' => 'test@test.cl',
            'password' => 'password'
            ]
        )->assertJsonValidationErrors(['email'])
        ->assertStatus(422);

        $this->assertGuest();
    }

    public function test_it_raise_error_if_password_is_incorrect()
    {
        $user = User::factory()->create();

        $this->postJson(route('login'), [
            'email' => $user->email,
            'password' => 'invalid-password',
        ])->assertJsonValidationErrors(['email'])
        ->assertStatus(422);

        $this->assertGuest();
    }
}
