import React, { Component } from "react";
import InputIncreaseDecrease from "./increase_decrease";

import DataMenu from "./menu.json";

class PizzaMenu extends Component {
  
  render() {

    let nuevo = DataMenu[this.props.indice].tipo;
    
    return (
      
      <table className="tag-menu-product">
        <thead>
          <tr>
            <th>Opciones</th>
            <th>Cantidad</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <select className="options-menu">
                {
                nuevo.map((x,index)=>{
                  return <option key={index} value={x.name}>{x.name}</option>;
                })
              }
              </select>
            </th>

            <td>
              <InputIncreaseDecrease />
            </td>

            <th>
              <select className="options-menu">
                <option>Elige un tamaño</option>
              </select>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PizzaMenu;
