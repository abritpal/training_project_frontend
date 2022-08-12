import React from "react";
const data = [
  
  { reqType: "lost_stolen", request_date: 24, lst_request: "Female", request_id: 4 },
  { name: "Tom", age: 26, gender: "Male", designation: "Front End Developer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" },
];
const handleClick = (reqType,reqId) =>{
  console.log("working")
  // localStorage.removeItem("reqType")
  // localStorage.removeItem("reqID")
  // localStorage.setItem("reqItem", reqType)
  // localStorage.setItem("reqID")
  if (reqType== "lost_stolen"){
    window.location("/loaststolencards")
  }
}

const ListCustomerReq = () => {
  
  return (
    <div>
      <h3>List of Customer Request</h3>
      <form>
        <div>
          <label for="cars">Request Type: </label>
          <select name="requestType" class="form-select">
            <option value="value" selected></option>
            <option value="Chequebook Requests">Chequebook Requests</option>
            <option value="Disputed Transactions">Disputed Transactions</option>
            <option value="Add On Card Requests">Add On Card Requests</option>
            <option value="Lost/Stolen Cards">Lost/Stolen Cards</option>
            <option value="Increase In Credit Limit">
              Increase In Credit Limit
            </option>
          </select>
        </div>
        <br />
        <label for="cars">Status: </label>
        <select
          name="requestType"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="value" selected></option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Rejected">Rejected</option>
          
        </select>
        <br />
        <input class="btn btn-danger" type="submit" value="Submit"/>
        
      </form>

      <div align="center">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col"> Gender</th>
              <th scope="col">Designation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => {
              return (
                <tr key={key}
                onClick={()=> handleClick(value.reqType)}
                >
                  <td>{value.reqType}</td>
                  <td>{value.age}</td>
                  <td>{value.gender}</td>
                  <td>{value.designation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button class="btn btn-secondary">Back</button>
    </div>
  );
};

export default ListCustomerReq;
