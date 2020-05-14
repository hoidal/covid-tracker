import React from 'react'
import Table from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

function TableComponent({ columns, data }) {
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow 
    } = useTable({
        data, 
        columns
    }, useSortBy);

    return (
        <Table striped bordered {...getTableProps()}>
            <thead className="thead-dark">
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => {
                            const {
                                render, 
                                getHeaderProps,
                                isSorted,
                                isSortedDesc,
                                getSortByToggleProps
                                } = column;
                                const sortedClass = isSorted
                                    ? isSortedDesc
                                        ? 'desc'
                                        : 'asc'
                                    : '';
                            return (
                                <th className={sortedClass}
                                    {...getHeaderProps(getSortByToggleProps())}
                                >
                                    {render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                                    </span>
                                </th>
                            )
                        })}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )
}

export default TableComponent;