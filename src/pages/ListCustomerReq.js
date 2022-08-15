import React, { Component } from "react";
import DataServices from "../Services/DataServices";

class ListCustomerReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqType: [],
      reqStatus: [],
      reqList: [],
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.onChangeFilter = this.onChangeFilter.bind(this);
  }

  onChangeFilter(event) {
    // let type = event.target.requesttype;
    // let status = event.target.reqStatus;

    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(name + "----" + value);
  }
  handleSubmit() {
      DataServices.fetchAllReq(this.state.requestType, this.state.reqStatus).then(
        (result) => {
          console.log(result);
          this.setState({
            reqList: result.data,
          });
        }
      )
    ;

    console.log(this.state.reqList);
  }
  handleClick = (reqType, reqId) => {
    localStorage.removeItem("reqId");
    localStorage.setItem("reqId",reqId);
    console.log(localStorage.getItem("reqId"),reqType)
    if (reqType == "add_on_card") window.location = "/addoncards";
    else if ((reqType = "lost_stolen")) window.location = "/loststolencards";
    else if ((reqType = "credit_limit"))
      window.location = "/increasecreditlimit";
  };
  render() {
    return (
      <div>
        <h3>List of Customer Request</h3>
        <form>
          <div>
            <label for="reqType">Request Type: </label>
            <select
              name="requestType"
              class="form-select"
              onChange={(e) =>{this.onChangeFilter(e)}}
              value={this.state.requestType}
            >
              <option value="Chequebook Requests">Chequebook Requests</option>
              <option value="Disputed Transactions">
                Disputed Transactions
              </option>
              <option value="add_on_card">Add On Card Requests</option>
              <option value="lost_stolen">Lost/Stolen Cards</option>
              <option value="credit_limit">Increase In Credit Limit</option>
            </select>
          </div>
          <br />
          <label for="cars">Status: </label>
          <select
            name="reqStatus"
            class="form-select"
            aria-label="Default select example"
            onChange={(e) =>{this.onChangeFilter(e)}}
            value={this.state.reqStatus}
          >
                        <option value="" ></option>

            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="rejected">Rejected</option>
          </select>
          <br />
          <input
            onClick={() => {
              this.handleSubmit();
            }}
            class="btn btn-danger"
            type="button"
            value="Submit"
          />
        </form>

        <div align="center">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Request Type</th>
                <th scope="col">Account Number</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Request Data</th>
              </tr>
            </thead>
            <tbody>
              {this.state.reqList.map((value, key) => {
                return (
                  <tr
                    key={key}
                    onClick={() => this.handleClick(value.request_type, value.request_id)}
                  >
                    <td>{value.request_type}</td>
                    <td>{value.account_no}</td>
                    <td>{value.customer_name}</td>
                    <td>{value.request_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button class="btn btn-secondary">Back</button>
      </div>
    );
  }
}
export default ListCustomerReq;
