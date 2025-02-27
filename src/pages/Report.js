import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import * as XLSX from 'xlsx';

function Report() {

  const ExportToExcel=()=>{
     
   const table= document.querySelector('table');
  //  const table = document.getElementById('');
    // Get the table element by its ID  
    // Extract table headers
    const headers = [];
    table.querySelectorAll("thead th").forEach((header) => {
      headers.push(header.innerText);
    });
  
    // Extract table rows
    const rows = [];
    table.querySelectorAll("tbody tr").forEach((row) => {
      const rowData = [];
      row.querySelectorAll("td").forEach((cell) => {
        rowData.push(cell.innerText);
      });
      rows.push(rowData);
    });
  
    // Combine headers and rows into a single array
    const data = [headers, ...rows];
  
    // Convert the data to a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(data);
  
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
    // Write the workbook to a file
    XLSX.writeFile(workbook, 'mydata.xlsx');
  };


  return (
  
    <Table striped bordered hover variant="dark" className='table' >
      <thead >
        <tr>
          <th>Task Name</th>
          <th>Created By</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Download</th>
        </tr>
      </thead >
      <tbody>
     
        <tr>
          <td>Learning HTML </td>
          <td>navin</td>
          <td>Learning HTML basics with detail informatoin</td>
          <td>05/2/2025</td>
          <td>Active</td>
          <td>
          <Button as="input" type="button" value="xlsx" onClick={ExportToExcel} />
               
               </td>
      
         
        </tr>
        <tr>
          <td>Learnig Css Basics</td>
          <td>Geetha</td>
          <td>Learning css basics with detail informatoin</td>
          <td>05/3/2025</td>
          <td>Active</td>
          <td><Button as="input" type="button" value="xlsx"  onClick={ExportToExcel}/>
          {/* <Button as="input" type="button" value="pdf" />
               <Button as="input" type="reset" value="csv" /> */}
               </td>
        </tr>
        <tr>
          <td>Learning Bootstrap </td>
          <td>john</td>
          <td>Learning Bootstrap basics with detail informatoin</td>
          <td>15/4/2025</td>
          <td>inActive</td>
          <td> <Button as="input" type="button" value="xlsx"  onClick={ExportToExcel}/>
          {/* <Button as="input" type="button" value="pdf" />
               <Button as="input" type="reset" value="csv" /> */}
               </td>
          
        </tr>
        
       
       
       
      </tbody>
    </Table>
  );
}



export default Report;