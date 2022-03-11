function getAngkaTerbesarKedua(num) {
  // tulis kode logic kamu didalam blok ini ya
  if (num) {
    if (Array.isArray(num)) {
      // num.sort((x, y) => {return y - x})

      // Bubble Sort
      for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
          if (num[j] < num[j + 1]) {
            let temp = num[j + 1];
            num[j + 1] = num[j];
            num[j] = temp;
          }
        }
      }

      // Unique / Filter
      let result = [num[0]]
      for (let i = 1; i < num.length; i++) {
        if (num[i-1] !== num[i]) {
          result.push(num[i])
        }
      }
      return result[1]
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