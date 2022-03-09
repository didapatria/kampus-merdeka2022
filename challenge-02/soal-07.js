const dataPenjualanPakAdi = [
  {
  namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
  hargaSatuan: 760000,
  kategori: "Sepatu Sport",
  totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High - Original',
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High - Original',
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduray - [BNIB] Original',
    hargaSatuan: 120000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
]

function hitungTotalPenjualan(dataPenjualan) {
  // tulis kode logic kamu didalam blok ini ya
  if(dataPenjualan) {
    if(Array.isArray(dataPenjualan)) {
      let result = 0
      for (let i = 0; i < dataPenjualan.length; i++) {
        result += dataPenjualan[i].totalTerjual
      }
      return result
    } return 'Error: Invalid data type'
  } return 'Error: Bro where is the parameter?'
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil dengan variabel dataPenjualanPakAdi

console.log(hitungTotalPenjualan(dataPenjualanPakAdi))

// EXPECTED OUTPUT => 307
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90 + 37 + 90 + 90
