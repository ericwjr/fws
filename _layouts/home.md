---
layout: default
---

<section class = 'overview fulls'>
  <div class = 'overlay flex-in'>{{content}}</div>
</section>
<section class = 'hold wrap'>
  <ol class = 'posts'>
    {% for post in site.posts %}
    <li class = 'post'>
      <h3 class = 'post_link'>
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h3>
      {{ post.excerpt  | truncate: 200 | markdownify }} 
      <a href="{{ post.url | relative_url }}"><span class = 'mark'>Read More ...</span></a>
    </li>
    {% endfor %}
  </ol>
</section>
