import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import Country from './Country';


class Apicountries extends Component{
constructor() {
  super();

  this.state ={countries:[]}
}


componentDidMount() {
   fetch('https://restcountries.eu/rest/v2/all')
     .then(response => response.json())
     .then(({results: countries}) => this.setState({countries}))
   }

   render() {
  //   let countries = this.state.countries
    const { countries } = this.state;
    return (
        <Paper>
          <h1>Countries</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Population
                </TableCell>
                <TableCell>
                  Percentage
                </TableCell>
                <TableCell>
                  Position
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map(country => <Country prop1={country} />)}
            </TableBody>
          </Table>
        </Paper>
    )
  }
}

export default Apicountries;
