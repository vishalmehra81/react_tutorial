import React, {Component} from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
}
const TableBody = () => {
    return (
      <tbody>
        <tr>
          <td>Vishal</td>
          <td>Unemployed</td>
        </tr>
        <tr>
          <td>Nidhi</td>
          <td>Java Developer</td>
        </tr>
        <tr>
          <td>Shanaya</td>
          <td>Student</td>
        </tr>
        <tr>
          <td>Kabir</td>
          <td>Student</td>
        </tr>
      </tbody>
    )
}
class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }

  export default Table;
