# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Mobile](/screenshots/Mobile.png)

![Tablet](/screenshots/Tablet.png)

![Desktop](/screenshots/Desktop.png)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow


### What I learned

**Data Attributes for State Management:**

```html
<ul class="timeframes">
  <a class="daily timeframe" data-timeframe="daily" data-previous="Yesterday" data-active="false">Daily</a> 
  <a class="weekly timeframe" data-timeframe="weekly" data-previous="Last Week" data-active="true">Weekly</a> 
  <a class="monthly timeframe" data-timeframe="monthly" data-previous="Last Month" data-active="false">Monthly</a> 
</ul>
```

```js
timeframeOptions.forEach((option) => {
    if (option.dataset.timeframe === activeTimeframe) {
        option.dataset.active = true;
        previousLabel = option.dataset.previous
    } else {
        option.dataset.active = false;
    }
});
```

### Useful Resources

- [Interactive Guide to Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)

## Author

- Frontend Mentor - [@ashkir004](https://www.frontendmentor.io/profile/ashkir004)
- Github - [@ashkir004](https://www.github.com/ashkir004)


## Acknowledgments

- Thanks to Github and Frontendmentor
