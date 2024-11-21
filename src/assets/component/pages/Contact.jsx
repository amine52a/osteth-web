import './Form.css';
import image from '../../images/piza1.png';
export default function Contact() {
  return (
    <div className="contact-container">
    <div className="rightside" 
    
    style={{ 
      backgroundImage: `url(${image})`,             // Set the background image
      backgroundSize: 'cover',                       // Ensure the image covers the entire div
      backgroundPosition: 'left',                  // Center the image
      backgroundRepeat: 'no-repeat',                 // Prevent the image from repeating
      height: '100vh',                               // Set the height of the container to fill the viewport
      display: 'flex',
      flexDirection: 'column',                       // Stack content vertically
      justifyContent: 'flex-start',                  // Align content to the top
      alignItems: 'flex-start',                      // Align content to the left
      color: 'white',                                // Set text color to white
      textAlign: 'left',                             // Ensure text is left-aligned
    }}
    >


    </div>
    
    <div className="leftside">
    <h2>Contact Us</h2>
      <form >
        <div>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
           
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
           
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>

  )
}
