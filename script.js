console.log("✅ Halo dari script.js! File berhasil terhubung.");


// Ambil elemen input
const inputNama = document.querySelector("#nama");
const inputTTL = document.querySelector("#ttl");
const inputJK = document.querySelectorAll("input[name='jk']");
const inputProdi = document.querySelector("#prodi");
const inputEmail = document.querySelector("#email");
const inputTelepon = document.querySelector("#telepon");

// Ambil elemen hasil Biodata
const previewNama = document.querySelector("#preview-nama");
const previewTTL = document.querySelector("#preview-ttl");
const previewJK = document.querySelector("#preview-jk");
const previewProdi = document.querySelector("#preview-prodi");
const previewEmail = document.querySelector("#preview-email");
const previewTelepon = document.querySelector("#preview-telepon");

console.log(inputNama, inputTTL, inputProdi);
console.log(previewNama, previewTTL, previewProdi);

// Nama
inputNama.addEventListener("input", function () {
  const teks = inputNama.value;
  if (teks === "") {
    previewNama.textContent = "Belum diisi";
  } else {
    previewNama.textContent = teks;
  }
});

// TTL
inputTTL.addEventListener("input", function () {
  const teks = inputTTL.value;
  if (teks === "") {
    previewTTL.textContent = "Belum diisi";
  } else {
    previewTTL.textContent = teks;
  }
});

// Jenis Kelamin
inputJK.forEach((radio) => {
  radio.addEventListener("change", function () {
    const selected = document.querySelector("input[name='jk']:checked");
    previewJK.textContent = selected ? selected.value : "Belum dipilih";
  });
});

// Prodi
inputProdi.addEventListener("input", function () {
  const teks = inputProdi.value;
  if (teks === "") {
    previewProdi.textContent = "Belum dipilih";
  } else {
    previewProdi.textContent = teks;
  }
});

// Email
inputEmail.addEventListener("input", function () {
  const teks = inputEmail.value;
  if (teks === "") {
    previewEmail.textContent = "Belum diisi";
  } else {
    previewEmail.textContent = teks;
  }
});

// Telepon
inputTelepon.addEventListener("input", function () {
  const teks = inputTelepon.value;
  if (teks === "") {
    previewTelepon.textContent = "Belum diisi";
  } else {
    previewTelepon.textContent = teks;
  }
});
