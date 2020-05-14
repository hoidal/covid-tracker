import React, { Component } from 'react';
import SummaryTable from '../../components/SummaryTable';
import TableComponent from '../../components/TableComponent'; 

class HomePage extends Component {

    state = {
        currentDate: '',
        globalSummary: {},
        countryData: []
    }

    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(data => this.setState({
            currentDate: data.Date,
            globalSummary: data.Global,
            countryData: data.Countries
        }))
    }


    render() {
        console.log(this.state)
        const formattedDate = new Date(Date.parse(this.state.currentDate)).toLocaleString();
        const columns = [
            {Header: 'Country', accessor: 'Country'},
            {Header: 'Total Cases', accessor: 'TotalConfirmed'},
            {Header: 'Total Deaths', accessor: 'TotalDeaths'},
            {Header: 'New Cases', accessor: 'NewConfirmed'},
            {Header: 'New Deaths', accessor: 'NewDeaths'},
            {Header: 'Total Recovered', accessor: 'TotalRecovered'},
            {Header: 'New Recovered', accessor: 'NewRecovered'}
        ];
        return (
            <div>
                <h1>Current Date and Time: {formattedDate === 'Invalid Date' ? null : formattedDate}</h1>
                <SummaryTable 
                    data={this.state.globalSummary}
                />
                <TableComponent 
                    data={this.state.countryData} 
                    columns={columns}
                />
            </div>
        )
    }
}

export default HomePage;