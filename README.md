# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop View](/Picture/Desktop%201024px.png)
![Mobile View](</Picture/mobile_(iPhone%20XR).png>)

### Links

- Solution URL: [Github repo](https://github.com/Jamieeee1/conference-ticket-generator-main)
- Live Site URL: [Vercel Site](https://conference-ticket-generator-peach.vercel.app/)

## My process

- install vite
- installed tailwind
- started with html
- then little css
- then javascript
- completing my css

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript
- Mobile-first workflow
- [Tailwind v4.1](https://tailwindcss.com/docs) - CSS library
- [Font Awesome](https://kit.fontawesome.com) - Icon library

### What I learned

Understanding how form validation worked better. Manipulating tailwindcss using javascript classList and also checking for file size. source control for javascript too
To see how you can add code snippets, see below:

```js
function checkImageSize() {
  const file = fileInput.files[0];
  if (file && file.size > 2 * 1024 * 1024) {
    imageError.classList.remove("text-Neutral-500");
    imageError.classList.add("text-Orange-700");
    return;
  } else {
    imageError.classList.contains("text-Orange-700") &&
      imageError.classList.remove("text-Orange-700") &&
      imageError.classList.add("text-Neutral-500");
    updateAvatar();
  }
}
```

### Continued development

Using form to communicate with servers.

## Author

- Website - [Barnabas James](https://james-resume-three.vercel.app/)
- Frontend Mentor - [@Jamieeee1](https://www.frontendmentor.io/profile/Jamieeee1)
- Twitter - [@Meet_JamesB](https://www.twitter.com/Meet_JamesB)
