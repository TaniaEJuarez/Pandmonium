import React, { Component } from "react";
import Navbar from "../navbar";

class OrderSent extends Component {
    render() {
        return (
            <div className="order-sent">
            <Navbar/>
                <h1 className="sent">¡¡ La orden ha sido enviada !!</h1>
            </div>
        );
    }
}

export default OrderSent;