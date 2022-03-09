function getAngkaTerbesarKedua(num) {
  // tulis kode logic kamu didalam blok ini ya
  if (num) {
    if (Array.isArray(num)) {
      let filterArr = [...new Set(num)]
      filterArr.sort((x, y) => {return y - x})
      return filterArr[1]
    } return 'Error: Invalid data type'
  } return 'Error: Bro where is the parameter?'
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))
// EXPECTED OUTPUT :
// 8

console.log(getAngkaTerbesarKedua(0))
// EXPECTED OUTPUT :
// "ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)"

console.log(getAngkaTerbesarKedua())
// EXPECTED OUTPUT :
// "ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)"