---
layout: default
comments: true
---

<article class = 'flex post blog'>
  <div class = 'child strip'>
    <div class = 'tablet'>
      {% include share.md %}
    </div>
  </div>
  <div class = 'child tripple'>
    <div class="post-header">
      <div class = 'preview'>
        <div class = 'cover'>
          <h1 class="post-title" itemprop="name headline">{{ page.title | escape }}</h1>
          <div class = 'flex'>
            <div>
              <div class = 'author-info'>
                {% if page.author %}
                  <span itemprop="author" itemscope itemtype="http://schema.org/Person">
                    <span itemprop="name"><a href = '{{site.baseurl}}/author/'>{{ page.author }}</a></span>
                    <a class = 'connect' href = 'https://mobile.twitter.com/onweru' target = '_blank'>Follow</a>
                  </span>
                  <span itemprop='author description' class = 'fade'>{{ page.a_status}}</span>
                {% endif %}
              </div>
              <time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
                <span class = 'duration fade'>
                {{ page.date | date_to_long_string }} .
                {% assign time = content| number_of_words | divided_by:170 %}{{ time }} min read
                </span>
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post-content" itemprop="articleBody">
      {% if page.image %}
        <div class = 'featured'>
          <img src = '{{site.baseurl}}/assets/posts/{{page.image}}' alt = 'Featured image'>
        </div>
      {% endif %}
      {{ content }}
    </div>

    {% if site.disqus.shortname %}
      {% include disqus.md %}
    {% endif %}
  </div>
  <aside class = 'child trio'>
    <h3><span class = 'pretty'>Recent Posts</span></h3>
    <ol class="post-list">
      {% for post in site.posts limit:6 %}
      {% if post != page %}
        <li>
          <a class="post-link" href="{{ post.url | relative_url }}"><i class="icon icon-article mark" aria-hidden = 'true'></i>{{ post.title | escape }}</a>
        </li>
      {% endif %}
      {% endfor %}
    </ol>
    <h3><span class = 'pretty'>Twitter Feed</span></h3>
    <a class="twitter-timeline" href="https://twitter.com/funweirdscience" data-tweet-limit="3"></a>
    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
  </aside>
</article>
