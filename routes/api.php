<?php

use App\Http\Controllers\TodoListController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('users', [UsersController::class, 'index'])->name('users.index');
