import React,{Component} from 'react';


const Footer=()=>{
return(
<footer class="footer">
      <ul class="social-icons">
        <li>
          <a href="https://www.facebook.com" class="social-icon">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" class="social-icon">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.squarespace.com" class="social-icon">
            <i class="fab fa-squarespace"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" class="social-icon">
            <i class="fab fa-behance"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>

      <p>&copy; <span id="date"></span> Hadeel Alwadia. all rights reserved</p>
      <p style="font-size: 0.5rem;">yes, iam maslem in Aallh</p>
    </footer>


);


}
  

export default Footer;