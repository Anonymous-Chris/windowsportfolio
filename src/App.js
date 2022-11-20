import DesktopComponent from "./components/DesktopComponent"
import MobileComponent from "./components/MobileComponent"
function App() {
    return (
        <div className="App h-screen w-full">
            <div className="h-full w-full md:hidden">
                <MobileComponent />
            </div>
            <div className="hidden h-full w-full md:block">
                <DesktopComponent />
            </div>
        </div>
    )
}

export default App
