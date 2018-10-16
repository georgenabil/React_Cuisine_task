import React, { Component } from 'react';
import './Order.css'

class Order extends Component {
    render() {
        return (

            <div className="left-div inline">

                <div className="order-info">
                    <p>Date: 16/072018</p>
                    <p>Hour:12:53: Pm </p>
                    <p>Minmum Charge: 0.00</p>

                    <h2>TakeAway #100</h2>
                    <button className=" b button nav-btn">Customer name</button>
                    <br />
                    <br />

                    <table style={{ border: "1px solid black" }}>
                        <tbody>
                            <tr>
                                <th>Qty</th>
                                <th>Item</th>
                                <th>Size</th>
                                <th>Each</th>
                                <th>Total</th>
                            </tr>
                        </tbody>
                    </table>
                    <h4>No Items Curently Order</h4>

                </div>
                <div className="order-contnet">

                    <button id="addbtn" className=" b button">+</button>

                    <div className="cash-div inline">

                        <div className="cash-btn-div">
                            <button id="flash" className="button "><span role="img" className=" glyphicon">&#9889;</span>Fast cash</button>
                        </div>

                        <div className="cash-info inline">
                            <h4>DisCountes:0.00</h4>
                            <h4>Subcharges:0.00</h4>
                            <h4> Tax:0.00</h4>

                        </div>
                        <div className="cash-info2 inline">

                            <h2 style={{ color: "red" }}>Total:50.00</h2>
                            <h4> Balance due:   50.00</h4>

                        </div>


                    </div>


                </div>

                <hr />
                <br /><br />
                <button key={1} className="button cir-btn"><span role="img" className=" glyphicon">&#10005;</span>Cancel Order</button>
                <button key={2} className="button cir-btn"><span role="img" className=" glyphicon">&#37;</span>Discount Order</button>
                <button key={3} className="button cir-btn"><span role="img" className=" glyphicon">&#128339;</span>Hold Order</button>
                <button id="dolar" className="b button cir-btn"><span role="img" className=" glyphicon">&#36;</span>Pay</button>

                <br /><br />


            </div>

        )

    }
}

export default Order;
