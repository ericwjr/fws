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
  #cart:hover{
    opacity:1;
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
      <script src = 'https:// cdn.snipcart.com/scripts/2.0/snipcart.js' data-api-key = 'fun' id = 'snipcart'></script>
      <link href = 'https://cdn.snipcart/themes/2.0/base/snipcart.min.css' rel = 'stylesheet' type = 'text/css'>
      <button
        class = 'snipcart-add-item'
        data-item = '1'
        data-item-name = 'Science Kit'
        data-item-price = '30.00'
        data-item-url = '{{site.baseurl}}/products'
        data-item-description = 'Fun Weird Science Kit' 
        id = 'cart'
      >
      Add to Cart
      </button>
    </div>
  </section>
</div>
