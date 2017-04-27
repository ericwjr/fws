<div class = 'funga'><select name="Subject" id="Subject" class="select subject" placeholder="I'm curious about" required>
        {% for option in site.options %}
        <option value = 'Make a general inquiry'>{{ option }}</option>
        {% endfor %}
      </select></div>
