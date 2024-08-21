## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Select a card at random and have the cards shuffle each time.

## My process

-Decide which API I'll be using
--PokiAPI

-Decide what components need to be created
--Parent component
---Function to display images in random order

-Scoreboard component

-Image comp
--Pull image from pokeAPI

-Figure out the state structure of each component
-Add style
-Deploy project

### Built with

# React + Vite

- Javascript
- React

### What I learned

I've learned how to use components to save data and have them intereact with eachother.

To see how you can add code snippets, see below:

```jsx
const onClick = (e) => {
  e.preventdefault;
  if (e.target.matches("img")) {
    setArry(shuffleArray([...pokemonArray]));
    setSource([...source, e.target.src]);

    //track score of consecutive clicks without repeating pokemon
    if (source.includes(e.target.src)) {
      setCount(0);
      setSource([]);
      if (count > score) {
        setScore(count);
      }
    } else {
      setCount((count += 1));
      console.log(source);
    }
  }
};
```

### Continued development

I look forward to conitinuing to apply componets to my sites allowing me to couple of html and js. I'm excited to combine this with my use of the rails framework.
