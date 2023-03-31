let jawaban = "";

while (jawaban !== "Impact Byte") {
  jawaban = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
  if (jawaban === "Impact Byte") {
    alert("Selamat jawaban kamu benar!");
  } else {
    alert("Maaf, jawaban kamu salah. Silakan coba lagi.");
  }
}

//Code diatas akan terus melakukan perulangan selama jawaban yang dimasukkan oleh user tidak sama dengan "Impact Byte". 
//Setiap iterasi, program akan menampilkan dialog box yang meminta user untuk memasukkan kepanjangan dari "IB" (Impact Byte). Jawaban yang dimasukkan oleh user akan disimpan pada variabl jawaban
//Setelah user memasukkan jawaban, program akan memeriksa jawaban tersebut menggunakan statement if-else. Jika jawaban yang dimasukkan oleh user sama dengan "Impact Byte", maka program akan menampilkan alert yang menginformasikan bahwa jawaban yang diberikan benar. 
//Namun, jika jawaban yang dimasukkan oleh user tidak sama dengan "Impact Byte", maka programakan menampilkan alert yang memberitahu bahwa jawaban yang diberikan salah dan meminta user untuk mencoba lagi
//Perulangan akan terus dilakukan sampai user memasukkan jawaban yang benar, yaitu "Impact Byte". Setelah user memasukkan jawaban yang benar, program akan menampilkan alert yang menginformasikan bahwa jawaban yang diberikan benar
//Kemudia program akan keluar dari loop while

