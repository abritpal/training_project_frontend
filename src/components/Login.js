import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
// import './stylesheet.css';
import DataServices from "../Services/DataServices";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        empID: "",
        empPass:"",
          data: []
        };
      }
    onChangeLogin(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(name + "----" + value);
  }
  componentDidMount(){
    DataServices.fetchEmpLogin(1).then(
        (result) => {
          this.setState({
            data: result.data,
          });
        } 
      );
      console.log("continue")
  }
  handleLogin(){
    // DataServices.fetchEmpLogin(this.state.empID).then(
    //     (result) => {
    //       this.setState({
    //         data: result.data,
    //       });
    //     } 
    //   );
      console.log(this.state.data.empPass+" this is id and pass "+this.state.empPass)
    //   console.log(this.state.data)
      if(this.state.empPass === this.state.data.empPass){
        console.log("working")
        // localStorage.setItem("emp")
        window.location ="/backofficemenu";
      }
  }
  render() {
    return (
      <div>
        <form>
          <h2 className="welcome">Welcome to Back Office Services</h2>
          <br />
          <br />
          <br />
          <table class="table">
            <tr>
              <td>
                <sup>*</sup>User Name :{" "}
              </td>
              <td>
                <input
                  onChange={(e) => {
                    this.onChangeLogin(e);
                  }}
                  class="form-control"
                  type="text"
                  name="empID"
                />
              </td>
            </tr>

            <tr>
              <td>
                <sup>*</sup>Password :{" "}
              </td>
              <td>
                <input
                  onChange={(e) => {
                    this.onChangeLogin(e);
                  }}
                  class="form-control"
                  type="text"
                  name="empPass"
                />
              </td>
            </tr>
          </table>
          <input onClick={()=>this.handleLogin()} class="btn btn-success" type="button" value="Submit" />
          &nbsp;
          <input
            class="btn btn-secondary"
            type="button"
            value="Clear"
            name="clear"
          />
        </form>
      </div>
    );
  }
}

export default Login;
