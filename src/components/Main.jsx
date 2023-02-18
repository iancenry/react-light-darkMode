import img from '../images/reactjs-icon 1.png'
import imgdark from '../images/reactjs-icon 2.png'

const Main = props => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
        <h1 className="main--title">FUN FACTS ABOUT REACT</h1>
        <ul className="main--facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>It is maintained by Facebook</li>
            <li>Powers thousands of enterprise computers</li>
        </ul>
        <img src={props.darkMode ? imgdark :img } alt='react icon' />
    </main>
  )
}

export default Main 