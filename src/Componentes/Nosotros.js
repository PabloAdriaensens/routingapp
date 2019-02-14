import React, {Component} from 'react';
import '../css/Nosotros.css';

class Nosotros extends Component {
    state = {}

    render() {
        return (
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis elit diam, eget vulputate
                        dolor hendrerit ac. Quisque sit amet lectus elit. Nulla pellentesque dui quis suscipit
                        efficitur. Donec in enim nulla. Quisque dignissim nisi sit amet odio finibus, ac euismod augue
                        tempor. Suspendisse quis arcu dolor. Aliquam at diam maximus, vestibulum nibh eu, vulputate
                        felis. Proin nec sapien vel ligula eleifend commodo vel ut urna. Nulla lacinia erat in libero
                        pharetra, vel auctor mi aliquam. Fusce ut erat nunc. Sed aliquam est ut viverra malesuada. Nulla
                        facilisi.</p>
                </div>
            </div>
        );
    }
}

export default Nosotros;