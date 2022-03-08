function changeWord (selectedText, changeText, text) {
  // tulis kode logic kamu didalam blok ini ya
  let result = ''
  text = text.replace(selectedText, changeText)
  result += text
  return result
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

// EXPECTED RESULT
// Ketika function tersebut dipanggil dengan variabel kalimat1
console.log(changeWord('mencintai', 'membenci', kalimat1))
// Maka output yang harus keluar adalah
// => 'Andini sangat membenci kamu selamanya'

// Ketika function tersebut dipanggil dengan variabel kalimat2
console.log(changeWord('bromo', 'semeru', kalimat2))
// Maka output yang harus keluar adalah
// => 'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'
