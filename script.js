const form = document.getElementById("pesan-form");
const whatsappNumber = "6288226898066";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const no_hp = document.getElementById("no_hp").value;
  const alamat = document.getElementById("alamat").value;
  const kecamatan = document.getElementById("kecamatan").value;
  const kabupaten = document.getElementById("kabupaten").value;

  // Mengambil nilai checkbox yang dicentang
  const produkCheckboxes = document.querySelectorAll(
    'input[name="produk"]:checked'
  );
  const produk = Array.from(produkCheckboxes)
    .map((checkbox) => checkbox.value)
    .join(", ");

  const message = `Nama: ${nama}\nNo. HP: ${no_hp}\nAlamat Lengkap: ${alamat}\nKecamatan: ${kecamatan}\nKabupaten: ${kabupaten}\nPilihan Produk: ${produk}`;

  const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
});
