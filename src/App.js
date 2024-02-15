
import './App.css';
import ImageCard from './ImageCard/ImageCard';

function App() {
  return (
    <div className='content__knowledge'>
      <ImageCard imageUrl="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg">
        <h2>React</h2>
        <p>React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes.</p>
        <a href="https://es.react.dev">https://es.react.dev</a>
      </ImageCard>

      <ImageCard imageUrl="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg">
        <h2>HTML</h2>
        <p>HTML 5 es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML.</p>
        <a href="https://developer.mozilla.org/es/docs/Learn/HTML">https://developer.mozilla.org/es/docs/Learn/HTML</a>
      </ImageCard>

      <ImageCard imageUrl="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg">
        <h2>CSS</h2>
        <p>Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML.</p>
        <a href="https://nodejs.org/">https://developer.mozilla.org/es/docs/Web/CSS</a>
      </ImageCard>

      <ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png">
        <h2>NodeJS</h2>
        <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript</p>
        <a href="https://nodejs.org/">https://nodejs.org/</a>
      </ImageCard>
    </div>
  );
}

export default App;