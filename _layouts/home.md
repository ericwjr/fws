---
layout: default
---
<style>
  .overview{
    position: relative;
    height:360px;
    width:100%;
    background-color:#111;
    background-image:url({{site.baseurl}}/assets/after-school.jpg);
  } 
</style>
<section class = 'overview fulls'>
    <div class = 'overlay flex-in'>{{content}}</div>
</section>
<section class = 'blog'>
   <article>
     <div class = 'hold'>
          <ul class="post-collection flex">
            {% for post in site.posts %}
            <li class = 'child duo'>
              <h3 class = 'post-link'>
              <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
              </h3>
              {{ post.excerpt  | truncate: 200}} 
              <a href="{{ post.url | relative_url }}"><span class = 'lively'>Read More ...</span></a>
            </li>
            {% endfor %}
          </ul>
      </div>
  </article>
</section>
