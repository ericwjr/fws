---
  layout: default
  permalink: /contact-us/
  dark: true
---
<style>
  .spinner{
    display:block;
    width:45px;
    height:45px;
    margin:25px auto;
    border-color:transparent #eee #eee #0FBE7C;
    border-style:solid;
    border-radius:50%;
    border-width:5px;
    animation: spin 0.75s infinite linear;
  }
  @keyframes spin {
    0% { transform:rotate(0deg); }
    25%{ transform:rotate(90deg); }
    50%{ transform:rotate(180deg); }
    75%{ transform:rotate(180deg); }
    100%{ transform:rotate(360deg); }
  }
  .form{min-height:72vh;}
  .widget{
    padding:0;
    color:#111;
    width:100%;
    max-width:450px;
  }
  .widget h1{
    color:inherit;
  }
  .confirm,
  .sending{
    width:100%;
    padding:20px;
    text-align:center;
    font-size:1.2em;
  }
  .success{
    color: #0FBE7C;
  }
  .error{
    color:#f00;
  }
  ::-webkit-input-placeholder {
    color: #444;
  }
  .previous{
    cursor:pointer;
    width:50px;
    height:50px;
    top:20px;
    right:20px;
    border-radius:50%;
    border:3px solid #eee;
  }
  form{
    padding:25px;
    width:100%;
    min-width:270px;
  }
  textarea{
    min-height:90px;
  }
  input, textarea{
    opacity:0.9;
    background-color:#f5faf5;
    transition:background-color 0.3s ease-in-out, opacity 0.25s ease-in-out, border 0.3s ease-in;
    display:block;
    width:100%;
    outline:none;
    border:1px solid transparent;
    padding:15px 25px;
    font-size:1.05em;
    margin:25px auto;
  }
  input:hover,
  textarea:hover,
  textarea:focus{
    opacity:1;
    background-color:#f0faf0;
    border: 1px solid #0FBE7C;
    width:100%;
  }
  input[type=submit]{
    background-color:#0FBE7C;
    color:#fff;
  }
  input[type=submit]:hover{
    opacity:1;
  }
  input.submit{
    width:100%;
    background-color:#0FBE7C;
    color:#fff;
    font-weight:400;
    cursor:pointer;
    text-align:center;
    margin:15px auto;
    padding:12.5px 0;
    border-radius:25px;
    font-size:120%;
    outline:none;
    border:none;
    -webkit-appearance: none;
    transition:background-color 0.3s ease-in-out;
  }
</style>
<section class = 'form flex-in'>
  <div class = 'widget'>
    <form  action = 'https://formspree.io/onewesh@gmail.com' method = 'POST' id = 'enquire'>
        <input name = 'name' type = 'text' required placeholder = 'Name'>
        <input name = 'email' type = 'email' required placeholder = 'Email'>
        <textarea name = 'message' required id = 'message' placeholder = 'Leave us a message'></textarea>
        <input class = 'submit' type = 'submit' value = 'submit'>
    </form>
  </div>
</section>
