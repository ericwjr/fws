<style>
  .share-panel{
    display: flex;
    align-items:center;
    flex-flow:row wrap;
    justify-content:flex-start;
  }
  .share-panel a{
     margin:2.5px 17.5px 12px 0;
     padding:10px;
     color:#fff;
     opacity:1;
     transition:opacity 0.3s ease-in-out;
     border-radius:50%;
  }
  .share-panel a:hover{
          opacity:0.84;
  }
  h4.share{
    text-align:left;
    color:#555;
    font-size:1em;
  }
</style>
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