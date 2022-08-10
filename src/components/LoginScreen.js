import React from "react";
import {Component} from 'react';
import {Link} from 'react-router-dom';
import './stylesheet.css';


class LoginScreen extends Component{

    render(){
        return(

            <div>



                <h2 className="welcome" >Welcome to Back Office Services</h2>
                <br/>
                <br/>
                <br/>


<table class ="table">
<tr>
    <td><sup>*</sup>User Name : </td>
    <td><input type="text" name="name" /></td>
</tr>

<tr>
    <td><sup>*</sup>Password : </td>
    <td><input type="text" name="password" /></td>
</tr>

<tr>
    <td><input type="button" value= "Submit" name = "submit"/></td>
    <td><input type ="button" value = "Clear" name= "clear" /></td>
</tr>
</table>
            </div>

        )
    }

}



export default LoginScreen