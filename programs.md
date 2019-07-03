---
permalink: "/programs/"
layout: default
top: true
story: Housed on the campus of Morehouse College our summer STEM enrichment camp engages students through weekly themed learning experiences.
---

<div class = 'fulls workshops'>
  <div class = 'flex-in overlay'>
    <div class = 'tripple'>
      <h1>Programs</h1>
    </div>
  </div>
</div>
<div class = 'bright'>
  <h2>Fun Weird Science Academy </h2>
  <div class = 'flex-in grade'>
    {% for level in site.data.academy %}
      <div class = 'grade-level'>
          <h3>{{ level.level }}</h3>
          <p>{{ level.description }}</p>
      </div>
    {% endfor %}
  </div>
</div>
<div class = 'dull flex-in'>
  <div class = 'child tripple'>
    <h3 id = 'camps'>Summer Camps</h3>
    <p>{{page.story}}</p>
    {% include register.md %}
    <h3>Summer Camp Plug In</h3>
    <p> Let Fun Weird Science come out to your summer camp and provide hands on STEM learning experiences. All programs are totally FUN, totally hands-on and totally participatory for each student. All programs are geared for the Kindergarten through Fifth grade student, however we can customize programs to fit your needs. </p>
		<a class = 'submit' href = '{{site.baseurl}}/contact'>Get More Info</a>
  </div>
</div>
<div class = 'bright'>
  <div class = 'flex-in'>
    <div class = 'child tripple'>
      <h2><span id = 'stemsaturdays'>Stem Saturdays</span></h2>
      <p class = 'center'>One Saturday a month, Fun Weird Science hosts elementary and middle school students for a themed STEM Day.</p>
      <a class = 'submit' target = '_blank' href = 'https://www.google.com/url?q=https://campscui.active.com/orgs/FunWeirdScienceLLC?orglink%3Dcamps-registration%23/selectSessions/2631608&sa=D&source=hangouts&ust=1562257517923000&usg=AFQjCNH5VfmSo040A_IcvHGdfxqP758RyA'>STEM Field Trips</a>
    </div>
  </div>
  <div class = 'banner'>
    <i class = 'icon icon-opens' aria-hidden = 'true'></i>
    There are over 600,000 high-paying technology jobs open across the U.S., and by 2018, 51 percent of all STEM jobs are projected to be in computer-related fields.
    <i class = 'icon icon-closes' aria-hidden = 'true'></i>
  </div>
</div>