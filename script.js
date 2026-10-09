let name = "Alya";
let umur = 16;
let sudahPKL = true;
alert (name);
alert (umur);
alert (sudahPKL);

let nilaiHTML = 90;
let nilaiCSS = 85;
let nilaiJS = 80;
let jumlah = (nilaiHTML + nilaiCSS + nilaiJS);
let rataRata = (jumlah / 3);
alert (rataRata);

function sapa (nama) {
    alert ("Halo, " + nama + "!");
}
sapa("Alya");


function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}
let hasil = hitungLuas (10, 5);
alert  (hasil);

let hobi = ["Membaca novel", " Mendengarkan musik", " Eksperimen"];
hobi.push("Coding");
hobi.pop();
alert(hobi);

let pendidikan = ["PAUD", " MI", " MTs", " SMK"];
for (let i = 0; i < pendidikan.length; i++) {
    alert (pendidikan[i]);
}

let profil = {
    nama: "Alya",
    jurusan: "RPL",
    sekolah: "SMUHERO",
    umur: 16,
    hobi: ""
};
alert (profil.nama);
alert (profil.jurusan);
alert (profil.sekolah);
alert (profil.umur +1);
alert (profil.jurusan = "Sistem Informasi");
alert (profil.hobi = "Membaca Novel");

let nilai = (87);
if (nilai >= 90) {
    alert ("Sangat Baik")
} else if (nilai >= 80) {
    alert ("Baik");
} else if (nilai >= 70) {
    alert ("Cukup");
} else {
    alert ("Perlu Belajar Lagi");
}

let judul = document.getElementById ("judul");
judul.textContent = "PORTOFOLIO ALYA";

let nama = document.getElementById ("nama");
let email = document.getElementById ("email");
let nomor = document.getElementById ("nomor");
let pesan = document.getElementById ("pesan");
let tombol = document.querySelector ("button");
tombol.addEventListener("click", function(event) {
    event.preventDefault();

    alert (
        "Nama: " + nama.value + 
        "\nEmail: " + email.value + 
        "\nNomor: " + nomor.value + 
        "\nPesan: " + pesan.value 
    );
});
