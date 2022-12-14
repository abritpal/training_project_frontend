import { render } from "@testing-library/react";
import React, { Component } from "react";
import DataServices from "../Services/DataServices";
class LostStolenCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // addon_card_request_id: "",
      status: "",
      reason: "",
      data: [],
    };
  }
    componentDidMount() {
      DataServices.fetchLostStolenCard(localStorage.getItem("reqId")).then((result) => {
        this.setState({
          data: result.data,
        });
      });
    }

  onChangeStatusLostStolen(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
    // console.log(name + "----" + value);
  }
  handleSubmitLostStolen() {
    let datalist = {
      lstRequestId: localStorage.getItem("reqId"),
      status: this.state.status,
      reason: this.state.reason
    };
    console.log(datalist);
    DataServices.updateLostStolen(datalist).then((result) => {
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
        <h3>Lost/Stolen Card</h3>
        <form>
          <div align="center">
            <table class="table">
              <tbody>
                <tr>
                  <td scope="col">Card Number</td>
                  <td scope="col">{this.state.data.card_number}</td>
                </tr>
                <tr>
                  <td scope="col">Card Type</td>
                  <td scope="col">{this.state.data.card_type}</td>
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
                        this.onChangeStatusLostStolen(e);
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
                    <label>Reason: </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      name="reason"
                      onChange={(e) => {
                        this.onChangeStatusLostStolen(e);
                      }}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <input class="btn btn-success" type="button" value="Submit" 
          onClick={()=>{this.handleSubmitLostStolen()}}
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

export default LostStolenCards;
