import React from "react";
import { Button, Container} from "react-bootstrap";
import axios from "axios";
import '../styles/editar.css';

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
            }).catch(error => {
                console.info(error);
                alert("Ha ocurrido un error");
            });
        }
    }

    render() {
        const { pregunta, respuesta, drags, targets } = this.state;
        return (
            <Container className="MarginContainer">
                <h3>Informacion de la pregunta</h3>
                <form className="formEditar" method="POST" action="submit">
                    Pregunta: <input type="text" value={pregunta} onChange={this.handleChange}/>
                    Respuestas: <input type="text" value={respuesta} onChange={this.handleChange}/>

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
                    <input type="Button" className="secondary" onClick={()=>console.log("Boton presionado")} value="Editar"/>
                </form>
            </Container>
        )
    }
}

export default Edit;