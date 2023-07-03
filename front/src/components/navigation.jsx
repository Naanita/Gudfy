import { Link } from "react-router-dom";
import "../styles/Navigation.css"

export function Navigation() {
  return (

    <div className="navigationContainer">

      <button className="comic-button1">
        <Link to="/counter">Contador</Link>
      </button>
      <button className="comic-button2">
        <Link to="/reverse">Revertir</Link>
      </button>
      <button className="comic-button3">
        <Link to="/tasks">Tareas</Link>
      </button>
    </div>
  );
}
