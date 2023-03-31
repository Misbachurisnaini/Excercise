let nilaiAwal = 0;

for (let i = 1; i <= 10; i++) {
  nilaiAwal += 2;
  console.log("Nilai pada pengulangan ke-" + i + " = " + nilaiAwal);
}

//Code tersebut akan melakukan iterasi sebanyak 10 kali, dimulai dari nilai i sama dengan 1 hingga i kurang dari atau sama dengan 10. Setiap iterasi, variabel nilaiAwal akan ditambahkan dengan 2. Kemudian, pada setiap iterasi, program akan menampilkan teks "Nilai pada pengulangan ke-i = nilaiAwal", dimana i adalah nomor iterasi loop, dan nilaiAwal adalah variabel yang ditambahkan dengan 2 pada setiap iteraso
//Pada iterasi pertama, variabel nilaiAwal akan diisi dengan nilai 2, pada iterasi kedua akan menjadi 4, kemudian 6, dan seterusnya hingga mencapai iterasi ke-10 yang akan memiliki nilai 20. Hasil dari setiap iterasi loop akan ditampilkan pada console dengan menggunakan fungsi console.log(). Oleh karena itu, pada akhirnya, pada console akan ditampilkan 10 baris teks seperti berikut:
//Nilai pada pengulangan ke-1 = 2
//Nilai pada pengulangan ke-2 = 4
//Nilai pada pengulangan ke-3 = 6
//Nilai pada pengulangan ke-4 = 8
//Nilai pada pengulangan ke-5 = 10
//Nilai pada pengulangan ke-6 = 12
//Nilai pada pengulangan ke-7 = 14
//Nilai pada pengulangan ke-8 = 16
//Nilai pada pengulangan ke-9 = 18
//Nilai pada pengulangan ke-10 = 20