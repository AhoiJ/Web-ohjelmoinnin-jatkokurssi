    import Link from 'next/link'
    import React, {Component} from 'react';
    import Table from '@material-ui/core/Table';
    import TableBody from '@material-ui/core/TableBody';
    import TableCell from '@material-ui/core/TableCell';
    import TableHead from '@material-ui/core/TableHead';
    import TableRow from '@material-ui/core/TableRow';
    import Paper from '@material-ui/core/Paper';
    import axios from 'axios'
    import User_api from './User_api';


    class User extends Component{
    constructor() {
      super();
      this.state ={users:[]}
    }

    async componentDidMount() {
      const response = await fetch('http://localhost:9000/api/v1/users')
      const data = await response.json();
      console.log('data is here:', data);
      this.setState({ users: data });

    }

    render() {

     const { users } = this.state;
     return (
         <Paper>
           <h1>Users</h1>
           <Table>
             <TableHead>
               <TableRow>
                 <TableCell>
                   Id
                 </TableCell>
                 <TableCell>
                   Etunimi
                 </TableCell>
                 <TableCell>
                   Sukunimi
                 </TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {users.map(user  => <User_api prop1={user} />)}
             </TableBody>
           </Table>
         </Paper>
     )
    }
    }
    export default User;
