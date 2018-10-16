import React, { Component } from 'react';

import './Menu.css'

class Menu extends Component {

    state = {
        menu: "",
        subtab: "",
        breads: "",
        pastas: "",
        pizzas: "",
        soups: "",


    }

    openclosemenu = () => {
        let menu = this.state.menu === "hidden" ? "" : "hidden";
        let subtab = this.state.subtab === "hidden" ? "" : "hidden";
        this.setState({ menu, subtab });
    }
    handleSubMenu = (event) => {

        console.log(event.currentTarget.id.toLowerCase());

    }


    render() {
        return (
            <div className="right-div inline">

                <input type="text" name="sreach" placeholder="sreach" />
                <br /><br />

                <div className="Food-btn">
                    <button className="Food-tab active">Food</button>
                    <button className="Food-tab">Beverage</button>
                    <button className="Food-tab">Marchadise</button>
                    <button className="Food-tab">Meal</button>
                    <button className="Food-tab" onClick={this.openclosemenu}>&#8801;</button>

                </div>

                <div className={"subbuttons " + this.state.subtab}>
                    <button id="BREADS" className="Food-tab sub-tab" onClick={this.handleSubMenu} >Breads</button>
                    <button id="PASTAS" className="Food-tab sub-tab active" onClick={this.handleSubMenu}>Pastas</button>
                    <button id="PIZZAS" className="Food-tab sub-tab" onClick={this.handleSubMenu}>Pizzas</button>
                    <button id="SOUPS" className="Food-tab sub-tab" onClick={this.handleSubMenu}>Soups</button>
                    <button className="Food-tab sub-tab">&#8801;</button>

                </div>



                <div className={"menu " + this.state.menu}>
                    <div id="pastas" className="">
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                        <button className="type">pasta</button>
                    </div>
                    <div id="breads" className="hidden" >
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                        <button className="type">Breads</button>
                    </div>
                    <div id="pizzas" className="hidden" >
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                        <button className="type">Pizzas</button>
                    </div>
                    <div id="soups" className="hidden" >
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                        <button className="type">Soups</button>
                    </div>

                </div>



            </div>

        )
    }
}

export default Menu;