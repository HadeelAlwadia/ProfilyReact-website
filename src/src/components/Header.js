import React,{component} from 'react';
import Socialicon from './social-icon';

const Header=()=>{
return(

    <header class="hero">
      <div class="section-center hero-center">
        <article class="hero-info">
          <div class="underline"></div>
          <h1>i'm hadeel</h1>
          <h4>freelance Front-end web developer</h4>
          <a href="contact.html" class="btn hero-btn">hire me</a>
          <Socialicon/>
        </article>
        <article class="hero-img">
          <img src="hadeell.jpg" class="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>
);


}
export default Header;