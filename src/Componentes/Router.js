import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Productos from "./Productos";
import Nosotros from "./Nosotros";
import Error from "./Error";
import infoProductos from '../datos/datos';
import Header from "./Header";
import SingleProducto from "./SingleProducto";
import Navegacion from "./Navegacion";
import Contacto from "./Contacto";

class Router extends Component {

    state = {
        productos: []
    };

    componentWillMount() {
        this.setState({
            productos: infoProductos
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header/>
                    <Navegacion/>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Productos
                                productos={this.state.productos}
                            />
                        )}/>
                        <Route exact path="/nosotros" component={Nosotros}/>
                        <Route exact path="/productos" render={() => (
                            <Productos
                                productos={this.state.productos}
                            />
                        )}/>
                        <Route exact path="/contacto" component={Contacto}/>
                        <Route exact path="/producto/:productoId" render={(props) => {
                            let idProducto = props.location.pathname.replace('/producto/', '');
                            return (
                                <SingleProducto
                                    producto={this.state.productos[idProducto]}
                                />
                            )
                        }}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;