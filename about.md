---
title: About Us
team: 
  - name: 'Tommy Clay'
    description: Tommy is an awesome educator with a knack for media and design
    twitter: 'https://twitter.com/apsittommy'
    linkedin: ''
    avatar: 'tommy.png'
  - name: 'Eric Williams'
    description: When Eric isn't creating new tech products, he's looking for ways to give back
    twitter: 'https://twitter.com/Ericwjr'
    linkedin: 'https://www.linkedin.com/in/ericwjr'
    avatar: 'eric.jpg'
permalink: "/about-us/"
layout: default
---

<div class = 'bright'>
  <h1>About Us</h1>
  <div class = 'flex'>
    <div class = 'duo'>
        <p>Ronnie Thomas applies his 15 years of STEM teaching experience to ensure that all learners are challenged. He leads the way in technology integration and has been recognized for his work:</p>
        <ul>
          <li>Founded and led the Parkside Elementary FLL robotics team as seen on CNN here: : FLL CNN</li>
          <li>Teacher of the Year 2006-Kelley Lake Elementary</li>
          <li>Teacher of the Year 2010-Parkside Elementary</li>
        </ul>
        <p> Mr. Thomas is an enthusiastic and passionate technology educator with a solid commitment to the social, academic and developmental growth of every student. Known for his engaging and versatile teaching methods, Thomas has the ability to inspire hands-on learning experiences that capture a student’s imagination.</p>
    </div>
    <div class = 'duo'>
        <img src = '{{site.baseurl}}/assets/aboutscience.jpg' alt = 'aboutscience'>
    </div>
  </div>
</div>
<div class = 'main'>
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
        <p>{{member.description}}</p>
      </div> 
    {% endfor %}
  </div>
</div>