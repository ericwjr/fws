<style>
    .seat{
      background-color:transparent;
      position:fixed;
      bottom:0;
      right:15px;
      animation:news 3s 5s forwards;
      z-index:999;
      perspective:500px;
      background-color:#2e3842;
      overflow:hidden
    }
    .seat,
    .board{
      display:flex;
      align-items:center;
      justify-content:center;
      overflow:hidden;
      color:#fff;
    }
    .board{
      width:100%;
      height:90px;
      background-color:rgba(0,0,0,0.5);
      box-shadow: 0 0 5px 5px rgba(0,0,0,0.05);
      color:inherit;
      padding-left:12.5px;
      padding-right:12.5px;
    }
    .news img{
      width:120px;
      margin-left:10px;
    }
    @keyframes news{
      0%{ transform:translateX(0); opacity:1;}
      100%{ transform:translateX(540px); opacity:0.3;}
    }
</style>
<div class = 'seat'>
  <div class = 'board news'>
    <p>{{page.news_title}}</p>
    <img src = '{{site.baseurl}}/assets/{{page.news_image}}.jpg' alt = 'page.news_image'>
  </div>
</div>
