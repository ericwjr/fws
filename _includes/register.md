<div class = 'flex tickets'>
    {% for ticket in page.tickets %}
    <div class = 'child duo'>
      <p>{{ticket.description}}</p>
      <a class = 'submit' href = '{{ticket.link}}' target = '_blank'>Register</a>
    {% endfor %}
  </div>
</div>
