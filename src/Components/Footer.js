import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-row">
            <div class="footer-col">
                <h4>Harshitha Computers</h4>
                <p>Empowering your tech journey with quality </p><p>service and cutting-edge solutions.</p>
            </div>
            
            <div class="footer-col">
                <h4>Follow Us</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-x"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Contact Us</h4>
                <div className='Footer-Address'>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i>  K.N.R Towers, Avenue Road, Madanapalli</li>
                    <li><i class="fas fa-phone-alt"></i> +91 9618003301</li>
                    <li><i class="fas fa-envelope"></i> harshithacomputerseducation@gmail.com</li>
                </ul>
                </div>
            </div>
        </div>
        <hr></hr>
        <div class="footer-bottom">
            <p>&copy; 2024 Harshitha Computers. All rights reserved.</p>
        </div>
    </div>
</footer>
);
};


export default Footer;
