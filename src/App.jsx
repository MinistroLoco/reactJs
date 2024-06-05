import { Navigate, Route, Routes } from "react-router-dom";
import Blocks from "./components/blocks";
import Layaut from "./components/layaut";
import NavBar from "./components/navbar";

// Pages
import Inicio from "./components/pages/inicio";
import Cursos from "./components/pages/cursos";
import Imagenes from "./components/pages/imagenes";
import Login from "./components/pages/login";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-secondary min-h-screen">
        <NavBar />
        <Layaut>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/cursos" element={<Cursos></Cursos>}></Route>
            <Route path="/imagenes" element={<Imagenes></Imagenes>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </Layaut>
        <Footer/>
      </div>
    </>
  );
}

export default App;
