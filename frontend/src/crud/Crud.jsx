// import './Crud.css';
import React from 'react'
import axios from 'axios'

const host = 'http://localhost:3000/'
const insertAPI = host + 'add'
//y las demás apis

class Crud extends React.Component {

    constructor() {
        super()
        this.state = {
            insertState: {
            }
        }
    }

    insertRequest = (event) =>
    {
        var insertState = {...this.state.insertState}
        if(!insertState.titulo || !insertState.fechaLanzamiento || !insertState.genero || !insertState.desarrollador || !insertState.ESRB)
            return alert('ERROR: no deje campos en blanco para insertar')

        axios.post(insertAPI, { insertState })
        .then(res => {
            console.log(res)
            return alert(res)
        }).catch(e => console.log(e))
    }

    tituloStateHandler = (event) =>
    {
        var insertState = {...this.state.insertState}
        insertState.titulo = event.target.value
        this.setState({insertState})
    }

    fechaLanzamientoStateHandler = (event) =>
    {
        var insertState = {...this.state.insertState}
        insertState.fechaLanzamiento = event.target.value
        this.setState({insertState})
    }

    generoStateHandler = (event) =>
    {
        var insertState = {...this.state.insertState}
        insertState.genero = event.target.value
        this.setState({insertState})
    }

    desarrolladorStateHandler = (event) =>
    {
        var insertState = {...this.state.insertState}
        insertState.desarrollador = event.target.value
        this.setState({insertState})
    }

    ESRBStateHandler = (event) =>
    {
        var insertState = {...this.state.insertState}
        insertState.ESRB = event.target.value
        this.setState({insertState})
    }

    render() {
        return (
            <div>
                <h1>Crud2</h1>
                <form onSubmit={this.insertRequest}>
                    <label>
                        Titulo:
                        <input type="text" value={this.state.insertState.titulo} onChange={this.tituloStateHandler}/>
                    </label>
                    <label>
                        Fecha lanzamiento:
                        <input type="date" value={this.state.insertState.fechaLanzamiento} onChange={this.fechaLanzamientoStateHandler}/>
                    </label>
                    <label>
                        Género:
                        <input type="text" value={this.state.insertState.genero} onChange={this.generoStateHandler}/>
                    </label>
                    <label>
                        Desarrollador:
                        <input type="text" value={this.state.insertState.desarrollador} onChange={this.desarrolladorStateHandler}/>
                    </label>
                    <label>
                        ESRB Rating:
                        <input type="text" value={this.state.insertState.ESRB} onChange={this.ESRBStateHandler}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Crud;