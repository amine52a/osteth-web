// Footer.js
import './pages/Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-icons">
        <li className="social-item">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              alt="Instagram"
            />
          </a>
          <span>Our Instagram Page</span>
        </li>
        <li className="social-item">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
            />
          </a>
          <span>Our Facebook Page</span>
        </li>
      
      </ul>
    </footer>
  );
}
