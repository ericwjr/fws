---
title: About Us
permalink: "/about-us/"
team:
- name: Tommy Clay
  description: Tommy is an awesome educator with a knack for media and design
  twitter: https://twitter.com/apsittommy
  linkedin: ''
  avatar: tommy.png
- name: Eric Williams
  description: When Eric isn't creating new tech products, he's looking for ways to
    give back
  twitter: https://twitter.com/Ericwjr
  linkedin: https://www.linkedin.com/in/ericwjr
  avatar: eric.jpg
layout: default
top: true
links:
- Founded and led the Parkside Elementary FLL robotics team
- Teacher of the Year 2006-Kelley Lake Elementary
- Teacher of the Year 2010-Parkside Elementary
---

<div class = 'fulls about' id = 'about'>
  <div class = 'flex-in overlay'>
    <div class = 'tripple'>
      <h1>About Us</h1>
    </div>
  </div>
</div>
<div class = 'dull flex-in'>
  <div class = 'child tripple'>
     <p>Ronnie Thomas applies his 15 years of STEM teaching experience to ensure that all learners are challenged. He leads the way in technology integration and has been recognized for his work:</p>
    <div class = 'left links'>
     {% for link in page.links %}
     <p><i class = 'icon icon-check'></i> <strong>{{ link }}</strong></p>
    {% endfor %}
    </div>
    <p> Mr. Thomas is an enthusiastic and passionate technology educator with a solid commitment to the social, academic and developmental growth of every student. Known for his engaging and versatile teaching methods, Thomas has the ability to inspire hands-on learning experiences that capture a student’s imagination.</p>
  </div>
</div>
<div class = 'bright'>
  <h2>Our Team</h2>
  <div class = 'flex team'>
    {% for member in page.team %}
      <div class = 'duo member'>
        <img src = '{{site.baseurl}}/assets/{{member.avatar}}' alt = '{{member.name}}'>
        <h3>{{member.name}}</h3>
        <div class = 'icons'>
          <span><a href = '{{member.linkedin}}' target = '_blank' class = 'linkedin'><i class = 'icon icon-linkedin'></i></a></span>
          <span><a href = '{{member.twitter}}' target = '_blank' class = 'twitter'><i class = 'icon icon-twitter'></i></a></span>
        </div>
        <p class = 'center'>{{member.description}}</p>
      </div> 
    {% endfor %}
  </div>
</div>
