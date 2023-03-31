for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " adalah bilangan genap");
    } else {
      console.log(i + " adalah bilangan ganjil");
    }
  }
  
//Code tersebut akan melakukan iterasi sebanyak 21 kali dan dimulai dari nilai i sama dengan 0 hingga i kurang dari atau sama dengan 20. Pada setiap iterasi, program akan memeriksa apakah nilai i adalah bilangan genap atau ganjil dengan menggunakan operator modulus (%)
//Jika nilai i habis dibagi 2 (atau modulus-nya 0), maka program akan menampilkan teks "i adalah bilangan genap" pada console. Namun, jika nilai i tidak habis dibagi 2 (atau modulus-nya tidak 0), maka program akan menampilkan teks "i adalah bilangan ganjil" pada consolee
//Oleh karena itu, pada console akan ditampilkan 21 baris teks yang menunjukkan bilangan genap atau ganjil dari 0 hingga 20. Pada baris pertama akan ditampilkan teks "0 adalah bilangan genap", kemudian pada baris kedua akan ditampilkan teks "1 adalah bilangan ganjil", 
//pada baris ketiga akan ditampilkan teks "2 adalah bilangan genap", 
//dan seterusnya hingga pada baris ke-21 akan ditampilkan teks "20 adalah bilangan genap"