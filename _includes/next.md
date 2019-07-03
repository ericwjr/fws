<div class="flex-panel">
  <div class = 'cohabit'>
    {% if page.previous.url %}
      <h3>Previous</h3>
      <a class="previous lively" href="{{ page.previous.url }}"><i class = 'icon icon-back'></i>{{page.previous.title}}</a>
    {% endif %}
  </div>
  <div class = 'cohabit'>
    {% if page.next.url %}
      <h3>Next</h3>
      <a class="next mark" href="{{ page.next.url }}">{{page.next.title}}<i class = 'icon icon-arrow'></i></a>
    {% endif %}
  </div>
</div>
