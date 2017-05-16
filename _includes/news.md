<style>
body{
  width:100%;
}
.seat{
  background-color:transparent;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  animation:news 7s 2s infinite;
  z-index:999;
}
.seat,
.board{
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}
.board{
  width:100%;
  height:72px;
  background-color:rgba(0,0,0,0.5);
  box-shadow: 0 0 5px 5px rgba(0,0,0,0.05);
  color:inherit;
}
.news img{
  width:60px;
  margin-left:10px;
}
@keyframes news{
  0%{
    width:0;
  }
  25%{
    width:100%;
  }
  96%{
    width:100%;
  }
</style>
{% if page.news %}
<div class = 'seat'>
  <div class = 'board news'>
    <p>{{page.news.title}}</p>
    <img src = '{{site.baseurl}}/assets/{{page.news.image}}.jpg' alt = 'page.news-image'>
  </div>
</div>
{% endif %}
