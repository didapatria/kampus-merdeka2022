const columnsOrder = [
  {
    name: 'Id',
    selector: row => row.id,
    sortable: false,
    // cell: (row, index) => index+1,
  },
  {
    name: 'User Email',
    selector: row => row.User.email,
    sortable: true,
  },
  {
    name: 'Car',
    selector: row => row.Car.name,
    sortable: true,
  },
  {
    name: 'Start Rent',
    selector: row => row.start_rent_at,
    sortable: true,
  },
  {
    name: 'Finish Rent',
    selector: row => row.finish_rent_at,
    sortable: true,
  },
  {
    name: 'Price',
    selector: row => row.total_price,
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
  },
]

const data = [
  {
    no: 1,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 2,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 3,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 4,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 5,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 6,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 7,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 8,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 9,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 10,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 11,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 12,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 13,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 14,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 15,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 16,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 17,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 18,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 19,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 20,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 21,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 22,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 23,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 24,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 25,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 26,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 27,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 28,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 29,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 30,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 31,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 32,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 33,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 34,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 35,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 36,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 37,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 38,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 39,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 40,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 41,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 42,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 43,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 44,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 45,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 46,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 47,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 48,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 49,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 50,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 51,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 52,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 53,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 54,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 55,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 56,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 57,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 58,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 59,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 60,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 61,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 62,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 63,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 64,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 65,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 66,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 67,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 68,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 69,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 70,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 71,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 72,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 73,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 74,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 75,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 76,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 77,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 78,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 79,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 80,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 81,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 82,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 83,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 84,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 85,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 86,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 87,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 88,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 89,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
  {
    no: 90,
    userEmail: 'User Email',
    car: 'Car',
    startRent: 'Start Rent',
    finishRent: 'Finish Rent',
    price: 'Price',
    status: 'Status',
  },
]

export {
  columnsOrder,
  data,
}