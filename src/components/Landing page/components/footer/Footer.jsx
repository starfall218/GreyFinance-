import React from 'react';
import './footer.css'; // Assuming you have a CSS file for footer styles
import appstore from './footerimg/appstore.webp';
import googleplay from './footerimg/googleplay.webp';
export default function Footer() {
    return (
     <section id="footer-section" className="bg-black text-white">
        <footer>
    <div class="footer-top">
      <h2 class="footer-heading">
        Get digital banking <br />
        at your fingertips
      </h2>
      
      <div class="footer-app-links">
        <a href="https://play.google.com/store/apps/details?id=co.grey.mobile.android&utm_source=newsletter&utm_medium=banner&utm_campaign=app-perm"  class="store-link google-play" aria-label="Download on Google Play" target="_blank" rel="noopener">
          <img src={googleplay} alt="Download on Google Play" width="175" />
        </a>
        <a href="https://apps.apple.com/us/app/grey-inclusive-global-banking/id1611983085?utm_source=newsletter&utm_medium=email&utm_campaign=app-perm" class="store-link app-store" aria-label="Download on the App Store" target="_blank" rel="noopener">
          <img src={appstore} alt="Download on the App Store" width="175" />
        </a>
      </div>
    </div>
    <div class="divider-line"></div>
    <div class="footer-bottom">
        <div class="footer-column contacts" >
            <p>CONTACT US</p>
             <a href="mailto:hello@grey.co" class="email" target="_blank">hello@grey.co</a>
            <div class="social-icons">
                <a href="https://www.instagram.com/greyfinance/" class="social-icon instagram" target="_blank" rel="noopener" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M13.0286 2C14.1536 2.003 14.7246 2.009 15.2176 2.023L15.4116 2.03C15.6356 2.038 15.8566 2.048 16.1236 2.06C17.1876 2.11 17.9136 2.278 18.5506 2.525C19.2106 2.779 19.7666 3.123 20.3226 3.678C20.8313 4.17773 21.2248 4.78247 21.4756 5.45C21.7226 6.087 21.8906 6.813 21.9406 7.878C21.9526 8.144 21.9626 8.365 21.9706 8.59L21.9766 8.784C21.9916 9.276 21.9976 9.847 21.9996 10.972L22.0006 11.718V13.028C22.003 13.7574 21.9953 14.4868 21.9776 15.216L21.9716 15.41C21.9636 15.635 21.9536 15.856 21.9416 16.122C21.8916 17.187 21.7216 17.912 21.4756 18.55C21.2248 19.2175 20.8313 19.8223 20.3226 20.322C19.8228 20.8307 19.2181 21.2242 18.5506 21.475C17.9136 21.722 17.1876 21.89 16.1236 21.94L15.4116 21.97L15.2176 21.976C14.7246 21.99 14.1536 21.997 13.0286 21.999L12.2826 22H10.9736C10.2438 22.0026 9.51409 21.9949 8.78457 21.977L8.59057 21.971C8.35318 21.962 8.11584 21.9517 7.87857 21.94C6.81457 21.89 6.08857 21.722 5.45057 21.475C4.7834 21.2241 4.17901 20.8306 3.67957 20.322C3.17051 19.8224 2.77668 19.2176 2.52557 18.55C2.27857 17.913 2.11057 17.187 2.06057 16.122L2.03057 15.41L2.02557 15.216C2.00713 14.4868 1.9988 13.7574 2.00057 13.028V10.972C1.9978 10.2426 2.00514 9.5132 2.02257 8.784L2.02957 8.59C2.03757 8.365 2.04757 8.144 2.05957 7.878C2.10957 6.813 2.27757 6.088 2.52457 5.45C2.77626 4.7822 3.17079 4.17744 3.68057 3.678C4.17972 3.16955 4.78376 2.77607 5.45057 2.525C6.08857 2.278 6.81357 2.11 7.87857 2.06C8.14457 2.048 8.36657 2.038 8.59057 2.03L8.78457 2.024C9.51376 2.00623 10.2432 1.99857 10.9726 2.001L13.0286 2ZM12.0006 7C10.6745 7 9.40272 7.52678 8.46503 8.46447C7.52735 9.40215 7.00057 10.6739 7.00057 12C7.00057 13.3261 7.52735 14.5979 8.46503 15.5355C9.40272 16.4732 10.6745 17 12.0006 17C13.3267 17 14.5984 16.4732 15.5361 15.5355C16.4738 14.5979 17.0006 13.3261 17.0006 12C17.0006 10.6739 16.4738 9.40215 15.5361 8.46447C14.5984 7.52678 13.3267 7 12.0006 7ZM12.0006 9C12.3945 8.99993 12.7847 9.07747 13.1487 9.22817C13.5127 9.37887 13.8434 9.5998 14.122 9.87833C14.4007 10.1569 14.6217 10.4875 14.7725 10.8515C14.9233 11.2154 15.001 11.6055 15.0011 11.9995C15.0011 12.3935 14.9236 12.7836 14.7729 13.1476C14.6222 13.5116 14.4013 13.8423 14.1227 14.121C13.8442 14.3996 13.5135 14.6206 13.1496 14.7714C12.7856 14.9223 12.3955 14.9999 12.0016 15C11.2059 15 10.4429 14.6839 9.88025 14.1213C9.31764 13.5587 9.00157 12.7956 9.00157 12C9.00157 11.2044 9.31764 10.4413 9.88025 9.87868C10.4429 9.31607 11.2059 9 12.0016 9M17.2516 5.5C16.92 5.5 16.6021 5.6317 16.3677 5.86612C16.1333 6.10054 16.0016 6.41848 16.0016 6.75C16.0016 7.08152 16.1333 7.39946 16.3677 7.63388C16.6021 7.8683 16.92 8 17.2516 8C17.5831 8 17.901 7.8683 18.1355 7.63388C18.3699 7.39946 18.5016 7.08152 18.5016 6.75C18.5016 6.41848 18.3699 6.10054 18.1355 5.86612C17.901 5.6317 17.5831 5.5 17.2516 5.5Z" fill="white"></path>
                    </svg>
                </a>
                <a href="https://www.youtube.com/@Grey_finance" class="social-icon youtube" target="_blank" rel="noopener" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="white"></path>
                    </svg>
                </a>
                <a href="https://x.com/greyfinance" class="social-icon twitter" target="_blank" rel="noopener" aria-label="X (formerly Twitter)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5859 21.375L14.0885 10.4471L14.1013 10.4574L20.8613 2.625H18.6023L13.0954 9L8.72227 2.625H2.79766L9.79723 12.8276L9.79638 12.8267L2.41406 21.375H4.67309L10.7955 14.2824L15.6613 21.375H21.5859ZM7.82719 4.32954L18.3466 19.6705H16.5564L6.02852 4.32954H7.82719Z" fill="white"></path>
                    </svg>
                </a>
                    

             </div>
        </div>
        <div class="footer-column products" >
            <p>PRODUCTS</p>
            <ul>
                <li><a href="#" target="_blank">Money transfer</a></li>
                <li><a href="#" target="_blank">Virtual cards</a></li>
                <li><a href="#" target="_blank">Currency exchange</a></li>
                <li><a href="#" target="_blank">Foreign accounts</a></li>
            </ul>
        </div>
        <div class="footer-column company" >
                <p><strong>COMPANY</strong></p>
                <ul>
                    <li><a href="#" target="_blank">About us</a></li>
                    <li><a href="#" target="_blank">Careers</a></li>
                    <li><a href="#" target="_blank">Perks</a></li>
                    <li><a href="#" target="_blank">Blog</a></li>
                    <li><a href="#" target="_blank">Press</a></li>
                    <li><a href="#" target="_blank">Contact</a></li>
                </ul>

        </div>
        <div class="footer-column lifestyle" >
            <p><strong>LIFESTYLE</strong></p>
            <ul>
                <li><a href="#" target="_blank">For freelancers</a></li>
                <li><a href="#" target="_blank">For digital nomads</a></li>
                <li><a href="#" target="_blank">For travellers</a></li>
                <li><a href="#" target="_blank">Join our community</a></li>
            </ul>
        </div>
        <div class="footer-column legal" >
            <p><strong>LEGAL</strong></p>
            <ul>
                <li><a href="#" target="_blank">Privacy policy</a></li>
                <li><a href="#" target="_blank">Terms of service</a></li>
                <li><a href="#" target="_blank">Acceptable use policy</a></li>
            </ul>
        </div>
         <div class="footer-column support" >
            <p><strong>SUPPORT</strong></p>
            <ul>
                <li><a href="#" target="_blank">Help center</a></li>
                <li><a href="#" target="_blank">Video tutorials</a></li>
                <li><a href="#" target="_blank">FAQ</a></li>
            </ul>
         </div>
    </div>
  </footer>
    </section>

    )
}
