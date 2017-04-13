<style>
  {% include header.css %}
</style>
{% if page.top %}
  <header>
{% else %}
  <header id = 'header'>
{% endif %}
  <nav class = 'nav-menu'>
    <a href="{{ "/" | relative_url}}" class = 'nav-brand '>
    FUN WEIRD SCIENCE
    </a>
  </nav>
  {% include chat.md %}
</header>
