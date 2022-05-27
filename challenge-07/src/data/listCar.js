import Moment from 'react-moment'

const currencyFormatter = (value) => {
  const formattedAmount = Math.trunc(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
  return formattedAmount
}

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
    selector: row => 'Rp. ' + currencyFormatter(row.price),
    sortable: true,
  },
  {
    name: 'Start Rent',
    selector: row => <Moment format="D MMM YYYY" date={row.start_rent_at} />,
    sortable: true,
  },
  {
    name: 'Finish Rent',
    selector: row => <Moment format="D MMM YYYY" date={row.finish_rent_at} />,
    sortable: true,
  },
  {
    name: 'Created at',
    selector: row => <Moment format="D MMM YYYY, hh.mm" date={row.createdAt} />,
    sortable: true,
  },
  {
    name: 'Updated at',
    selector: row => <Moment format="D MMM YYYY, hh.mm" date={row.updatedAt} />,
    sortable: true,
  },
]

export {
  columnsCar
}