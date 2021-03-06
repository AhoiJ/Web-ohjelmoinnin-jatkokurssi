import Link from 'next/link'
import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import ReactTable from "react-table";
import Equipment_api from './Equipment_api';

class Equipment extends Component{
constructor() {
  super();
  this.state ={equipments:[]}
}

async componentDidMount() {
  const response = await fetch('http://localhost:9000/api/v1/equipments')
  const data = await response.json();
  console.log('data is here:', data);
  this.setState({ equipments: data });

}

render() {

 const { equipments } = this.state;
 return (
     <Paper>
       <h1>Laitteet</h1>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell>
               Id
             </TableCell>
             <TableCell>
               Kategoria id
             </TableCell>
             <TableCell>
               Sarjanumero
             </TableCell>
             <TableCell>
               Kunto
             </TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {equipments.map(equipment  => <Equipment_api prop1={equipment} />)}
         </TableBody>
       </Table>
     </Paper>
 )
}
}

export default Equipment;
