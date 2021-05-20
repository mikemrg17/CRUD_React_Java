import React from "react";
import { Button, Container, Form} from "react-bootstrap";
import axios from "axios";


class Insert extends React.Component {

    state = {
        id: "",
        pregunta: "",
        respuesta: "",
        drags: [],
        targets: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/Crud_React/InsertarPregunta").then(response => {
            console.log({data: response.data});
            console.log(typeof response.data);
            let idGetter = (response.data+1).toString();
            console.log(typeof idGetter);
            this.setState({id:idGetter});
        }).catch(error => {
            console.log(error);
        });
        //this.state.id = ID_DEL_ULTIMO_REGISTRO_+_1
        console.log("Se asignó nuevo id");
    }

    onQuestionChange(value){
        value ? console.log("Aceptado") : console.log("No aceptado");
        this.setState({
            pregunta: value
        },console.log(this.state.pregunta));
        
    }

    onAnswerChange(value){
        value ? console.log("Aceptado") : console.log("No aceptado");
        this.setState({
            respuesta: value
        },console.log(this.state.respuesta));
        
    }

    AddQuestion = e =>{
        e.preventDefault();
        alert("Se insertará la pregunta");
        console.log("Objeto a pasar");
        console.log(this.state);
        axios.post("http://localhost:8080/Crud_React/AgregarPregunta",this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
                console.info(error);
                console.log("Ha ocurrido un error al insertar la pregunta");
        });
    }

    render() {
        return(
            <div className="container mt-5">
                <h3>Agregar nueva pregunta</h3>
                
                <form className="formInsertar" onSubmit={this.AddQuestion}>
                    <input type="text" value={this.state.id} readOnly className="form-control mb-2"/>
                    <input type="text" name="pregunta" id="pregunta" placeholder="Ingrese la pregunta" className="form-control mb-2" onChange={e=>this.onQuestionChange(e.target.value)}/>
                    <input type="text" name="respuesta" id="respuesta" placeholder="Ingrese la respuesta" className="form-control mb-2" onChange={e=>this.onAnswerChange(e.target.value)}/>
                    <input type="button" value="Agregar Drag" onClick={()=>{
                                                let objetoDrag = {
                                                    "valor": "",
                                                    "imagen": "https://via.placeholder.com/150"
                                                }
                                                objetoDrag.valor = prompt("Inserta nombre de algún famoso");
                                                this.state.drags.push(objetoDrag);
                                                console.log("Agregado:" + objetoDrag);
                                            }}/>
                    <input type="button" value="Agregar Target" onClick={()=>{
                                                let objetoTarget = {
                                                    "valor": "",
                                                    "imagen": "https://via.placeholder.com/150"
                                                }
                                                objetoTarget.valor = prompt("Inserta nombre de algún país");
                                                this.state.targets.push(objetoTarget);
                                                console.log("Agregado:" + objetoTarget);
                                            }}/>
                    <div className="d-grid gap-2">
                        <input type="Submit" className="secondary" value="Insertar"/>                                 
                    </div>
                </form>
                <Button variant="secondary" onClick={() => window.location.href = "/Crud_React/"}>
                        Regresar
                </Button>
            </div>
        );
    }
}

export default Insert;

