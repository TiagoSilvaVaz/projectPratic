import React from "react"
import app from '../firebase'
import { getDatabase, ref, set } from "firebase/database";


class CadastroConteiner extends React.Component {
    no_database = 'conteiner'

    state ={
        identificacao: '',
        nomeDoCliente: '',
    }

    handleChanger = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value})
    }

    addEedit = obj => {
        const db = getDatabase();
        set(ref(db, this.no_database+'/'+obj.documento ), {
            ...obj //operador SPREAD
        });
        try{
            app.child(this.no_database).push(
                obj,
                error => {
                    if(error){
                        console.log(error)
                    }
                }
            )
        }catch{

        }
     }

    //Ação do botão para cadastrar
    cadastrar = () => {
        //preparar objeto para o firebase
        let novoCadastro = {
            identificacao: this.state.identificacao,
            nomeDoCliente: this.state.nomeDoCliente
        };

        //subir para o firebase
        this.addEedit(novoCadastro);

        //limpar campos
        this.setState({ nome: '',  documento: ''});
            
    }
    render(){

        return (
            <div>
                {this.state.identificacao} <br/>
                {this.state.nomeDoCliente} <br/>
                <div className="form-group input-group">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
        
                        </div>
                    </div>
                    <input className="form-control" placeholder="Identificação do conteiner"  
                        value={this.state.nome} 
                        nomeDoCliente="cliente" 
                        onChange={this.handleChanger} />
                </div>
                <div className="form-group input-group">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
        
                        </div>
                    </div>
                    <input className="form-control" placeholder="Cliente"  
                        value={this.state.documento} 
                        nomeDoCliente="Cliente" 
                        onChange={this.handleChanger} />
                </div>
                    <button onClick ={this.cadastrar}>salvar</button>
                <br/>

                
                <select className="custom-select" placeholder="Tipo Container">
                    <option value="20">20</option>
                    <option value="40">40</option>
                </select>
                <select className="custom-select" placeholder="Status Container">
                    <option value="CHEIO">CHEIO</option>
                    <option value="VAZIO">VAZIO</option>
                </select>
                <input type="date"/>
                <input type="time"/>
            </div>
        )
    }
}

export default CadastroConteiner