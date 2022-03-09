function getSplitName(personName) {
  // tulis kode logic kamu didalam blok ini ya
  if (typeof(personName) == 'string') {
    let fullName = personName.split(' ') // Membuat String menjadi Array lalu dipisahkan setiap mengandung spasi
    if (fullName.length <= 3) {
      if (fullName.length > 2) {
        return result = {
          firstName: fullName[0],
          middleName: fullName[1],
          lastName: fullName[2]
        }
      } if (fullName.length == 2) {
        return result = {
          firstName: fullName[0],
          middleName: null,
          lastName: fullName[1]
        }
      } return result = {
          firstName: fullName[0],
          middleName: null,
          lastName: null
        }
    } return 'Error: This function is only for 3 characters name'
  } return 'Error: Invalid data type'
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