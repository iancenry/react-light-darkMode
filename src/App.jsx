import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import {useState} from "react"

const App = () => {
  const [dark, setDark] = useState(false)
  function toggle(){
      setDark(prevColor => !prevColor)
  }
  return (
    <div className= "container">
      <Header darkMode = {dark} toggleDarkMode = {toggle}  />
      <Main darkMode = {dark} toggleDarkMode = {toggle}  />
      <Footer darkMode = {dark} toggleDarkMode = {toggle}  />
    </div>
  )
}

export default App 
