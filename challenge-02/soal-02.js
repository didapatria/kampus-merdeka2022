const checkTypeNumber = (givenNumber) => {
  // tulis kode logic kamu didalam blok ini ya
  if (givenNumber) {
    if (typeof(givenNumber) == 'number') {
      if (givenNumber % 2 == 0) {
        return 'GENAP'
      } return 'GANJIL'
    } return 'Error: Invalid data type'
  } return 'Error: Bro where is the parameter?'

}


// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)) // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)) // OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("10")) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber())
 // OUTPUT yang keluar => "Error: Bro where is the parameter?"