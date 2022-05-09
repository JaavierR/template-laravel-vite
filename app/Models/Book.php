<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsToMany(User::class, 'checkouts')
            ->using(Checkout::class)
            ->withPivot('borrowed_date');
    }

    public function lastCheckout()
    {
        return $this->belongsTo(Checkout::class);
    }

    public function scopeWithLastCheckout($query)
    {
        return $query->addSelect(['last_checkout_id' => Checkout::select('checkouts.id')
            ->whereColumn('book_id', 'books.id')
            ->orderByRaw('borrowed_date is not null')
            ->orderByDesc('borrowed_date')
            ->limit(1)
        ])->with('lastCheckout');
    }
}
