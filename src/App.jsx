import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />   
      </Routes>
    </>
  );
}

export default App;
