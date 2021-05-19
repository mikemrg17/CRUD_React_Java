import React from "react";
import { Button, Container} from "react-bootstrap";
import axios from "axios";
import '../styles/editar.css';
import { Redirect } from 'react-router-dom';

class Edit extends React.Component {
    state = {
        id: "",
        pregunta: "",
        respuesta: "",
        drags: [],
        targets: []
    }

    componentDidMount() {
        const qId = new URLSearchParams(window.location.search).get("id");
        if (qId) {
            axios.get("http://localhost:8080/Crud_React/PreguntasSol?id="+qId).then(response => {
                const question = response.data[0];
                this.setState({ ...question });
                console.log("datos obtenidos");
            }).catch(error => {
                console.info(error);
                alert("Ha ocurrido un error al obtener los datos");
            });
        }
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

    editQuestion = e =>{
        e.preventDefault();
        alert("Se editarán los cambios");
        console.log("Objeto a pasar");
        console.log(this.state);
        axios.post("http://localhost:8080/Crud_React/EditarPregunta",this.state)
        .then(response => {
            console.log(response);
            return <Redirect to="/Crud_React/"/>
        })
        .catch(error => {
                console.info(error);
                console.log("Ha ocurrido un error al mandar los datos");
        });
    }

    

    render() {
        const { id, pregunta, respuesta, drags, targets } = this.state;
        return (
            <Container className="MarginContainer">
                <h3>Informacion de la pregunta</h3>

                <form className="formEditar" onSubmit={this.editQuestion}>
                    Pregunta: <input type="text" name="pregunta" value={this.state.pregunta} onChange={e=>this.onQuestionChange(e.target.value)} />
                    Respuestas: <input type="text" name="respuesta" value={this.state.respuesta} onChange={e=>this.onAnswerChange(e.target.value)} />

                    <div className="dragClass">
                        <p>Drag Options</p>
                        <span>
                            <div className="AlignCenter">
                                {
                                    drags.map(option => {
                                        return (
                                            <div>
                                                <span className="M-6">
                                                    <img src={option.imagen} className="ImageContainer" />
                                                    <p>{option.valor}</p>
                                                </span>                                            
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <input type="button"  value="Agregar" onClick={()=>{
                                                let objetoDrag = {
                                                    "valor": "",
                                                    "imagen": "https://via.placeholder.com/150"
                                                }
                                                objetoDrag.valor = prompt("Inserta nombre de algún famoso");
                                                this.state.drags.push(objetoDrag);
                                                console.log("Agregado:" + objetoDrag);
                                            }}/>
                        </span>
                    </div>

                    <div className="targetClass">
                        <p>Target Options</p>
                        <span>
                        <div className="AlignCenter">
                            {
                                targets.map(target => {
                                    return (
                                        <div>
                                            <span className="M-6">
                                                <img src={target.imagen} className="ImageContainer" />
                                                <p>{target.valor}</p>
                                            </span>
                                        </div>
                                    );
                                })   
                            }
                        </div>
                        <input type="button" value="Agregar" onClick={()=>{
                                                let objetoTarget = {
                                                    "valor": "",
                                                    "imagen": "https://via.placeholder.com/150"
                                                }
                                                objetoTarget.valor = prompt("Inserta nombre de algún país");
                                                this.state.targets.push(objetoTarget);
                                                console.log("Agregado:" + objetoTarget);
                                            }}/>
                        </span>
                    </div>   
                    <input type="Submit" className="secondary" value="Editar"/>                                 
                </form>
                <Button variant="secondary" onClick={() => window.location.href = "/Crud_React/"}>
                    Regresar
                </Button>
            </Container>
        )
    }
}

export default Edit;