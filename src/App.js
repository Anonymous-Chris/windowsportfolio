import { HashRouter as Router, Route, Routes } from "react-router-dom"
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
                        <Route path="/" element={<MobileComponent />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </div>
            <div className="hidden h-full w-full overflow-scroll overflow-x-hidden bg-[#010C1B]  text-white md:block">
                <Router>
                    <Routes>
                        <Route path="/" element={<DesktopComponent />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App
