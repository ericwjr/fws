---
title: About Us
permalink: "/about-us/"
layout: default
top: true
---

<div class = 'overview fulls'>
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
     {% for achievement in site.data.ronnie %}
     <p><i class = 'icon icon-check point'></i><span class = 'point'>{{ achievement }}</span></p>
    {% endfor %}
    </div>
    <p> Mr. Thomas is an enthusiastic and passionate technology educator with a solid commitment to the social, academic and developmental growth of every student. Known for his engaging and versatile teaching methods, Thomas has the ability to inspire hands-on learning experiences that capture a student’s imagination.</p>
  </div>
</div>
<div class = 'bright'>
  <h2>Our Team</h2>
  <div class = 'flex team'>
    {% for member in site.data.team %}
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
