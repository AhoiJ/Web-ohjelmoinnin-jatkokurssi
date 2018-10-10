import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
interface ICountryProp {
  prop1?: object;
}

const Country_remote: React.SFC<ICountryProp> = ({ prop1 = {} }) => {
  return (
      <TableRow>
        {console.log('DEBUG: ', prop1)}
            <TableCell>
              {prop1.name}
            </TableCell>
            <TableCell>
              {prop1.population}
            </TableCell>
            <TableCell>
              {prop1.capital}
            </TableCell>
            <TableCell>
              {prop1.region}
            </TableCell>
        </TableRow>
  )
}

export default Country_remote;
