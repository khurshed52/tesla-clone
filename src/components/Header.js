import React, {useState, useEffect} from 'react'
import logo from '../assets/tesla.png';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
const Header = ()=> {
   const [show, setHandle] = useState(false);

   const transitionNav = ()=> {
    if (window.scrollY > 100) {
        setHandle(true)
      }else {
        setHandle(false)
      }
}

useEffect(() => {
    window.addEventListener('scroll', transitionNav);
    return () => window.removeEventListener('scroll', transitionNav);
}, [])

    return (
        <div className={`header ${show && 'nav_black'}`}>
            <div className="header_left">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header_middle">
                <ul>
                    <li> <a href="javascript:;">MODEL S </a></li>
                    <li> <a href="javascript:;">MODEL 3 </a></li>
                    <li> <a href="javascript:;"> MODEL X</a></li>
                    <li> <a href="javascript:;">MODEL Y </a></li>
                    <li> <a href="javascript:;"> SOLAR ROOF</a></li>
                    <li> <a href="javascript:;">SOLAR PANELS </a></li>
                </ul>
            </div> 
            <div className="header_right">
                <ul>
                    <li> <a href="javascript:;">SHOP </a></li>
                    <li> <a href="javascript:;"> TESLA ACCOUNT</a></li>
                    <li> <a href="javascript:;"> <MenuIcon/> </a></li>
                </ul>
            </div> 
        </div>
    )
}

export default Header
