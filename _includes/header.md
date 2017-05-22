<style>
  {% include header.css %}
</style>
{% if page.top %}
  <header id = 'header'>
{% else %}
  <header>
{% endif %}
  {% include menu.md%}
  <nav class = 'nav-menu'>
    <a href="{{ "/" | relative_url}}" class = 'nav-brand '>
    FUN WEIRD SCIENCE
    </a>
  </nav>
  {% include chat.md %}
</header>
