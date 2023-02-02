import "./app.css";

import {ACButton, ACLoaderButton} from "../atoms";

function App() {
  return (
    <div className="app"> 
      <div className="productos">
        aqui van los productos
      </div>
      <div className="action">
      <ACButton text="test" color="orange" size="lg"/>
       <ACLoaderButton text="Load more"/>
      </div>
    </div>
  );
}

export default App;
