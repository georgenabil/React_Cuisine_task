import React, { Component } from 'react';
import './Navbar.css'



class Navbar extends Component {
    render() {
        return (

            <div className="navbar">
                <div className="img-div inline">
                    <img src="Cuisine.png" alt="img" />
                </div>

                <div className="buttons-div buttons inline">
                    <p href="" className="inline" style={{ color: "red" }}> Bussines Day/shift</p>
                    <select className="b button nav-btn" >
                        <option value="takeaway">MODE: TakeAway</option>
                        <option value="">MODE:delv</option>
                        <option value="mercedes">MODE:test</option>
                        <option value="audi">MODE:trance</option>
                    </select>
                    <button className=" button nav-btn">Order Queue</button>

                    <button className=" button nav-btn">admin</button>
                </div>
            </div >

        )

    }
}

export default Navbar;
