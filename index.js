'use strict';
(function() {
  $('.menu-bar').on('click', function() {
      $('.full').toggleClass('shadow');
      $('.drop').toggleClass('open');
      $(this).children().toggleClass('icon-close').toggleClass('icon-menu');
      $(this).toggleClass('open-bar');
  });

  $('div.shadow').on('click', function() {
      $('.menu-bar').children().toggleClass('icon-menu').toggleClass('icon-close');
      $('.menu-bar').toggleClass('open-bar');
      $('.drop').toggleClass('open');
      $(this).toggleClass('shadow');
  });

  $('.drop .menu-bar').on('click', function(e){
    e.stopPropagation();
  });

  (function() {
    var font = document.createElement('link');
    font.type = 'text/css'; 
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Nunito+Sans:300i,400,700';
    var s = document.getElementsByTagName('link')[0]; 
    s.parentNode.insertBefore(font, s);
  })();
  
  
  var bot, input, message, guest, email, 
      message, year, widget, mail;
  
  year = new Date();
  $('#year').append(year.getFullYear());
  
  mail = $('#form');
  widget = $('.widget');
  mail.submit(function(e) {
    guest = document.getElementById('name').value.toUpperCase();
    mail = document.getElementById('email').value.toUpperCase();
    message = document.getElementById('message').value.toUpperCase();
    e.preventDefault();
      $.ajax({
        url: '//formspree.io/onewesh@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
          widget.html(`
            <h2>Sending</h2>
            <span class = 'spinner'></span>
          `);
        },
        success: function(data) {
          widget.html(`
            <div class = "confirm">
              <h2>Hey ${guest}!</h2>
              <div class = 'big-icon  success'><i class = 'icon icon-cool'></i></div>
              <p>Thank you for contacting us. We will get back to you asap.</p>
            </div>
          `);
        },
        error: function(err) {
          widget.html(`
            <div class = "confirm">
              <h2 class = 'error'>There was problem.</h2>
              <p>Refrsh and try again.</p>
            </div>
          `);
        }
      });
  });

  $('.previous').on('click', function() {
    window.history.back();
    console.log('I want to go back');
  });

})();

