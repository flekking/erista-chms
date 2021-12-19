<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Auth\{
    Church,
    User,
    Role,
};

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $church = new Church;
        $church->subdomain = 'gks';
        $church->name = 'Gereja Kasih Surabaya';
        $church->save();

        $role = new Role;
        $role->name = 'Admin';
        $role->church_id = $church->_id;
        $role->save();

        $user = new User;
        $user->email = 'gks@gks.org';
        $user->password = Hash::make('112233');
        $user->save();

        $church->users()->attach([$user->_id]);



        $church = new Church;
        $church->subdomain = 'nlc';
        $church->name = 'New Life Church';
        $church->save();

        $role = new Role;
        $role->name = 'Admin';
        $role->church_id = $church->_id;
        $role->save();

        $user = new User;
        $user->email = 'nlc@nlc.org';
        $user->password = Hash::make('112233');
        $user->save();

        $church->users()->attach([$user->_id]);
    }
}
