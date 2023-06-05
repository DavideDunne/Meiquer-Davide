import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Estudiante from "./pages/Estudiante"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Estudiante/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
