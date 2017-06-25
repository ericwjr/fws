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
   <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" value="MNA3NP4AHCM2E">
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
     </form>
  {% include chat.md %}
</header>
