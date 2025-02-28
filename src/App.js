import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import './App.css'; // Create App.css for styling

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      user: 'Billy Butcher',
      userGroup: 'Administrator',
      item: 'Product',
      label: 'Edit',
      itemID: 32,
      itemName: 'iPod Touch',
      ip: '5.232.104.65',
      dateAdded: '15/02/2020 20:11:12',
    },
    {
      id: 2,
      user: 'Demo',
      userGroup: 'Demonstration',
      item: 'Category',
      label: 'Edit',
      itemID: 34,
      itemName: 'MP3',
      ip: '5.232.104.65',
      dateAdded: '15/02/2020 20:11:12',
    },
    // Add more data here
  ]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [filteredData, setFilteredData] = useState(data); // Initialize with all data

  // Filter State
  const [userFilter, setUserFilter] = useState('');
  const [userGroupFilter, setUserGroupFilter] = useState('');
  const [itemFilter, setItemFilter] = useState('');
  const [labelFilter, setLabelFilter] = useState('');
  const [itemIDFilter, setItemIDFilter] = useState('');
  const [ipFilter, setIpFilter] = useState('');
  const [dateStartFilter, setDateStartFilter] = useState('');
  const [dateEndFilter, setDateEndFilter] = useState('');

  useEffect(() => {
    applyFilters(); // Apply filters on initial load and when data changes
  }, [
    data,
    userFilter,
    userGroupFilter,
    itemFilter,
    labelFilter,
    itemIDFilter,
    ipFilter,
    dateStartFilter,
    dateEndFilter,
  ]);

  const applyFilters = () => {
    let filtered = [...data];

    if (userFilter) {
      filtered = filtered.filter((item) =>
        item.user.toLowerCase().includes(userFilter.toLowerCase())
      );
    }
    if (userGroupFilter) {
      filtered = filtered.filter((item) =>
        item.userGroup.toLowerCase().includes(userGroupFilter.toLowerCase())
      );
    }
    if (itemFilter) {
      filtered = filtered.filter((item) =>
        item.item.toLowerCase().includes(itemFilter.toLowerCase())
      );
    }
    if (labelFilter) {
      filtered = filtered.filter((item) =>
        item.label.toLowerCase().includes(labelFilter.toLowerCase())
      );
    }
    if (itemIDFilter) {
      filtered = filtered.filter((item) => String(item.itemID).includes(itemIDFilter));
    }
    if (ipFilter) {
      filtered = filtered.filter((item) => item.ip.toLowerCase().includes(ipFilter.toLowerCase()));
    }
    if (dateStartFilter) {
      filtered = filtered.filter((item) => item.dateAdded >= dateStartFilter);
    }

    if (dateEndFilter) {
      filtered = filtered.filter((item) => item.dateAdded <= dateEndFilter);
    }

    setFilteredData(filtered);
  };

  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleDelete = () => {
    const updatedData = data.filter((item) => !selectedRows.includes(item.id));
    setData(updatedData);
    setSelectedRows([]);
  };

  const csvData = [
    ['User', 'User Group', 'Item', 'Label', 'Item ID', 'Item Name', 'IP', 'Date Added'],
    ...filteredData.map((item) => [
      item.user,
      item.userGroup,
      item.item,
      item.label,
      item.itemID,
      item.itemName,
      item.ip,
      item.dateAdded,
    ]),
  ];

  const userOptions = [...new Set(data.map((item) => item.user))]; // Get unique user values
  const userGroupOptions = [...new Set(data.map((item) => item.userGroup))];
  const itemOptions = [...new Set(data.map((item) => item.item))];
  const labelOptions = [...new Set(data.map((item) => item.label))];

  const clearFilters = () => {
    setUserFilter('');
    setUserGroupFilter('');
    setItemFilter('');
    setLabelFilter('');
    setItemIDFilter('');
    setIpFilter('');
    setDateStartFilter('');
    setDateEndFilter('');
    setFilteredData(data); // Reset filtered data to the original data
  };

  return (
    <div className="container">
      <div className="filter-section">
        <h3>Filter</h3>
        <div className="filter-row">
          <div className="filter-col">
            <label>User</label>
            <select value={userFilter} onChange={(e) => setUserFilter(e.target.value)}>
              <option value="">All</option>
              {userOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-col">
            <label>User Group</label>
            <select value={userGroupFilter} onChange={(e) => setUserGroupFilter(e.target.value)}>
              <option value="">All</option>
              {userGroupOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-col">
            <label>Item</label>
            <select value={itemFilter} onChange={(e) => setItemFilter(e.target.value)}>
              <option value="">All</option>
              {itemOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-col">
            <label>Label</label>
            <select value={labelFilter} onChange={(e) => setLabelFilter(e.target.value)}>
              <option value="">All</option>
              {labelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="filter-row">
          <div className="filter-col">
            <label>Item ID</label>
            <input
              type="text"
              value={itemIDFilter}
              onChange={(e) => setItemIDFilter(e.target.value)}
            />
          </div>
          <div className="filter-col">
            <label>IP</label>
            <input type="text" value={ipFilter} onChange={(e) => setIpFilter(e.target.value)} />
          </div>
          <div className="filter-col">
            <label>Date Start</label>
            <input
              type="date"
              value={dateStartFilter}
              onChange={(e) => setDateStartFilter(e.target.value)}
            />
          </div>
          <div className="filter-col">
            <label>Date End</label>
            <input
              type="date"
              value={dateEndFilter}
              onChange={(e) => setDateEndFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="filter-buttons">
          <button className="clear-button" onClick={clearFilters}>
            Clear
          </button>
          <button className="filter-button">Filter</button>
        </div>
      </div>

      <div className="table-controls">
        <button className="delete-button" onClick={handleDelete} disabled={selectedRows.length === 0}>
          Delete
        </button>
        <CSVLink data={csvData} filename="user_activity.csv" className="export-button">
          Export to CSV
        </CSVLink>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>User Group</th>
            <th>Item</th>
            <th>Label</th>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>IP</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.user}</td>
              <td>{item.userGroup}</td>
              <td>{item.item}</td>
              <td>{item.label}</td>
              <td>{item.itemID}</td>
              <td>{item.itemName}</td>
              <td>{item.ip}</td>
              <td>{item.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
