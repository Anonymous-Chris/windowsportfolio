import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DesktopComponent from "./components/DesktopComponent"
import MobileComponent from "./components/MobileComponent"
import About from "./pages/About"
import Error from "./pages/Error"
import Projects from "./pages/Projects"

function App() {
    return (
        <div className="App h-screen w-full">
            <div className="h-full w-full overflow-scroll overflow-x-hidden  bg-[#010C1B] text-white md:hidden">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<MobileComponent />} />
                        <Route exact path="/portfolio" element={<MobileComponent />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/projects" element={<Projects />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </div>
            <div className="hidden h-full w-full overflow-scroll overflow-x-hidden bg-[#010C1B]  text-white md:block">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<DesktopComponent />} />
                        <Route exact path="/portfolio" element={<DesktopComponent />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/projects" element={<Projects />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App
