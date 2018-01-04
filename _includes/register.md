<div class = 'flex tickets'>
  {% for ticket in site.data.tickets %}
  <div class = 'child duo'>
    <p>{{ticket.description}}</p>
    <p>{{ticket.subdescription}}</p>
    {% if ticket.available %}
      <p>{{ticket.date}}</p>
      <a class = 'submit' href = '{{ticket.link}}' target = '_blank'>Register</a>
    {% else %}
      <a class = 'submit' href = '{{site.baseurl}}/contact'>Get More Info</a>
    {% endif %}
  </div>
  {% endfor %}
</div>
