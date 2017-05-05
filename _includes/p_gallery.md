<style>
  .image-gallery {
    margin: 0 auto;
    display: block;
  }
  .primary,
  .thumbnails {
    display:block;
    margin:15px auto;
  }
  .thumbnails {
    width: 300px;
  }
  .primary {
    width: 300px;
    height:300px;
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .thumbnail:hover .thumbnail-image, .selected .thumbnail-image {
    border: 2px solid #0FBE7C;
  }
  .thumbnail-image {
    width: 90px;
    height: 90px;
    display: inline-block;
    margin: 20px 3PX;
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }

</style>
<div class="image-gallery">
  <div class="primary" style="background-image: url({{site.baseurl}}/assets/kit.png);"></div>
  <aside class="thumbnails">
    <a href="#" class="selected thumbnail" data-big="{{site.baseurl}}/assets/kit.png">
      <div class="thumbnail-image" style="background-image: url({{site.baseurl}}/assets/kit.png)"></div>
    </a>
    <a href="#" class="thumbnail" data-big="{{site.baseurl}}/assets/product.jpg">
      <div class="thumbnail-image" style="background-image: url({{site.baseurl}}/assets/product.jpg)"></div>
    </a>
    <a href="#" class="thumbnail" data-big="{{site.baseurl}}/assets/product-0.jpg">
      <div class="thumbnail-image" style="background-image: url({{site.baseurl}}/assets/product-0.jpg)"></div>
    </a>
  </aside>
</div>
