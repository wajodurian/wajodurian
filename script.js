/*
  =====================================================================
  PUSAT DATA — EDIT DI SINI SAJA UNTUK GANTI HARGA, FOTO, ATAU NOMOR WA
  =====================================================================
  Semua teks dan harga yang muncul di halaman diambil dari variabel di
  bawah ini. Anda TIDAK perlu menyentuh file index.html untuk mengubah
  harga, deskripsi, atau nomor WhatsApp.
*/

// 1. NOMOR / LINK WHATSAPP TUJUAN
//    Ganti link ini jika nomor WhatsApp toko berubah.
const NOMOR_WHATSAPP = "https://wa.me/qr/YKVDBYXB2GNUA1";

// 2. DAFTAR PRODUK
//    - nama       : nama produk yang akan tampil di kartu & dikirim ke pesan WA
//    - harga      : tampilkan dalam format teks lengkap, misal "Rp 20.000 / 3 biji"
//    - deskripsi  : kalimat singkat di bawah nama produk
//    - foto       : nama file foto di folder "gambar/". Ganti file di folder itu
//                   jika ingin pakai foto lain, lalu sesuaikan nama filenya di sini.
const DAFTAR_PRODUK = [
  {
    nama: "Durian Lokal Sedang",
    harga: "Rp 30.000 / 3 biji",
    deskripsi: "Ukuran pas untuk 1-2 orang. Manis legit, daging tebal, biji kecil khas durian lokal Wajo.",
    foto: "images/durian-sedang.jpg"
  },
  {
    nama: "Durian Lokal Besar",
    harga: "Rp 45.000 / 3 biji",
    deskripsi: "Ukuran jumbo untuk keluarga atau acara kumpul. Matang pohon, aroma kuat, rasa manis maksimal.",
    foto: "images/durian-besar.jpg"
  }
];

// 3. TEMPLATE PESAN WHATSAPP
//    {nama} dan {harga} otomatis diganti dengan data produk di atas.
//    Ubah kalimatnya di sini jika ingin gaya bahasa yang berbeda.
const TEMPLATE_PESAN = "Halo, saya di Makassar mau pesan {nama} Asli Wajo yang harga {harga}. Tolong info pengirimannya.";


/*
  =====================================================================
  FUNGSI BANTUAN — tidak perlu diubah, dipakai otomatis di bawah
  =====================================================================
*/
function buatLinkPesan(produk) {
  const teks = TEMPLATE_PESAN
    .replace("{nama}", produk.nama)
    .replace("{harga}", produk.harga);
  return NOMOR_WHATSAPP + "?text=" + encodeURIComponent(teks);
}


/*
  =====================================================================
  SKRIP RENDER — mengambil data dari DAFTAR_PRODUK di atas dan
  menampilkannya sebagai kartu produk + memasang link WhatsApp.
  Tidak perlu diedit kecuali Anda ingin mengubah TAMPILAN kartu.
  =====================================================================
*/

// Pasang link WhatsApp umum (navbar & CTA strip) — pesan default tanpa nama produk
const pesanUmum = "Halo, saya di Makassar mau tanya-tanya soal Durian Lokal Asli Wajo.";
const linkUmum = NOMOR_WHATSAPP + "?text=" + encodeURIComponent(pesanUmum);
document.getElementById("nav-cta").href = linkUmum;
document.getElementById("cta-strip-button").href = linkUmum;

// Render kartu produk dari DAFTAR_PRODUK
const kontainer = document.getElementById("kontainer-produk");

DAFTAR_PRODUK.forEach((produk) => {
  const kartu = document.createElement("div");
  kartu.className = "group bg-krem rounded-3xl overflow-hidden border border-kulit/10 shadow-sm hover:shadow-xl transition-shadow";

  kartu.innerHTML = `
    <div class="aspect-[4/3] overflow-hidden">
      <img src="${produk.foto}" alt="${produk.nama}"
           class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    </div>
    <div class="p-6">
      <h3 class="font-display text-xl font-bold text-kulit mb-1.5">${produk.nama}</h3>
      <p class="text-sm text-kayu/70 mb-4 leading-relaxed">${produk.deskripsi}</p>
      <div class="flex items-center justify-between">
        <span class="font-display text-2xl font-bold text-daging">${produk.harga}</span>
        <a href="${buatLinkPesan(produk)}" target="_blank" rel="noopener"
           class="bg-kulit text-krem font-semibold px-5 py-2.5 rounded-full hover:bg-kulit-light transition-colors text-sm sm:text-base whitespace-nowrap">
          Pesan Sekarang
        </a>
      </div>
    </div>
  `;

  kontainer.appendChild(kartu);
});

// Tahun otomatis di footer (otomatis update tiap tahun, tidak perlu diedit manual)
document.getElementById("tahun-sekarang").textContent = new Date().getFullYear();