import { Button } from "bootstrap";
import React, { Component } from "react";

class BackOfficeMenu extends Component {

  render() {
    return (
      <>
        <form>
          <h2 className="welcome">Back Office Menu</h2>
          <br />
          <br />
          <br />
          {/* <table class="table">
            <tr>
              <td> */}
          <input
            class="btn btn-primary"
            type="button"
            value="Customer Request"
            onClick={()=> window.location= "/listcustomerreq"}
          />
          {/* </td>
              <td> */}

          <br />
          <br />
          <br />
          <input class="btn btn-secondary" type="button" value="Sign out" 
          onClick={()=> window.location = "/"}
          />
          {/* </td>
            </tr> */}
          {/* </table> */}
        </form>
      </>
    );
  }
}
export default BackOfficeMenu;
