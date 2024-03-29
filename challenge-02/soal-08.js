const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // tulis kode logic kamu didalam blok ini ya
  if(dataPenjualan) {
    if(Array.isArray(dataPenjualan)) {
      let infoPenjualan = {},
          totalKeuntungan = 0,
          totalModal = 0,
          persentaseKeuntungan = 0,
          produkBukuTerlaris,
          penulisTerlaris

      let bestseller = dataPenjualan[0].totalTerjual
      let namePenulis
      for (let i = 1; i < dataPenjualan.length; i++) {
        if (dataPenjualan[i].totalTerjual > bestseller) {
          bestseller = dataPenjualan[i].totalTerjual
          namePenulis = dataPenjualan[i].penulis
        } namePenulis = dataPenjualan[0].penulis
      }

      let uniquePenulis = [];
      for (let i=0; i<dataPenjualan.length; i++) {
        if (uniquePenulis.indexOf(dataPenjualan[i].penulis) === -1 && dataPenjualan[i].penulis !== '') {
          uniquePenulis.push(dataPenjualan[i].penulis);
        }
      }

      let dataPenulis = [],
          countTerjual = 0,
          countBuku = 0
      for (let i=0; i<uniquePenulis.length; i++) {
        for (let j=0; j<dataPenjualan.length; j++) {
          if (dataPenjualan[j].penulis == uniquePenulis[i]) {
            countTerjual = countTerjual + dataPenjualan[j].totalTerjual
            countBuku++
          }
        }
        let obj = {};
        obj['penulis'] = uniquePenulis[i];
        obj['totalTerjual'] = countTerjual;
        obj['totalBuku'] = countBuku;
        dataPenulis.push(obj);
        countTerjual = 0
        countBuku = 0
      }

      let bestsellerPenulis = dataPenulis[0].totalTerjual
      let nameBestPenulis
      for (let i = 1; i < dataPenulis.length; i++) {
        if (dataPenulis[i].totalTerjual > bestsellerPenulis) {
          bestsellerPenulis = dataPenulis[i].totalTerjual
          nameBestPenulis = dataPenulis[i].penulis
        } nameBestPenulis = dataPenulis[0].penulis
      }

      if (bestsellerPenulis > bestseller) {
        penulisTerlaris = nameBestPenulis
      } else {
        penulisTerlaris = namePenulis
      }

      for (let i = 0; i < dataPenjualan.length; i++) {
        totalKeuntungan += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli ) * dataPenjualan[i].totalTerjual
        totalModal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok)
        if (dataPenjualan[i].totalTerjual == bestseller) {
          produkBukuTerlaris = dataPenjualan[i].namaProduk
        }
      }

      persentaseKeuntungan = (totalKeuntungan / totalModal) * 100

      infoPenjualan['totalKeuntungan'] = 'Rp ' + totalKeuntungan.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('')
      infoPenjualan['totalModal'] = 'Rp ' + totalModal.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('')
      infoPenjualan['persentaseKeuntungan'] = persentaseKeuntungan.toFixed(2) + '%'
      infoPenjualan['produkBukuTerlaris'] = produkBukuTerlaris
      infoPenjualan['penulisTerlaris'] = penulisTerlaris

      return infoPenjualan
    } return 'Error: Invalid data type'
  } return 'Error: Bro where is the parameter?'
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil dengan variabel dataPenjualanNovel

console.log(getInfoPenjualan(dataPenjualanNovel))

// EXPECTED OUTPUT => OBJECT dengan format seperti yang disebutkan diatas