import React from 'react'

const IncreaseCreditLimit = () => {
  return (
    <>
    <h3>Increase Credit Limit</h3>
    <form>
        {/* <label for="Account Number">Account Number: </label>
        <label for="Accoutn Number">{props.acc} </label>
        
        <label for="cars">Customer Name: </label>
        <label for="cars">{props.name} </label>

        <label for="cars">Request Date </label>
        <label for="cars">{props.reqDate} </label>
        
        <label for="cars">Name on Card </label>
        <label for="cars">{props.nameOnCard} </label> */}
        <div align="center">
        <table class="table">
          <tbody>
            <tr>
              <td scope="col">Name </td>
              <td scope="col">XXXXXx</td>
            </tr>
            <tr>
              <td scope="col">Card Type</td>
              <td scope="col">XXXXXx</td>
            </tr>  
            <tr>
              <td scope="col">Card Number</td>
              <td scope="col">XXXXXx</td>
            </tr>  
            <tr>
              <td scope="col">Current Credit Limit</td>
              <td scope="col">XXXXXx</td>
            </tr>  
            <tr>
              <td scope="col">Maximum Credit Limit</td>
              <td scope="col">XXXXXx</td>
            </tr>  
            <tr>
              <td scope="col">Requested Credit Limit</td>
              <td scope="col">XXXXXx</td>
            </tr>  
        
      <tr>
        <td>  <label for="cars">Status </label></td>
        <td><select name="requestType" class="form-select">
          <option value="value" selected></option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Rejected">Rejected</option>
        </select>
        </td>
    </tr>
    <tr>
      <td scope="col">Approved Credit Limit</td>
      <td><input type="text" class="form-control"></input></td>
    </tr>
    <tr>
      <td scope="col">Response</td>
      <td><input type="text" class="form-control"></input></td>
    </tr>
        <tr>
        <td><input class="btn btn-success" type="submit" value="Submit"/></td>
        
        <td><button class="btn btn-secondary">Back</button></td>
        </tr>
        </tbody>
        </table>
        </div>
      </form>
    </>

  )
}

export default IncreaseCreditLimit