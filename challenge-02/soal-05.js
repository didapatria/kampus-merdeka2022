function getSplitName(personName) {
  // tulis kode logic kamu didalam blok ini ya
} 

// EXPECTED RESULT
// Ketika function tersebut dipanggil

console.log(getSplitName("Aldi Daniela Pranata"))
// EXPECTED OUTPUT :
// { firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata'}

console.log(getSplitName("Dwi Kuncoro"))
// EXPECTED OUTPUT :
// { firstName: 'Dwi', middleName: null, lastName: 'Kuncoro'}

console.log(getSplitName("Aurora"))
// EXPECTED OUTPUT :
// { firstName: 'Aurora', middleName: null, lastName: null}

console.log(getSplitName("Aurora Aureliya Sukma Darma"))
// EXPECTED OUTPUT :
// Error : This function is only for 3 characters name

console.log(getSplitName(0))
// EXPECTED OUTPUT :
// "ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)"