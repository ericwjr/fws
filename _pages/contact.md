---
permalink: "/contact/"
layout: default
dark: true
---

<section class = 'form flex-in'>
  <div class = 'widget'>
    <form  action = 'https://formspree.io/info@funweirdscience.com' method = 'POST' id = 'form'>
       {% include options.md %}
      <input name = 'name' type = 'text' required placeholder = 'Name' id = 'name'>
      <input name = 'email' type = 'email' required placeholder = 'Email' id = 'email'>
      <textarea name = 'message' required id = 'message' placeholder = 'Type in your message' id = 'message'></textarea>
      <input class = 'submit' type = 'submit' value = 'submit'>
    </form>
  </div>
</section>
