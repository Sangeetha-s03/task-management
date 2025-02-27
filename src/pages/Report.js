import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Report() {
  return (
    <Table striped bordered hover variant="dark" className='table'>
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
          <td> <Button as="input" type="button" value="xlsx" />
          <Button as="input" type="button" value="pdf" />
               <Button as="input" type="reset" value="csv" /></td>
      
         
        </tr>
        <tr>
          <td>Learnig Css Basics</td>
          <td>Geetha</td>
          <td>Learning css basics with detail informatoin</td>
          <td>05/3/2025</td>
          <td>Active</td>
          <td><Button as="input" type="button" value="xlsx" />
          <Button as="input" type="button" value="pdf" />
               <Button as="input" type="reset" value="csv" /></td>
        </tr>
        <tr>
          <td>Learning Bootstrap </td>
          <td>john</td>
          <td>Learning Bootstrap basics with detail informatoin</td>
          <td>15/4/2025</td>
          <td>inActive</td>
          <td> <Button as="input" type="button" value="xlsx" />
          <Button as="input" type="button" value="pdf" />
               <Button as="input" type="reset" value="csv" /></td>
          
        </tr>
        
       
       
       
      </tbody>
    </Table>
  );
}



export default Report