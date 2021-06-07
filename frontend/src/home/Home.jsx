// import './Home.css';
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            columnas: [
                {
                    field: 'id',
                    headerName: 'Carnet',
                    width: 150
                },
                {
                    field: 'name',
                    headerName: 'Nombres',
                    width: 300
                },
                {
                    field: 'lastname',
                    headerName: 'Apellidos',
                    width: 300
                },
            ],
            filas:[
                {id:'201612272', name:'Andrés Esteban', lastname:'Carvajal Morales'}
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>Bienvenido, somos el grupo: Tecnólogos</h1>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={this.state.filas} columns={this.state.columnas} pageSize={5}/>
                </div>
            </div>
            
        );
    }
}

export default Home;