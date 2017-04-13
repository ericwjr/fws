<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
  {% include head.md %}
  <body>
    {% include menu.md%}
    {% include header.md %}
    {% if page.top %} 
    <main class = 'main'>
    {% else %}
    <main>
    {% endif %}
      {{ content }}
    </main>
    {% include footer.md %}
  </body>
</html>
