import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import * as React from 'react';

interface ICountryProp {
  prop1?: object;
}

const Loan_api: React.SFC<ICountryProp> = ({ prop1 = {} }) => {
  return (
      <TableRow>
        {console.log('DEBUG: ', prop1)}
            <TableCell>
              {prop1.id}
            </TableCell>
            <TableCell>
              {prop1.laite_id}
            </TableCell>
            <TableCell>
              {prop1.lainaaja_id}
            </TableCell>
            <TableCell>
              {prop1.luovutus_id}
            </TableCell>
            <TableCell>
              {prop1.vastaanotto_id}
            </TableCell>
            <TableCell>
              {prop1.lainaus_pvm}
            </TableCell>
            <TableCell>
              {prop1.era_pvm}
            </TableCell>
            <TableCell>
              {prop1.palautus_pvm}
            </TableCell>
            <TableCell>
              {prop1.kunto_palautettaessa}
            </TableCell>
        </TableRow>
  )
}

export default Loan_api;
