import logo from '../images/logo.png'
const Header = ({darkMode, toggleDarkMode}) => {
  return (
    <header>
        <nav  className={darkMode ? "dark": ""}>
            <img src={logo} alt="logo" className ='nav-logo'/>
            <h3>ReactFacts</h3>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
                <li className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={toggleDarkMode} 
                >
                    <div className="toggler--slider--circle"></div> 
                </div>
                <p className="toggler--dark">Dark</p>
            </li>
            </ul>  
            
        </nav>     
         
    </header>
  )
}

export default Header