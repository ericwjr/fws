'use strict';
(function() {
  
  $('.volume').on('click', function (e) {
    $(this)
    .children()
    .toggleClass('fa-volume-off')
    .toggleClass('fa-volume-up');
    
    $(this).siblings()[0].muted = $(this).siblings()[0].muted ? false : true;
  });
  
  $('.menu-bar').on('click', function() {
    $('.before').toggleClass('shadow')
    $('.drop').toggleClass('open');
    if($('.drop').hasClass('close')) {
      $('.drop').toggleClass('close');
    }
    $('.closes').toggleClass('opens');
    $(this).children().toggle('icon-menu');
  });
  
  $('.closes').on('click', function() {
    $(this).toggleClass('opens');
    $('.before').toggleClass('shadow')
    $('.drop').toggleClass('open').toggleClass('close');
    $('.menu-bar').children().toggle('icon-menu');
  });
  
  $('.before').on('click', function() {
    $(this).toggleClass('shadow')
    $('.closes').toggleClass('opens');
    $('.drop').toggleClass('open').toggleClass('close');
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
      url: '//formspree.io/f/info@funweirdscience.com',
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
    var $img = $('.primary').css("background-image","url(" + newSelection + ")");
    clicked.parent().find('.thumbnail').removeClass('selected');
    clicked.addClass('selected');
    $('.primary').empty().append($img.hide().fadeIn('slow'));
  });
})();


const page = document;

function elem(selector, parent = document){
  let elem = document.querySelector(selector);
  return elem != false ? elem : false;
}

function elems(selector) {
  let elems = document.querySelectorAll(selector);
  return elems.length ? elems : false; 
}

function pushClass(el, targetClass) {
  // equivalent to addClass
  if (el && typeof el == 'object' && targetClass) {
    const elClass = el.classList;
    elClass.contains(targetClass) ? false : elClass.add(targetClass);
  }
}

function deleteClass(el, targetClass) {
  // equivalent to removeClass
  if (el && typeof el == 'object' && targetClass) {
    const elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
  }
}

function modifyClass(el, targetClass) {
  // equivalent to toggleClass
  if (el && typeof el == 'object' && targetClass) {
    const elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
  }
}

function containsClass(el, targetClass) {
  if (el && typeof el == 'object' && targetClass) {
    return el.classList.contains(targetClass) ? true : false;
  }
}

function emptyEl(el) {
  while(el.firstChild)
  el.removeChild(el.firstChild);
}

function createEl(element = 'div') {
  return document.createElement(element);
}

