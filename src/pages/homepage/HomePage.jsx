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
            {Header: 'Total Cases', accessor: 'TotalConfirmed',  Cell: props => parseInt(props.value).toLocaleString()},
            {Header: 'Total Deaths', accessor: 'TotalDeaths', Cell: props => parseInt(props.value).toLocaleString()},
            {Header: 'New Cases', accessor: 'NewConfirmed', Cell: props => parseInt(props.value).toLocaleString()},
            {Header: 'New Deaths', accessor: 'NewDeaths', Cell: props => parseInt(props.value).toLocaleString()},
            {Header: 'Total Recovered', accessor: 'TotalRecovered', Cell: props => parseInt(props.value).toLocaleString()},
            {Header: 'New Recovered', accessor: 'NewRecovered', Cell: props => parseInt(props.value).toLocaleString()}
        ];
        return (
            <div style={{width: "80%"}}>
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