import React, { useState } from 'react';
import { useTable } from 'react-table';
import { saveAs } from 'file-saver';

const Table = ({ columns, data, onDelete }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const App = () => {
  const [data, setData] = useState([
    { id: 1, user: 'John Doe', userGroup: 'Administrator', item: 'Product', label: 'Edit', itemId: 32, itemName: 'iPod Touch', ip: '5.232.104.65', dateAdded: '15/02/2020 20:11:12' },
    { id: 2, user: 'Demo', userGroup: 'Demonstration', item: 'Catacono', label: 'Edit', itemId: 14, itemName: 'MP3', ip: '5.939.104.65', dateAdded: '15/02/2020' },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);

  const columns = React.useMemo(
    () => [
      { Header: 'Select', accessor: 'id', Cell: ({ row }) => <input type="checkbox" onChange={() => handleSelect(row.id)} /> },
      { Header: 'User', accessor: 'user' },
      { Header: 'User Group', accessor: 'userGroup' },
      { Header: 'Item', accessor: 'item' },
      { Header: 'Label', accessor: 'label' },
      { Header: 'Item ID', accessor: 'itemId' },
      { Header: 'Item Name', accessor: 'itemName' },
      { Header: 'IP', accessor: 'ip' },
      { Header: 'Date Added', accessor: 'dateAdded' },
    ],
    []
  );

  const handleSelect = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    setData(prevData => prevData.filter(row => !selectedRows.includes(row.id)));
    setSelectedRows([]);
  };

  const handleExport = () => {
    const csvData = data.map(row => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'table_data.csv');
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Selected</button>
      <button onClick={handleExport}>Export Data</button>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;