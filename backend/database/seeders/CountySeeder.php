<?php

namespace Database\Seeders;

use App\Models\County;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $counties = [
            ['name' => 'Alba', 'prefix' => 'AB'],
            ['name' => 'Arad', 'prefix' => 'AR'],
            ['name' => 'Argeș', 'prefix' => 'AG'],
            ['name' => 'Bacău', 'prefix' => 'BC'],
            ['name' => 'Bihor', 'prefix' => 'BH'],
            ['name' => 'Bistrița-Năsăud', 'prefix' => 'BN'],
            ['name' => 'Botoșani', 'prefix' => 'BT'],
            ['name' => 'Brașov', 'prefix' => 'BV'],
            ['name' => 'Brăila', 'prefix' => 'BR'],
            ['name' => 'Buzău', 'prefix' => 'BZ'],
            ['name' => 'Caraș-Severin', 'prefix' => 'CS'],
            ['name' => 'Călărași', 'prefix' => 'CL'],
            ['name' => 'Cluj', 'prefix' => 'CJ'],
            ['name' => 'Constanța', 'prefix' => 'CT'],
            ['name' => 'Covasna', 'prefix' => 'CV'],
            ['name' => 'Dâmbovița', 'prefix' => 'DB'],
            ['name' => 'Dolj', 'prefix' => 'DJ'],
            ['name' => 'Galați', 'prefix' => 'GL'],
            ['name' => 'Giurgiu', 'prefix' => 'GR'],
            ['name' => 'Gorj', 'prefix' => 'GJ'],
            ['name' => 'Harghita', 'prefix' => 'HR'],
            ['name' => 'Hunedoara', 'prefix' => 'HD'],
            ['name' => 'Ialomița', 'prefix' => 'IL'],
            ['name' => 'Iași', 'prefix' => 'IS'],
            ['name' => 'Ilfov', 'prefix' => 'IF'],
            ['name' => 'Maramureș', 'prefix' => 'MM'],
            ['name' => 'Mehedinți', 'prefix' => 'MH'],
            ['name' => 'Mureș', 'prefix' => 'MS'],
            ['name' => 'Neamț', 'prefix' => 'NT'],
            ['name' => 'Olt', 'prefix' => 'OT'],
            ['name' => 'Prahova', 'prefix' => 'PH'],
            ['name' => 'Satu Mare', 'prefix' => 'SM'],
            ['name' => 'Sălaj', 'prefix' => 'SJ'],
            ['name' => 'Sibiu', 'prefix' => 'SB'],
            ['name' => 'Suceava', 'prefix' => 'SV'],
            ['name' => 'Teleorman', 'prefix' => 'TR'],
            ['name' => 'Timiș', 'prefix' => 'TM'],
            ['name' => 'Tulcea', 'prefix' => 'TL'],
            ['name' => 'Vaslui', 'prefix' => 'VS'],
            ['name' => 'Vâlcea', 'prefix' => 'VL'],
            ['name' => 'Vrancea', 'prefix' => 'VN'],
            ['name' => 'București', 'prefix' => 'B'],
        ];

        DB::table('counties')->insert($counties);
    }
}
