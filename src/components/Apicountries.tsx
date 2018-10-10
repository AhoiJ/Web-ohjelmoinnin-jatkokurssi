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


async componentDidMount() {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const data = await response.json();
  console.log('data is here:', data);
  this.setState({ countries: data });

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
                  Capital
                </TableCell>
                <TableCell>
                  Region
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map(country  => <Country prop1={country} />)}
            </TableBody>
          </Table>
        </Paper>
    )
  }
}

export default Apicountries;
