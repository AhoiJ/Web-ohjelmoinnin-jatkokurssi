import Link from 'next/link'
import React, {Component} from 'react';
import { render } from "react-dom";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class UserSearch extends React.Component {
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
      <div>
        <ReactTable
          data={users}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Käyttäjät",
              columns: [
                {
                  Header: "Id",
                  accessor: "id",
                  filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["id"] }),
                filterAll: true
                },
                {
                  Header: "Etunimi",
                  id: "fname",
                  accessor: d => d.fname,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fname"] }),
                  filterAll: true
                },
                {
                  Header: "Sukunimi",
                  id: "lname",
                  accessor: d => d.lname,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["lname"] }),
                  filterAll: true
                }
              ]
            }
          ]}
        />
        <br />
      </div>
    );
  }
};

export default UserSearch;
//render(<App />, document.getElementById("root"));
