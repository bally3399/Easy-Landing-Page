import './App.css';
import {ROUTE} from "./routes/Router";
import {useRoutes} from "react-router-dom";

function App() {
  return (
      useRoutes(ROUTE)
  )
}

export default App;

