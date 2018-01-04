## Writing blog posts
All posts recide inside the **_posts** directory and should be named in the **YEAR-MONTH-DATE-TITLE.md** format like so:

```markdown
  2018-01-04-gyms-are-floooded-in-january.md
```

All images/videos should be uploaded into the **assets** folder. You may create a *sub folder(s)*; feel free

To link the images in the posts, use this syntax

```markdown
![image description](path/filename)
``` 

The image description can be anything that briefly describes the image you're using. It's optional but great for SEO and web accessibiility.

For example, if you have an image file inside the **articles** subfolder inside the **assets** folder, you would use it as follows:

```markdown
![guys telling stories](/assets/articles/january-stories.jpg)
``` 
## Mainatining this site
The following links will help the site owner to come into speed with the quirks of jekyll.

Once you wrap your mind around Jekyll's base concepts
(**[Jekyll directory Structure](https://jekyllrb.com/docs/structure/)**,
**[Front Matter](https://learn.cloudcannon.com/jekyll-front-matter/)**,
**[Liquid syntax](https://learn.cloudcannon.com/jekyll-liquid/)**,
**[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)**,
**[Includes](https://learn.cloudcannon.com/jekyll-includes/)**), editing the site will be super easy. 

Leverage the power of tools like *prose.io* and *siteleaf*  when making simple changes to your site.

## Plugins
Jekyll has a rich pool of plugins to help with tasks such as: youtube embed videos, embed twitter feed, seo,  ... See [Jekyll plugins](https://jekyllrb.com/docs/plugins/)

While jekyll templates are authored in **Ruby**, an initimate grasp of the language is not necessary to use it. In fact, most of the constructs used in Jekyll's templating are straight forward.

For example, to loop through a collection or an array is easy, using ruby liquid syntax 
 
```Ruby
 {% for member in page.team %}
     # Loop through Fun weird Science team members  
     # variables are wrapped in double curly braces '{{}}'
 {% endfor %}
``` 

or 

```Ruby
  {% if disqus.name %}
     # show comments widget
  {% endif %}
```
