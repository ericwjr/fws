'use strict';
(function() {
    $('.drop').on('click', function(e){
      e.stopPropagation();
    });
    $('.menu-bar').on('click', function(){
        $('.full').toggleClass('shadow');
        $('.drop').toggleClass('open');
        $(this).children().toggleClass('cross');
        $(this).toggleClass('open-bar');
    });

    var menuIsOpen = $('.drop').hasClass('shadow');
    
    if(menuIsOpen) {
      $('body').on('click', function(){
          $('.menu-bar').children().toggleClass('cross');
          $('.menu-bar').toggleClass('open-bar');
          $('.drop').toggleClass('open');
          $(this).toggleClass('shadow');
      });
    }

    (function() {
      var font = document.createElement('link');
      font.type = 'text/css'; 
      font.rel = 'stylesheet';
      font.href = 'https://fonts.googleapis.com/css?family=Nunito+Sans:300i,400,700';
      var s = document.getElementsByTagName('link')[0]; 
      s.parentNode.insertBefore(font, s);
    })();
    
    
    var bot, input, message, email, guest, mailForm, year, widget;
    
    year = new Date();
    $('.thisYear').append(year.getFullYear());
    
    mailForm = $('#enquire');
    widget = $('.widget');
    mailForm.submit(function(e) {
      guest = document.getElementById('name').value.toUpperCase();
      e.preventDefault();
      if(guest){
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
                <h2 class = 'error'>Yikes! There was problem.</h2>
                <p>Please refrsh and try again.</p>
              </div>
            `);
          }
        });
      }
    });

    $('.previous').on('click', function() {
      window.history.back();
      console.log('I want to go back');
    });

})();

