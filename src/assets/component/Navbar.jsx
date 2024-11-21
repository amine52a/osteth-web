import logo from '../images/logo.jpg'
import {Link} from "react-router-dom"
import './nav.css';


function Navbar() {
  return (
    
    <div className='nav'> 
    <div className='left'>
<img src={logo} />

    </div>
    <div className='right'>
 <Link to="/"> Home</Link>
 <Link to="/menu"> Menu</Link>
 <Link to="/contact"> Contact</Link>





    </div>


    </div>
  )
}

export default Navbar