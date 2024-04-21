import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landing_page/LandingPage"
import WildRoute from "./pages/wildroutes_page/WildRoute"
import DesktopLoginLayout from "./layouts/DesktopLoginLayout"
import SignUpForm from "./components/SignUpForm"


function App() {

  return (
   <div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/log-in" element={<DesktopLoginLayout form={<SignUpForm />} />} />
      <Route path="*" element={<WildRoute />} />
    </Routes>
   </div>
  )
}

export default App
