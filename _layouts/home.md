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
    background-attachment:fixed;
    background-repeat:none;
    background-position:top center;
  } 
</style>
<section class = 'overview'>
    <div class = 'overlay flex-in'>{{content}}</div>
</section>
<section class = 'blog'>
  <article>
      <div class = 'hold'>
          <ol class="post-collection flex">
            {% for post in site.posts %}
            <li class = 'child duo'>
              <h2 class = 'post-link'>
                <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
              </h2>
              {{ post.excerpt  | truncate: 200}} <a href = '{{ post.url | relative_url }}' class = 'mark'> Read More...</a>
            </li>
            {% endfor %}
          </ol>
      </div>
  </article>
</section>
