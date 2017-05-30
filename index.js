'use strict';
(function() {
  $('.menu-bar').on('click', function() {
    $('.before').toggleClass('shadow')
    $('.drop').toggleClass('open');
    $('.closes').toggleClass('opens');
    $(this).children().toggle('icon-menu');
  });

  $('.closes').on('click', function() {
    $(this).toggleClass('opens');
    $('.before').toggleClass('shadow')
    $('.drop').toggleClass('open');
    $('.menu-bar').children().toggle('icon-menu');
  });

  $('.before').on('click', function() {
    $(this).toggleClass('shadow')
    $('.closes').toggleClass('opens');
    $('.drop').toggleClass('open');
    $('.menu-bar').children().toggle('icon-menu');
  });

  $('.drop .menu-bar').on('click', function(e){
    e.stopPropagation();
  });

  (function() {
    var font = document.createElement('link');
    font.type = 'text/css'; 
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700|Poppins:300,400';
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
    guest = document.getElementById('name').value.toLowerCase();
    mail = document.getElementById('email').value.toLowerCase();
    message = document.getElementById('message').value.toLowerCase();
    e.preventDefault();
      $.ajax({
        url: '//formspree.io/info@funweirdscience.com',
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
              <h2 class = 'mark capital'>Hello ${guest}</h2>
              <div class = 'big-icon  success'><i class = 'icon icon-cool'></i></div>
              <p>Great to hear from you. We will get back to you asap.</p>
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

$(".select").each(function() {
    var classes = $(this).attr("class"),
    id      = $(this).attr("id"),
    name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
    template += '<span class="gun">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="options">';
    $(this).find("option").each(function() {
      template += '<span class="option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';
    
    $(this).hide();
    $(this).after(template);
  });
  $(".option:first-of-type").hover(function() {
    $(this).parents(".options").addClass("option-hover");
  }, function() {
    $(this).parents(".options").removeClass("option-hover");
  });
  $(".gun").on("click", function() {
    $('html').one('click',function() {
      $(".select").removeClass("opened");
    });
    $(this).parents(".select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".option").on("click", function() {
    $(this).parents(".funga").find("select").val($(this).data("value"));
    $(this).parents(".options").find(".option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".select").removeClass("opened");
    $(this).parents(".select").find(".gun").text($(this).text());
  });
})();

(function gallery(){
   $('.thumbnail').on('click', function() {
    var clicked = $(this);
    var newSelection = clicked.data('big');
    console.log('clicked', newSelection);
    var $img = $('.primary').css("background-image","url(" + newSelection + ")");
    clicked.parent().find('.thumbnail').removeClass('selected');
    clicked.addClass('selected');
    $('.primary').empty().append($img.hide().fadeIn('slow'));
  });
})();