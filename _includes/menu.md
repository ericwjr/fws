<div class = 'menu-bar'>
  <i class = 'icon icon-menu' aria-hidden = 'true'></i>
</div>
<div class = 'before'></div>
<div class = 'full'>
    <div class = 'drop'>
     <div class = 'closes'>
      <i class = 'icon icon-close' aria-hidden = 'true'></i>
     </div>
     <a href='{{ "/" | relative_url}}'><img class = 'logo' src = '{{site.baseurl}}/assets/logo.png' alt = 'fun weird science logo'></a>
    {% for item in site.data.menu %}
      <a href="{% if item.url %} 
        {{ item.url }} 
      {% else %}
        {{site.baseurl}}/{{ item.name | replace: ' ', '-' | downcase }}
      {% endif %}"
      {% if item.external %} 
        target = '_blank' rel='noopener' 
      {% endif%}>
        {% if item.class %} 
          <span class = '{{ item.class }}'>{{ item.name }}</span>
        {% else %}
          {{ item.name }}
        {% endif%}
      </a>
    {% endfor %}
    </div>
</div>