function fileClosure() {
  
  (function decorateContacts() {
    let contacts = elems('.contact');
    if (contacts) {
      contacts.forEach(contact => {
        let icons = contact.querySelectorAll('img');
        icons.forEach(icon => {
          let heading = icon.parentNode;
          pushClass(heading, 'contact_decorate');
          pushClass(icon, 'contact_icon');
        }); 
      });
    }
  })();
  
  (function() {
    let items = elems('.share_item');
    
    (function shareItem() {
      const copyToClipboard = str => {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';                 
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =            
        document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
          document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
          document.getSelection().addRange(selected);   // Restore the original selection
        }
        
      };
      
      function copyFeedback(element, parent) {
        const copyText = document.createElement('div');
        copyText.classList.add('share_copy');
        copyText.innerText = 'Link Copied';
        if(!containsClass(element,'share_copy')) {
          parent.appendChild(copyText);
          setTimeout(function() { 
            parent.removeChild(copyText)
          }, 3000);
        }
      }
      
      elem('main').addEventListener('click', function(event) {
        
        let shareTrigger = event.target.closest('.share_item');
        let shareParent = shareTrigger ? shareTrigger.parentNode : null;
        
        if(shareTrigger) {
          let copyclass = shareTrigger.classList.contains('copy') ? true : false;
          let shareSrc = shareTrigger.href;
          event.preventDefault();
          if(copyclass) {
            event.preventDefault();
            copyToClipboard(shareSrc);
            copyFeedback(shareTrigger, shareParent)
          } else {
            window.open(shareSrc, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
          }
        }
      });
    })();
  })();
  
  (function autoResizeTextField() {
    let textarea = document.querySelector('textarea');
    // textarea ? autosize(textarea) : false;
  })();
  

  function smoothScroll(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    
    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }
  
  (function updateDate() {
    var date = new Date();
    var year = date.getFullYear();
    let element = elem('.year');
    
    element ? element.innerHTML = year : false;
  })();
  
  function countries(list, node) {
    list.forEach(function(country){
      let option = document.createElement('option');
      option.textContent = country;
      option.value = country;
      node.appendChild(option);
    });
  }
  
  (function populateOptions() {
    let field = elem('.form_country');
    // field ? countries(formCountries, field) : false;
  })();
  
  function formFeedBack(parent, success = false) {
    let bold, modal, icon, clipBoard, title, message, messages;
    messages = {
      success: {
        title: "Message sent!",
        message: "Thank you for contacting us. You'll hear from us soon.",
        icon: "icon-success.png"
      },
      failure: {
        title: "Something's wrong ...",
        message: "<a href = 'mailto:info@expeditions.co.ke'<u>Contact us</u></a> directly and we'll get you set up in no time.",
        icon: "icon-failure.png"
      }
    }
    let feedback = success ? messages.success : messages.failure;
    let modalClass = 'modal';
    
    modal = createEl();
    modal.className = modalClass;
    clipBoard = createEl();
    title = createEl('h3');
    title.textContent = feedback.title;
    bold = createEl('strong');
    bold.innerHTML = feedback.message;
    message = createEl('p')
    message.appendChild(bold);
    icon = createEl('img');
    icon.src = `/icons/${feedback.icon}`;
    icon.className = 'modal_icon';
    
    clipBoard.appendChild(icon);
    clipBoard.appendChild(title);
    clipBoard.appendChild(message);
    modal.appendChild(clipBoard);
    
    // append modal only once
    // parent node
    let node = parent.parentNode;
    let children = node.children;
    let hasModal = containsClass(children[children.length - 1], modalClass);
    
    if (!hasModal) {
      node.appendChild(modal);
      window.scrollTo(0, 201);
    } 
    
  }
  
  function formValues(form) {
    const isValidElement = element => {
      return element.name && element.value;
    };
    
    const isValidValue = element => {
      return (!['checkbox', 'radio'].includes(element.type) || element.checked);
    };
    
    const isCheckbox = element => element.type === 'checkbox';
    const isMultiSelect = element => element.options && element.multiple;
    
    const getSelectValues = options => [].reduce.call(options, (values, option) => {
      return option.selected ? values.concat(option.value) : values;
    }, []);
    
    const formToJSON = elements => [].reduce.call(elements, (data, element) => {
      if (isValidElement(element) && isValidValue(element)) {
        if (isCheckbox(element)) {
          data[element.name] = (data[element.name] || []).concat(element.value);
        } else if (isMultiSelect(element)) {
          data[element.name] = getSelectValues(element);
        } else {
          data[element.name] = element.value;
        }
      }
      let referrer = document.referrer;
      referrer ? data.from  = referrer : "self";
      return data;
    }, {});
    
    const data = formToJSON(form.elements);
    return JSON.stringify(data, null, "  ");
    
  }
  
  function submitSignUp(form) {
    let formAction = 'https://getform.io/f/febe942a-1bbe-418e-a138-26286a4e9e68';
    
    let data = formValues(form);
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: data
    }
    
    fetch(formAction, options)
    .then(response => response.text())
    .then(() => {
      formFeedBack(form, true);
    })
    .catch(() => {
      formFeedBack(form)
    });
  }
  
  (function handleForm() {
    // request options
    let formID = '.form';
    let forms = elems(formID);
    let submitButton = elem('#submit');
    
    if(forms) {
      const form = forms[0];
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        submitButton.disabled = true;
        // submitSignUp(form);
        return false;
      });
    }
  })();

  function menuHeight(nav) {
    const height = nav.offsetHeight
    nav.dataset.height = height;
    return nav;
  }

  
  (function Menu(){
    const nav = elem('.nav');
    menuHeight(nav);
    window.addEventListener('resize', function(){
      menuHeight(nav);
    });

    page.addEventListener('click', function(event){
      const target = event.target;
      const isActionable = target.matches('.nav-toggle');
      if(isActionable) {
        event.preventDefault();
        const toggled = 'toggled';
        const main = elem('main');
        const height = nav.dataset.height;
        const isToggled = containsClass(main, toggled);
        main.style.transform = isToggled ?  `translateY(0px)` : `translateY(${height}px)`;
        modifyClass(main, toggled);
      }
    });
  })();
  
}  

window.addEventListener('load', fileClosure());
  
