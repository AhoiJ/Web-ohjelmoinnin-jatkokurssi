import Link from 'next/link'
import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import Loan_api from './Loan_api';

class Loan extends Component{
constructor() {
  super();
  this.state ={loans:[]}
}

async componentDidMount() {
  const response = await fetch('http://localhost:9000/api/v1/loans')
  const data = await response.json();
  console.log('data is here:', data);
  this.setState({ loans: data });

}

render() {

 const { loans } = this.state;
 return (
     <Paper>
       <h1>Lainat</h1>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell>
               Id
             </TableCell>
             <TableCell>
               Laite id
             </TableCell>
             <TableCell>
               Lainaaja id
             </TableCell>
             <TableCell>
               Luovutus id
             </TableCell>
             <TableCell>
               Vastaanotto id
             </TableCell>
             <TableCell>
               Lainaus pvm
             </TableCell>
             <TableCell>
               Erä pvm
             </TableCell>
             <TableCell>
               Palautus pvm
             </TableCell>
             <TableCell>
               Palautus kunto
             </TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {loans.map(loan  => <Loan_api prop1={loan} />)}
         </TableBody>
       </Table>
     </Paper>
 )
}
}

export default Loan;
