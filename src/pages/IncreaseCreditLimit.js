import React, { Component } from 'react'
import DataServices from "../Services/DataServices";
import validator from "validator";
class IncreaseCreditLimit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditlimit_id: "",
      request_credit_Limit:null,
      status: "",
      response: "",
      data: [],
    };
    this.onChangeStatus=this.onChangeStatus.bind(this)
  }
  componentDidMount() {
    DataServices.fetchIncreaseCreditLimit(localStorage.getItem("reqId")).then((result) => {
      this.setState({
        data: result.data,
      });
      console.log(this.state.data);
    });
  }

  handleSubmitCardInfo() {
    console.log("inside")
    console.log(this.state.response)
    console.log(this.state.request_credit_Limit)
    let datalist = {
      creditlimit_id: localStorage.getItem("reqId"),
      status: this.state.status,
      response: this.state.response,
      request_credit_Limit: Number(this.state.approvedLimit)
    };
    if(this.state.status==""){this.setState({msg2:"Please Select Status"})}

    // else if(){
    //   this.setState({
    //     approvedLimitMsg:"Please Enter the Correct Limit"
    //  })}

    
     if(this.state.approvedLimit ==null || !validator.isNumeric(this.state.approvedLimit)){
           this.setState({
             approvedLimitMsg:"Please Enter the Correct Limit"
          })}
   else if(this.state.status=="rejected" && this.state.response==""){
      this.setState({
          msg:"Please Enter Reason"
      })
  }
  else{
     console.log(datalist);
     console.log("requestBlock");
    DataServices.updateCreditLimit(datalist).then((result) => {
      let data = JSON.stringify(result);
      var obj = JSON.parse(data);

      if (obj.data.status == "success") {
        console.log("success");
        window.location='/listcustomerreq'
      }
     });
   }
  }

  

  onChangeStatus(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(name + "----" + value);
  }
  render(){
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
              <td scope="col">{this.state.data.name}</td>
            </tr>
            <tr>
              <td scope="col">Card Type</td>
              <td scope="col">{this.state.data.card_type}</td>
            </tr>  
            <tr>
              <td scope="col">Card Number</td>
              <td scope="col">{this.state.data.card_number}</td>
            </tr>  
            <tr>
              <td scope="col">Current Credit Limit</td>
              <td scope="col">{this.state.data.credit_limit}</td>
            </tr>  
            <tr>
              <td scope="col">Maximum Credit Limit</td>
              <td scope="col">{this.state.data.max_credit_limit}</td>
            </tr>  
            <tr>
              <td scope="col">Requested Credit Limit</td>
              <td scope="col">{this.state.data.requested_credit_limit}</td>
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
                        this.onChangeStatus(e);
                      }}
                      value={this.state.status}
                    >
                      <option value="" ></option>
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <div>{this.state.msg2}</div>
                  </td>
                </tr>
    <tr>
      <td scope="col">Approved Credit Limit</td>
      <td><input type="text" class="form-control"name="approvedLimit"
                      onChange={(e) => {
                        this.onChangeStatus(e);
                      }}/><div>{this.state.approvedLimitMsg}</div></td>
    </tr>
    <tr>
      <td scope="col">Response</td>
      <td><input type="text" class="form-control" name="response"
                      onChange={(e) => {
                        this.onChangeStatus(e);
                      }}/><div>{this.state.msg}</div></td>
    </tr>
        <tr>
        <td><input class="btn btn-success" type="button" value="Submit"  onClick={() => {
              this.handleSubmitCardInfo();
            }}/></td>
        
        <td><input
          onClick={()=> window.location="/listcustomerreq"}
          class="btn btn-secondary" type="button" value="Back"/></td>
        </tr>
        </tbody>
        </table>
        </div>
      </form>
    </>

  )}
}

export default IncreaseCreditLimit