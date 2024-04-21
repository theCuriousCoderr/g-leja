import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landing_page/LandingPage"
import WildRoute from "./pages/wildroutes_page/WildRoute"
import DesktopLoginLayout from "./layouts/DesktopLoginLayout"
import SignUpForm from "./components/SignUpForm"
import LogInForm from "./components/LogInForm"


function App() {

  return (
   <div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<DesktopLoginLayout formType={<SignUpForm />} />} />
      <Route path="/log-in" element={<DesktopLoginLayout formType={<LogInForm />} />} />
      <Route path="*" element={<WildRoute />} />
    </Routes>
   </div>
  )
}

export default App
