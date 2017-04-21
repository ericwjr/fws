---
permalink: "/products/"
layout: default
dark: true
---

<style>
  .products img{
    display:block;
    max-width:300px;
    margin:15px auto;
    cursor:pointer;
  }
  #cart{
    padding:15px;
    width:150px;
    border: 1px solid #0FBE7C;
    cursor:pointer;
    background-color:#0FBE7C;
    color:#fff;
    text-align:center;
    opacity:0.9;
    transition:opacity 0.3s ease-in;
  }
  #PPMiniCart form {
    position: fixed;
    margin-top:75px !important;
    float: none;
    z-index:98;
    top: 50px;
    right: 50px;
    width: 275px;
    margin: 0;
    padding: 50px 10px 25px;
    min-height: 170px;
    background: #fff;
    border:none;
    border-top: 0;
    font: 105%;
    color: #333;
    text-align: left;
    border-radius: 0 0 8px 8px;
    -moz-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
  }
  #PPMiniCart p input {
    float: right;
    margin: 4px 0 0;
    padding: 1px 4px;
    text-decoration: none;
    font-weight: normal;
    color: #fff;
    background: #0070ba !important;
    border: 1px solid #0070ba;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
  }

</style>
<div class = 'bright'>
  <section class = 'flex'>
    <div class = 'child duo products'>
      <img src = '{{site.baseurl}}/assets/kit.png' alt = 'science kit'>
      <div class = 'flex'>
        <div class = 'child duo'>
          <img src = '{{site.baseurl}}/assets/product.jpg' alt = 'product'>
        </div>
        <div class = 'child duo'>
          <img src = '{{site.baseurl}}/assets/product-0.jpg' alt = 'product one'>
        </div>
      </div>
    </div>
    <div class = 'child duo'>
      <h1>Fun Weird Science Kit</h1>
      <i class = 'icon icon-star'></i>
      <i class = 'icon icon-star'></i>
      <i class = 'icon icon-star'></i>
      <i class = 'icon icon-star'></i>
      <i class = 'icon icon-star'></i> <span class = 'mark'> (6 customer reviews)</span>
      <div class = 'mark'>$30.00</div>
      <p>
        The Fun Weird Science Kit offers 5 engaging experiments aligned to Next Generation Science Standards that
        provide hours of excitement, engagement, engagement, and discovery. This kit provides parents an awesome
        opportunity to engage with their kids and support their scholar's mastery of STEM skills.
      </p>
      <p>
        Get ready to explore chemistry, aerospace, engineering, and sound!
      </p>
      <p>
        2 Bonus experiments for a limited time ... 7 total experiments!
      </p>
      <p>
        Free shipping!
      </p>   
      <div class = 'cart'>
        <script async="async" src="https://www.paypalobjects.com/js/external/paypal-button-minicart.min.js?merchant=onewesh@gmail.com" 
      data-button="cart" 
      data-name="Fun Weird Science Kit" 
      data-amount="30.00" 
      data-callback="https://onweru.github.io/fun/products" 
      data-env="production"
      id = 'cart'
    ></script>
    </div>   
    </div>
  </section>
</div>
