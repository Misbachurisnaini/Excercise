let jumlahKlikOk = 0;

while (true) {
  let konfirmasi = confirm("Apakah anda mau mengulang?");
  if (konfirmasi === true) {
    jumlahKlikOk++;
  } else {
    alert("Perulangan sudah dilakukan sebanyak " + jumlahKlikOk + " kali");
    break;
  }
}

//Kode tersebut akan melakukan perulangan terus-menerus (infinite loop) hingga kondisi while-nya bernilai false
//karna pada kondisi while diberikan nilai true, maka perulangan akan terus dilakukan
//Pada setiap iterasi perulangan, program akan menampilkan sebuah konfirmasi dengan menggunakan method confirm() pada sebuah dialog box. Jika user mengklik tombol OK pada dialog box, 
//maka nilai variabel jumlahKlikOk akan bertambah 1. Namun, jika user mengklik tombol Cancel pada dialog box, maka program akan menampilkan sebuah alert yang menampilkan jumlah klik 
//OK yang telah dilakukan oleh user dengan menggunakan variabel jumlahKlikOk. Ketika perulangan telah selesai dilakukan, program akan keluar dari loop while menggunakan keyword break, 
//Dan pada akhirnya akan ditampilkan sebuah alert yang memberitahu jumlah kali user mengklik tombol OK pada dialog box.
