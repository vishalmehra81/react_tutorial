import React, { Component} from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
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
                    <tr>
                        <td>Ravi</td>
                        <td>Db Mgr</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;