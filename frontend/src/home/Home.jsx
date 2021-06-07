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
                {
                    field: 'mail',
                    headerName: 'Correo',
                    width: 300
                },
                {
                    field: 'phone',
                    headerName: 'Telefono',
                    width: 300
                },
            ],
            filas:[
                {id:'201612272', name:'Andrés Esteban', lastname:'Carvajal Morales', mail:'andyecarvajal@gmail.com', phone:'5241-4066'},
                {id:'201325533', name:'Erick Fernando', lastname:'Elias Diaz', mail:'elias25533@gmail.com', phone:'4574-7474'},
                {id:'201403610', name:'Lester Fernando', lastname:'Mazariegos Navarro', mail:'lestermaz.96@gmail.com', phone:'3405-0585'},
                {id:'201602988', name:'Ozmar René', lastname:'Escobar Avila', mail:'SuperSpeed52@gmail.com', phone:'4219-2668'}
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