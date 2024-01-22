const form = $('form');
const formBtn = $('.form-btn');
const email = $('input[type="email"]');


const hamburger = $('.hamburger');


const bookmark = $('.bookmarking');
const search = $('.searching');
const share = $('.sharing');
const tab1 = $('.tab-1');
const tab2 = $('.tab-2');
const tab3 = $('.tab-3');
const bookmarkP = $('p.bookmark-p');
const searchP = $('p.search-p');
const shareP = $('p.share-p');



// COLLAPSABLE NAVBAR
hamburger.click(function (e) { 
    
    const mobileNavBar = $('.mobile-nav-bar');
    const mobileClose = $('.mobile-close');
    
    mobileNavBar.css('display', 'grid');
    
    mobileClose.click(function (e) { 
        mobileNavBar.css('display', 'none');    
    });
    
});


// ILLUSTRATION TABS
bookmark.click(function (e) { 
    tab2.css('display', 'none');
    tab1.css('display', 'grid');
    tab3.css('display', 'none');
    bookmarkP.css('border-bottom', '0.2rem solid var(--login-contact-btn)');
    searchP.css('border-bottom', 'none');
    shareP.css('border-bottom', 'none');
});

search.click(function (e) { 
    tab2.css('display', 'grid');
    tab1.css('display', 'none');
    tab3.css('display', 'none');
    searchP.css('border-bottom', '0.2rem solid var(--login-contact-btn)');
    bookmarkP.css('border-bottom', 'none');
    shareP.css('border-bottom', 'none');
});

share.click(function (e) { 
    tab2.css('display', 'none');
    tab1.css('display', 'none');
    tab3.css('display', 'grid');
    shareP.css('border-bottom', '0.2rem solid var(--login-contact-btn)');
    bookmarkP.css('border-bottom', 'none');
    searchP.css('border-bottom', 'none');
});



// CONTACT FORM
function validateEmail() {
    const isEmailValid = email[0].validity.valid;
    const errorMsg = $('.error-msg');

    if (!isEmailValid) {
        errorMsg.css('display', 'inline-block');
        email.addClass('invalid');
        email.attr('placeholder', 'example@email/com');
    } else {
        errorMsg.css('display', 'none');
        email.removeClass('invalid');
    }
}

formBtn.click(function (e) { 
    if (!form[0].checkValidity()) {
        validateEmail();
        e.preventDefault();
    }else {
        setTimeout(() => {
            history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search)
        }, 5);
        
    }
});
