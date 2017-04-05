<style>
  {% include header.css %}
</style>
{% if page.dark %}
  <header>
{% else %}
  <header id = 'header'>
{% endif %}
  <nav class = 'nav-menu'>
    <a href="{{ "/" | relative_url}}" class = 'nav-brand '>
    FUN WEIRD SCIENCE
    <!--<img class = 'logo' src = '{{site.baseurl}}/assets/logo.png' alt = 'fun weird science logo'>-->
    </a>
  </nav>
  {% include chat.md %}
</header>
