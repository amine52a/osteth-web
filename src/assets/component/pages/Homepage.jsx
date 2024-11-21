import { Link } from "react-router-dom";
import image from '../../images/back.jpg';
import './Home.css';

export default function Homepage() {
  return (
    <div className="Home">    
      <div 
        className="Header" 
        style={{ 
          backgroundImage: `url(${image})`,             // Set the background image
          backgroundSize: 'cover',                       // Ensure the image covers the entire div
          backgroundPosition: 'center',                  // Center the image
          backgroundRepeat: 'no-repeat',                 // Prevent the image from repeating
          height: '100vh',                               // Set the height of the container to fill the viewport
          display: 'flex',
          flexDirection: 'column',                       // Stack content vertically
          justifyContent: 'flex-start',                  // Align content to the top
          alignItems: 'flex-start',                      // Align content to the left
          color: 'white',                                // Set text color to white
          textAlign: 'left',                             // Ensure text is left-aligned
          padding: '30px'                                // Add padding for spacing
        }}
      >
        <h1>Al-Osteth Food</h1>
        <p>
          Pizza, Hamburger, Sandwich
        </p>
        <Link to="/Menu">
          <button className="order-button">  {/* Add class for button styling */}
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}
