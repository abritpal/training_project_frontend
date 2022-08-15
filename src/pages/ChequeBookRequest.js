import React, { Component } from "react";
import DataServices from "../Services/DataServices";
class ChequeBookRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addon_card_request_id: "",
      status: "",
      reason: "",
      data: [],
    };
  }
  componentDidMount() {
    DataServices.fetchChequeBookRequest(1).then((result) => {
      this.setState({
        data: result.data,
      });
      console.log(this.state.data);
    });
  }
  onChangeStatusChequeBookRequest(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
    // console.log(name + "----" + value);
  }
  handleSubmitChequeBookRequest() {
    let datalist = {
      chequebook_id: 1,
      status: this.state.status,
      reason: this.state.reason,
    };
    console.log(datalist);
    DataServices.updateChequeBookRequest(datalist).then((result) => {
      let data = JSON.stringify(result);
      var obj = JSON.parse(data);

      if (obj.data.status == "success") {
        console.log("success");
      }
    });
  }
  render() {
    return (
      <>
        <h3>Cheque Book Request</h3>
        <form>
          <div align="center">
            <table class="table">
              <tbody>
                <tr>
                  <td scope="col">Account Number</td>
                  <td scope="col">{this.state.data.account_number}</td>
                </tr>
                <tr>
                  <td scope="col">Account Type</td>
                  <td scope="col">{this.state.data.account_type}</td>
                </tr>
                <tr>
                  <td scope="col">Customer Name</td>
                  <td scope="col">{this.state.data.customer_name}</td>
                </tr>
                <tr>
                  <td scope="col">Request Date</td>
                  <td scope="col">{this.state.data.request_date}</td>
                </tr>
                <tr>
                  <td scope="col">Number of Leaves</td>
                  <td scope="col">{this.state.data.no_of_leaves}</td>
                </tr>

                <tr>
                  <td>
                    <label for="cars">Status: </label>
                  </td>
                  <td>
                    <select
                      name="status"
                      class="form-select"
                      onChange={(e) => {
                        this.onChangeStatusChequeBookRequest(e);
                      }}
                      value={this.state.status}
                    >
                      <option value="" ></option>
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Reason for Rejection: </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      name="reason"
                      onChange={(e) => {
                        this.onChangeStatusChequeBookRequest(e);
                      }}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <input
            class="btn btn-success"
            type="button"
            value="Submit"
            onClick={() => {
              this.handleSubmitChequeBookRequest();
            }}
          />
          &nbsp;
          <input
          onClick={()=> window.location="/listcustomerreq"}
          class="btn btn-secondary" type="button" value="Back"/>
        </form>
      </>
    );
  }
}

export default ChequeBookRequest;
