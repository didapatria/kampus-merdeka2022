const columnsCar = [
  {
    name: 'Id',
    selector: row => row.id,
    sortable: false,
    // cell: (row, index) => index+1,
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Category',
    selector: row => row.category,
    sortable: true,
  },
  {
    name: 'Price',
    selector: row => row.price,
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
    name: 'Created at',
    selector: row => row.createdAt,
    sortable: true,
  },
  {
    name: 'Updated at',
    selector: row => row.updatedAt,
    sortable: true,
  },
]

export {
  columnsCar
}