## Table of contents

- [Overview](#overview)
- [Link](#link)
- [My process](#my-process)
- [Built with](#built-with)
- [What I'm Proud Of](#what-I'm-Proud-Of)
- [Boilerplate](#boilerplate)
- [Useful sites](#useful-sites)
- [Author](#author)
- [AI prompts ](#ai-prompts)
- [Acknowledgments](#acknowledgments)


## Overview
This challenge was an excellent opportunity to gain practical experience in utilizing external APIs within my application. The task involves creating a straightforward application for generating random quotes, which will necessitate the use of an external API.

                                    💡💡Lessons Learned 💡💡

-notes about CORS and cors-disabled 
--talk about error handling
---talk about math.random()
----talk about ...


### Link

- Live Site Link: [Check Me Out!]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I'm Proud Of

You can add code snippets using the syntax:

```js
     catch (error) {
        console.error("Failed to fetch artwork:", error);
        document.getElementById("artistName").innerText = "Failed to load artwork.";
        document.getElementById("pictureOfArt").innerHTML = "";
    } //This code snippet is the try...catch block
```
```js
if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } //this code snippet is the error handling block 
```

```js
const copyContent = async () => {
    try {
        const text = document.getElementById("artistName").innerText;
        await navigator.clipboard.writeText(text);
        console.log('Copied!')
    } catch (err) {
        console.error('Failure to capture!', error);
    }
}; //this code snippet is the copy feature
```

### Boilerplate

- [Piccalil CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/) - My go-to CSS Reset tool
- [Dinson Kadudhus](https://responsivetesttool.com/) - Website Responsive Testing

### Useful Sites

- [css_tricks](https://css-tricks.com/accessible-svgs/) - SVG tags do not have alt attributes, but CSS tricks found a work around so this site will remain accesible for all users. In this instance, I chose to use alt to provide context for the user. 

- [mdn_web_docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) - The try...catch block is like a if...else statement but it is specifically designed to ctach errors.

- [geeksforgeeks](https://www.geeksforgeeks.org/javascript-errors-throw-and-try-to-catch/) - geeksforgeeks explains throw, try..catch blocks, finally block, and how to create your custom error message aka error handling for beginners. Pro-Tip **Don't wrap the entire code in a try...catch block. 🫠 🫠 **

- [w3schools](https://www.w3schools.com/js/js_random.asp) - w3schools explained Javascript Random easily, provided examples, syntax and there was quiz at the end to check comprehenson! A++

- [freecodecamp](https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/) - freecodecamp provided instructions but also explain the wy and how behnind each code block which I deeeply appreciate. It heps me modify the inforamtion based on the project. 

## Author

- LinkedIn - [Anjie M.F.](https://www.linkedin.com/in/anjiemay23/)
- Frontend Mentor - [Anjie-MF](https://www.frontendmentor.io/profile/Anjie-MF)
- devchallenges - [](add link after completing project)


## AI prompt 

- [Gemini AI](gemini.google.com) - The prompt I used to guide the discussion was:

``` I’m currently debugging an issue and need some advice. According to the API, it displays 12 records per page by default, with a limit of 100. My goal is to show a random artwork each time the user clicks a button, rather than the same 12 artworks being displayed repeatedly. Should I increase the pagination or use Math.random() to achieve this? ``` 

## Acknowledgments

- Skillcrush -  [Skillcrush](https://www.skillcrush.com) - More than just a coding academy. It is a supportive community with a rigorous curriculum that fostered my growth as a developer, enabling me to tackle this project with unwavering determination. 🖤 🖤 

