<h4 class = 'share'>{{ 'Share' | upcase }}</h4>
<div class = 'share-panel icons'> 
  <span>
  <a class = 'facebook' href="https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{site.baseurl}}{{ page.url }}"
  onclick="window.open(this.href, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" >
    <i class="icon icon-facebook"></i>
  </a>
  </span>
  
  <span>
  <a class = 'twitter' href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{site.baseurl}}{{ page.url }}" 
  onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;">
    <i class="icon icon-twitter"></i>
  </a>
  </span>

  <span>
  <a class = 'linkedin' href="https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{site.baseurl}}{{ page.url }}&title={{ page.title }}&summary={{ page.description }}&source=societypieces" 
  onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" >
    <i class="icon icon-linkedin"></i>
  </a>
  </span>
  
  <span>
  <a class = 'whatsapp' href="whatsapp://send?text={{ site.url }}{{site.baseurl}}{{ page.url }}" data-action="share/whatsapp/share">
    <i class="icon icon-whatsapp"></i>
  </a>
  </span>                                       
</div>