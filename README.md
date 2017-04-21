# depth
Fun Weird Science

## Mainatining this site
The following links help the site owner to come into speed with the quirks of jekyll. I will list the basic parts.

* [Jekyll directory Structure](https://jekyllrb.com/docs/structure/)
* [Front Matter](https://learn.cloudcannon.com/jekyll-front-matter/) 
* [Liquid syntax](https://learn.cloudcannon.com/jekyll-liquid/)
* [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Includes](https://learn.cloudcannon.com/jekyll-includes/)

## Resources

* [Jekyll Official docs](https://jekyllrb.com/docs/)
* [Jekyll Casts](https://learn.cloudcannon.com/)

## Plugins
Jekyll has a rich pool of plugins to help with task such as youtube embed videos, embed twitter feed, seo,  ... See [Jekyll plugins](https://jekyllrb.com/docs/plugins/)

While jekyll templates are authored in **Ruby**, an initimate grasp of the language is not necessary to use it. In fact, most of
the constructs used in Jekyll's templating are straight forward.

For example, to loop through a collection or an array is easy as using ruby liquid syntax 
 
```Ruby
 {% for member in page.team %}
     # Loop through Fun weird Science team members  
     # variables are wrapped in double curly braces {{}}
 {% endfor %}
``` 

or 

```Ruby
  {% if disqus.name %}
     # show comments widget
  {% endif %}
```

Notice the **if** and **for** blocks are very easy ... they are only unique in that they end with **endif** and **endfor** respectively.

# Conclusion

If you figure your way around **front matter, liquid syntax, includes and directory structure**, editing the site will be super easy. Notice that prose.io and siteleaf enable you to edit the site's front matter.