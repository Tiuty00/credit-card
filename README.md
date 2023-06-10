# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

Desktop View <img src=https://github.com/Tiuty00/credit-card/blob/main/desktop-screenshot.png/>

mobile View <img src=https://github.com/Tiuty00/credit-card/blob/main/mobile-screenshot.png/ width="400"/>

### Links

- Solution URL: (https://github.com/Tiuty00/credit-card)
- Live Site URL: (https://tiuty00.github.io/credit-card/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

With this challenge I learned some really really interesting things about javascript.

First of all about 

```js
  const acceptOnlyNumbers = function (input) {
  // Remove all not number characters
  let value = input.value.replace(/\D/g, "");
  // Update input value
  input.value = value;
  };
```

Remove all not number value. so that it doesn't take letters and special characters but only numbers.

Also was very important the replacing number on credit card images, adding space every 4 group o numbers 

```js
 // Dived values on blocks of 4
    let groups = value.match(/(\d{1,4})/g);
    // Join group with space in the middle
    if (groups !== null) {
      value = groups.join(" ");
    }
```

## Author

- Website - Tommaso / Tiuty00 (https://github.com/Tiuty00)
- Frontend Mentor - [@Tiuty00](https://www.frontendmentor.io/profile/Tiuty00)
- Linkedin - [Tommaso Caravaggi](https://www.linkedin.com/in/tommaso-caravaggi-66b130251/)


