---
title: Products
permalink: "/products/"
---

<div class = 'bright'>
  <section class = 'flex mt-4'>
    <div class = 'child duo'>
      {% include gallery.md %}
    </div>
    <div class = 'child duo'>
      <h1 class = 'left'>Fun Weird Science Kit</h1>
      {% for star in (1..5) %}
      <i class = 'icon icon-star'></i>
      {% endfor %}
      <span class = 'mark'> (6 customer reviews)</span>
      <div class = 'mark'>$30.00</div>
      <p>The Fun Weird Science Kit offers 5 engaging experiments aligned to Next Generation Science Standards that
        provide hours of excitement, engagement, engagement, and discovery. This kit provides parents an awesome
        opportunity to engage with their kids and support their scholar's mastery of STEM skills.</p>
      <p>Get ready to explore chemistry, aerospace, engineering, and sound!</p>
      <p>2 Bonus experiments for a limited time ... 7 total experiments!</p>
      <p>Free shipping!</p> 
      <div class = 'cart'>  {% include cart.md %} </div>
      <h1 class = 'left'>Download Book</h1>
    </div>   
  </section>
</div>
