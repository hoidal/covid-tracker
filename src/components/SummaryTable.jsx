import React from 'react'
import Table from 'react-bootstrap/Table';


function SummaryTable({ data }) { 
    console.log(data)
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>New Cases</th>
                    <th>New Deaths</th>
                    <th>New Recoveries</th>
                    <th>Total Cases</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.NewConfirmed ? parseInt(data.NewConfirmed).toLocaleString() : '-'}</td>
                    <td>{data.NewDeaths ? parseInt(data.NewDeaths).toLocaleString() : '-'}</td>
                    <td>{data.NewRecovered ? parseInt(data.NewRecovered).toLocaleString() : '-'}</td>
                    <td>{data.TotalConfirmed ? parseInt(data.TotalConfirmed).toLocaleString() : '-'}</td>
                    <td>{data.TotalDeaths ? parseInt(data.TotalDeaths).toLocaleString() : '-'}</td>
                    <td>{data.TotalRecovered ? parseInt(data.TotalRecovered).toLocaleString() : '-'}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default SummaryTable;