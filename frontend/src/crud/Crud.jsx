// import './Crud.css';
import React from 'react';

class Crud extends React.Component{
    constructor(){
        super();
        this.state = {
            pagina: 0
        }
    }

    render(){
        return(
            <h1>Crud</h1>
        );
    }
}

export default Crud;