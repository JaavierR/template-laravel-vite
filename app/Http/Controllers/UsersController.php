<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Book;
use App\Models\User;
use Symfony\Component\HttpFoundation\Response;

class UsersController extends Controller
{
    public function index()
    {
        // $users = User::query()
        //     ->orderBy('name')
        //     ->paginate();

        // return (UserResource::collection($users));

        // This returns the last checkout for each manager
        // $books = Book::query()
        //     ->select('books.*')
        //     ->join('checkouts', 'checkouts.book_id', '=', 'books.id')
        //     ->where('checkouts.is_manager', '=', 1)
        //     ->groupBy('checkouts.book_id')
        //     ->withLastCheckout()
        //     ->with('lastCheckout.user')
        //     ->paginate();

        $books = Book::query()
            ->whereHas('user', function ($query) {
                $query->where('is_manager', '=', 1);
            })
            ->withLastCheckout()
            ->with('lastCheckout.user')
            ->paginate();

        // ! BAD
        // $books = Book::query()
        //     ->select('books.*')
        //     ->join('checkouts', 'checkouts.book_id', '=', 'books.id')
        //     ->whereColumn('books.id', 'checkouts.book_id')
        //     ->where('checkouts.is_manager', '=', 1)
        //     ->withLastCheckout()
        //     ->with('lastCheckout.user')
        //     ->paginate();

        return response(['data' => $books], Response::HTTP_OK);
    }
}
