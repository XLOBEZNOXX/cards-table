import "./app.css";

import {ACButton, ACLoaderButton} from "../atoms";

function App() {
  return (
    <div className="app"> 
      <div className="productos">
        aqui van los productos
      </div>
      <div className="action">
        <ACButton text="test" color="orange" size="sm" />
        <ACButton text="test" color="yellow" size="md" />
        <ACButton text="test" color="blue" size="lg" />
        <ACLoaderButton text="Load more"/>
      </div>
    </div>
  );
}

export default App;
