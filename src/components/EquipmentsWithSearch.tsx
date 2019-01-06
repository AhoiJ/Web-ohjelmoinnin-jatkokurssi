import Link from 'next/link'
import React, {Component} from 'react';
import { render } from "react-dom";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class EquipmentSearch extends React.Component {
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
      <div>
        <ReactTable
          data={equipments}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Laitteet",
              columns: [
                {
                  Header: "Id",
                  accessor: "id",
                  filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["id"] }),
                filterAll: true
                },
                {
                  Header: "Kategoria Id",
                  id: "kategoria_id",
                  accessor: d => d.kategoria_id,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["kategoria_id"] }),
                  filterAll: true
                },
                {
                  Header: "Sarjanumero",
                  id: "sarjanumero",
                  accessor: d => d.sarjanumero,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["sarjanumero"] }),
                  filterAll: true
                },
                {
                  Header: "Kunto",
                  id: "kunto",
                  accessor: d => d.kunto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["kunto"] }),
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

export default EquipmentSearch;
//render(<App />, document.getElementById("root"));
