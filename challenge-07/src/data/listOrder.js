import Moment from 'react-moment'

const currencyFormatter = (value) => {
  const formattedAmount = Math.trunc(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
  return formattedAmount
}

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
    selector: row => <Moment format="D MMM YYYY" date={row.start_rent_at} />,
    sortable: true,
  },
  {
    name: 'Finish Rent',
    selector: row => <Moment format="D MMM YYYY" date={row.finish_rent_at} />,
    sortable: true,
  },
  {
    name: 'Price',
    selector: row => 'Rp. ' + currencyFormatter(row.total_price),
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
  },
]

export {
  columnsOrder
}