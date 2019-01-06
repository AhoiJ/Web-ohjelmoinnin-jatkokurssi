import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

interface ICountryProp {
  prop1?: object;
}

const User_api: React.SFC<ICountryProp> = ({ prop1 = {} }) => {
  return (
      <TableRow>
        {console.log('DEBUG: ', prop1)}
            <TableCell>
              {prop1.id}
            </TableCell>
            <TableCell>
              {prop1.fname}
            </TableCell>
            <TableCell>
              {prop1.lname}
            </TableCell>
        </TableRow>
  )
}

export default User_api;
