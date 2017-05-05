---
permalink: "/programs/"
layout: default
top: true
story: House on the Campus of Morehouse College our summer STEM enrichment camp engages
  students through weekly themed learning experiences.
camps:
- name: Little Scientist
  grade: "(1st-4th)"
- name: Engineer in the Making
  grade: "(3rd-5th)"
- name: Innovator Apprentice
  grade: "(6th-8th)"
---

<div class = 'fulls workshops'>
  <div class = 'flex-in overlay'>
    <div class = 'tripple'>
      <h1>Programs</h1>
    </div>
  </div>
</div>
<div class = 'bright flex-in'>
  <div class = 'child tripple'>
    <h2><span id = 'stemsaturdays'>Stem Saturdays</span></h2>
    <p class = 'center'>One Saturday a month, Fun Weird Science hosts elementary and middle school students for a themed STEM Day.</p>
  </div>
</div>
<div class = 'dull flex-in'>
  <div class = 'child tripple'>
    <h3 id = 'camps'>Summer Camps</h3>
    <p>{{page.story}}</p>
    <div class = 'left camps'>
    {% for camp in page.camps %}
      <p><i class = 'icon icon-check'></i> <strong>{{ camp.name }}</strong> {{ camp.grade }}</p>
    {% endfor %}
    </div>
    {% include register.md %}
  </div>
</div>
<div class = 'bright flex-in'>
  <div class = 'tripple'>
    <h2 id = 'after'>After School Workshops</h2>
    <p></p>
  </div>
  <div class = 'banner'>
    <p>There are over 600,000 high-paying technology jobs open across the U.S., and by 2018, 51 percent of all STEM jobs are projected to be in computer-related fields.</p>
  </div>
</div>
