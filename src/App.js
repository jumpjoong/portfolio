import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Profile from "./component/Profile";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import MyContext from "./context/MyContect";


function App() {
  return (
    <div className="App">
      <MyContext>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
      </MyContext>
    </div>
  );
}

export default App;
