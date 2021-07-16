import React from 'react';

const Bolg =()=>{

    return(
     <section class="section blog">
    <div class="section-title">
      <h2>blog</h2>
      <div class="underline"></div>
    </div>
    <div class="section-center blog-center">
      <div class="card">
        <div class="card-side card-front">
            <img src="shoppingcard.jpg"/>
          <div class="card-info">
            <h4>sopping card</h4>
            <p>
              This is the site for clothing companies or anyone who has a clothing store offering him his products and the prices of his products 
            </p>
            <div class="card-footer">
              <img src="hadeell.jpg" alt="author image" />
              <p>10 min read</p>
            </div>
          </div>
        </div>
        <div class="card-side card-back">
          <button class="btn">read more</button>
        </div>
      </div>
     
      <div class="card">
        <div class="card-side card-front">
          <img src="backroud.jpg"/>

          <div class="card-info">
            <h4>backroud</h4>
            <p>
              This project is a tour and tourism company website
            </p>
            <div class="card-footer">
              <img src="hadeell.jpg" alt="author image" />
              <p>10 min read</p>
            </div>
          </div>
        </div>
        <div class="card-side card-back">
          <button class="btn">read more</button>
        </div>
      </div>
     
      <div class="card">
        <div class="card-side card-front">
          <img src="general.jpg" alt="author image" />
          <div class="card-info">
            <h4>general project </h4>
            <p>
              This site is a recruiting for my web development skills
            </p>
            <div class="card-footer">
              <img src="hadeell.jpg" alt="author image" />
              <p>10 min read</p>
            </div>
          </div>
        </div>
        <div class="card-side card-back">
          <button class="btn">read more</button>
        </div>
      </div>
    </div>
  </section>
 );
}

export default Bolg;