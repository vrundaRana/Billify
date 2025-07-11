import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F6F0F0]">
      <BrowserRouter>
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
