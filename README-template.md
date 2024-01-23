# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./Screenshot(74).png)
![](./Screenshot(75).png)
![](./Screenshot(76).png)
![](./Screenshot(77).png)
![](./Screenshot(78).png)



### Links

- Solution URL: [Github Repo](https://github.com/Kelechikizito/bookmark-landing-page-master)
- Live Site URL: [Github Page](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [JQuery](https://reactjs.org/) - JS library
- [Bootstrap 5](https://getbootstrap.com) - React framework


### What I learned

I learned the following:
- Creating a landing page with Javascript
- How to create a collapsable navbar with CSS



```html
<div class="mobile-nav-bar">
      <div class="mobile-nav-item">
        <div class="mobile-logos">
          <img src="./images/logo-bookmark.svg" alt="" class="mobile-bookmark">
          <div><img src="./images/icon-close.svg" alt="" class="mobile-close"></div>  
        </div>

        <a href="#features">FEATURES</a>
        <a href="">PRICING</a>
        <a href="#contact">CONTACT</a>
        <a href="" class="login"><button>LOGIN</button></a>
      </div>

      <div class="mobile-nav-item">
        <img src="./images/icon-facebook.svg" alt="">
        <img src="./images/icon-twitter.svg" alt="">
      </div>
    </div>
```

```css
.illustration::after {
    content: "";
    position: absolute;
    left: -10rem;
    bottom: -5rem;
    width: 60%;
    height: 95%;
    background: var(--btn-color-blue);
    z-index: -1;
    border-top-right-radius: 30% 50%;
    border-bottom-right-radius: 30% 50%;
}
```

```js
hamburger.click(function (e) { 
    
    const mobileNavBar = $('.mobile-nav-bar');
    const mobileClose = $('.mobile-close');
    
    mobileNavBar.css('display', 'grid');
    
    mobileClose.click(function (e) { 
        mobileNavBar.css('display', 'none');    
    });
    
});
```

### Continued development

I'd like to be more comfortable building landing pages with animations.


### Useful resources

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/components/accordion/) - This helped me to create the accordion.


## Author

- Website - [Github](https://github.com/kelechikizito)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@kelechiikizito](https://www.x.com/kelechiikizito)



## Acknowledgments

- Website - [Github](https://github.com/uzoway/bookmark-landing-page/)

