import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (<>
   <footer className="footer">
  <div className="container">
    <div className="row">
      
      <div className="footer-col">
        <h4>Tourism Information</h4>
        <ul>
          <li>
            <a href="#">Hotels & Bed Capacity</a>
          </li>
          <li>
            <a href="#">RTO</a>
          </li>
          <li>
            <a href="#">List Of Register/Hotels ettc.....</a>
          </li>
          <li>
            <a href="#">Tourist Statistics</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Tourist Related</h4>
        <ul>
          <li>
            <a href="#">Travels</a>
          </li>
          <li>
            <a href="#">Safety Tips</a>
          </li>
          <li>
            <a href="#">Book-Flight</a>
          </li>
          <li>
            <a href="#">Adventure Activities</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Gallery</h4>
        <ul>
          <li>
            <a href="#">Image Gallery</a>
          </li>
          <li>
            <a href="#">Video Gallery</a>
          </li>
          <li>
            <a href="#">Chalo Chamba APP</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Rules & Guidelines</h4>
        <ul>
          <li>
            <a href="#">Miscellanious Activities</a>
          </li>
          <li>
            <a href="#">Water Sports Rules</a>
          </li>
          <li>
            <a href="#">Loan of Hospitalities Industry</a>
          </li>
          <li>
            <a href="#">River Rafting Rules</a>
          </li>
          <li>
            <a href="#">Home Stay Sachme</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Others Links</h4>
        <ul>
          <li>
            <a href="#">Government of INDIA</a>
          </li>
          <li>
            <a href="#">Government of HIMACHAL</a>
          </li>
          <li>
            <a href="#">Tourisum portal</a>
          </li>
          <li>
            <a href="#">Tourism Related Links</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="http://localhost:3000/Howtoreach">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <button className="scroll-to-top-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    
</footer>

</>
  )
}

export default Footer
