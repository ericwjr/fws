<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
  {% include head.md %}
  <body>
    {% include header.md %}
    {% if page.top %} 
    <main class = 'begin'>
    {% else %}
    <main>
    {% endif %}
      {{ content }}
    </main>
    {% include footer.md %}
  </body>
</html>
