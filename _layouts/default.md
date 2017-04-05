<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
  {% include head.md %}
  <body>
    {% include menu.md%}
    {% include header.md %}
    <main>
      {{ content }}
    </main>
    {% include footer.md %}
  </body>
</html>
