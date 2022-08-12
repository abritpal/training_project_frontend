import React from "react";

const AddOnCards = (props) => {
  return (
    <>
      <h3>Add on Card</h3>
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
                <td scope="col">Account Number</td>
                <td scope="col">XXXXXx</td>
              </tr>
              <tr>
                <td scope="col">Customer Name</td>
                <td scope="col">XXXXXx</td>
              </tr>
              <tr>
                <td scope="col">Request Date</td>
                <td scope="col">XXXXXx</td>
              </tr>
              <tr>
                <td scope="col">Name on card</td>
                <td scope="col">XXXXXx</td>
              </tr>

              <tr>
                <td>
                  <label for="cars">Choose a car: </label>
                </td>
                <td>
                  <select name="requestType" class="form-select">
                    <option value="value" selected></option>
                    <option value="Chequebook Requests">
                      Chequebook Requests
                    </option>
                    <option value="Disputed Transactions">
                      Disputed Transactions
                    </option>
                    <option value="Add On Card Requests">
                      Add On Card Requests
                    </option>
                    <option value="Lost/Stolen Cards">Lost/Stolen Cards</option>
                    <option value="Increase In Credit Limit">
                      Increase In Credit Limit
                    </option>
                  </select>
                </td>
              </tr>
              <td>
                <label for="cars">Status: </label>
              </td>
              <td>
                <select name="requestType" class="form-select">
                  <option value="value" selected></option>
                  <option value="Chequebook Requests">
                    Chequebook Requests
                  </option>
                  <option value="Disputed Transactions">
                    Disputed Transactions
                  </option>
                  <option value="Add On Card Requests">
                    Add On Card Requests
                  </option>
                  <option value="Lost/Stolen Cards">Lost/Stolen Cards</option>
                  <option value="Increase In Credit Limit">
                    Increase In Credit Limit
                  </option>
                </select>
              </td>
            </tbody>
          </table>
        </div>
        <input class="btn btn-success" type="submit" value="Submit" />
        &nbsp;
        <button class="btn btn-secondary">Back</button>
      </form>
    </>
  );
};

export default AddOnCards;
