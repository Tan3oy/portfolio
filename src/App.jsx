import Navbar from "./Components/Navbar"
import Skills from "./Sections/Skills"
import About from "./Sections/About"
import Contact from "./Sections/Contact"
import Header from "./Sections/Header"
import Timeline from "./Sections/Timeline"
import Home from "./Sections/Home"
import { Routes , Route } from "react-router-dom"


function App() {

  return (
    <>
    <div className="">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Timeline/>
      <Contact/>
      <main>
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
 