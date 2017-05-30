<!--small product gallery-->
<div class="image-gallery">
  <div class="primary" style="background-image: url({{site.baseurl}}/assets/kit.png);"></div>
  <aside class="thumbnails">
  {% for image in site.data.gallery %}
    <a href="#" class="selected thumbnail" data-big="{{site.baseurl}}/assets/{{image}}">
      <div class="thumbnail-image" style="background-image: url({{site.baseurl}}/assets/{{image}})"></div>
    </a>
  {% endfor %}
  </aside>
</div>
