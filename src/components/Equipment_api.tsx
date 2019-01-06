import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

interface ICountryProp {
  prop1?: object;
}

const Equipment_api: React.SFC<ICountryProp> = ({ prop1 = {} }) => {
  return (
      <TableRow>
        {console.log('DEBUG: ', prop1)}
            <TableCell>
              {prop1.id}
            </TableCell>
            <TableCell>
              {prop1.kategoria_id}
            </TableCell>
            <TableCell>
              {prop1.sarjanumero}
            </TableCell>
            <TableCell>
              {prop1.kunto}
            </TableCell>
        </TableRow>
  )
}

export default Equipment_api;
