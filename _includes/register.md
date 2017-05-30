<div class = 'flex tickets'>
  {% for ticket in site.data.tickets %}
  <div class = 'child duo'>
    <p>{{ticket.description}}</p>
    <p>{{ticket.subdescription}}</p>
    <p>{{ticket.date}}</p>
    <a class = 'submit' href = '{{ticket.link}}' target = '_blank'>Register</a>
  </div>
  {% endfor %}
</div>
