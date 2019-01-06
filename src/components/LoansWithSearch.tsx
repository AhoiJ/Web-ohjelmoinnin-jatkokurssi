import Link from 'next/link'
import React, {Component} from 'react';
import { render } from "react-dom";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class LoanSearch extends React.Component {
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
      <div>
        <ReactTable
          data={loans}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Lainat",
              columns: [
                {
                  Header: "Id",
                  accessor: "id",
                  filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["id"] }),
                filterAll: true
                },
                {
                  Header: "Laitteen Id",
                  id: "laite_id",
                  accessor: d => d.laite_id,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["laite_id"] }),
                  filterAll: true
                },
                {
                  Header: "Lainaajan Id",
                  id: "lainaaja_id",
                  accessor: d => d.lainaaja_id,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["lainaaja_id"] }),
                  filterAll: true
                },
                {
                  Header: "Lainan myöntäjän Id",
                  id: "luovutus_id",
                  accessor: d => d.luovutus_id,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["luovutus_id"] }),
                  filterAll: true
                },
                {
                  Header: "Palautuksen vastaanottajan Id",
                  id: "vastaanotto_id",
                  accessor: d => d.vastaanotto_id,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["vastaanotto_id"] }),
                  filterAll: true
                },
                {
                  Header: "Lainaus päivämäärä",
                  id: "lainaus_pvm",
                  accessor: d => d.lainaus_pvm,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["lainaus_pvm"] }),
                  filterAll: true
                },
                {
                  Header: "Erä päivämäärä",
                  id: "era_pvm",
                  accessor: d => d.era_pvm,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["era_pvm"] }),
                  filterAll: true
                },
                {
                  Header: "Palautus päivämäärä",
                  id: "palautus_pvm",
                  accessor: d => d.palautus_pvm,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["palautus_pvm"] }),
                  filterAll: true
                },
                {
                  Header: "Palautetun laitteen kunto",
                  id: "kunto_palautettaessa",
                  accessor: d => d.kunto_palautettaessa,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {keys: ["kunto_palautettaessa"] }),
                  filterAll: true
                },
              ]
            }
          ]}
        />
        <br />
      </div>
    );
  }
};

export default LoanSearch;
//render(<App />, document.getElementById("root"));
