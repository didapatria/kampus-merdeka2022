function checkEmail(email) {
  // tulis kode logic kamu didalam blok ini ya
  // HINT => PAKE REGEX COBA GOOGLING YA
  if (email) {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return 'VALID'
    } let at = email.indexOf("@")
      if (at > 1) {
        return 'INVALID'
      } return 'Error: Invalid because @ is not present'
  } return 'Error: Bro where is the parameter?'
}


// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkEmail('apranata@binar.co.id')) // OUTPUT yang keluar => "VALID"
console.log(checkEmail('apranata@binar.com')) // OUTPUT yang keluar => "VALID"
console.log(checkEmail('apranata@binar')) // OUTPUT yang keluar => "INVALID"
console.log(checkEmail('apranata')) // ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)
console.log(checkTypeNumber(checkEmail(3222))) // ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)
// Error: checkTypeNumber is not defined
// Error: Invalid data type
console.log(checkEmail()) // ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)
