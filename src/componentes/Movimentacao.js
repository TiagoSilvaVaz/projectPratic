import React from "react"
import app from '../firebase'
import { getDatabase, ref, set } from "firebase/database";
import { render } from "@testing-library/react";

class Movimentacao extends React.Component {
    no_database = 'Movimentacao'
   
    render(){
        <div>
            <select className="custom-select" placeholder="Tipo Movimentação">
                <option value="Embarque">Embarque</option>
                <option value="Descarga">Descarga</option>
                <option value="Gate In">Gate In</option>
                <option value="Gate Out">Gate Out</option>
                <option value="Reposicionamento">Reposicionamento</option>
                <option value="Pesagem">Pesagem</option>
                <option value="Scanner">Scanner</option>
            </select>
                <input type="date"/>
                <input type="time"/>
        </div>
    }
}
export default Movimentacao
