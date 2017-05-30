<div class = 'funga'><select name="Subject" id="Subject" class="select subject" placeholder="Choose Subject" required>
  {% for option in site.data.subjects %}
    <option value = '{{option}}'>{{ option }}</option>
  {% endfor %}
</select></div>
