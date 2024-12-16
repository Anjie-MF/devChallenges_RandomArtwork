## Table of contents

- [Overview](#overview)
- [Link](#link)
- [My process](#my-process)
- [Built with](#built-with)
- [What I'm Proud Of](#what-I'm-Proud-Of)
- [Help Me Debug](#help-me-debug)
- [Boilerplate](#boilerplate)
- [Useful sites](#useful-sites)
- [Author](#author)
- [AI prompts ](#ai-prompts)
- [Acknowledgments](#acknowledgments)


## Overview

This challenge was an excellent opportunity to gain practical experience utilizing external APIs within my application. The task involves creating a straightforward application for generating random quotes, which will necessitate the use of an external API.

                                    💡💡Lessons Learned 💡💡

<p>This project was a great opportunity to dive deeper into JavaScript and explore the world of APIs. It was a bit of a surprise to stumble into back-end concepts, but I embraced the challenge and learned a lot along the way.

<ol>
  <li><strong>Random Quotes became Random Artwork</strong></li>
   * I encountered significant challenges finding a suitable free API with CORS support. Despite attempts to implement a proxy server, I ultimately decided to switch to random artworks.

  <li><strong>Error Handling</strong></li>
   *  I gained valuable experience in error handling by utilizing the try...catch block to gracefully handle exceptions in my project.<br>
   * Developed a deeper understanding of JavaScript operators through independent study which means more robust Javascript. 

  <li><strong>Math.random()</strong></li>
   * I leveraged my existing knowledge of Math.random() from Skillcrush to introduce randomness and unpredictability into this project, further solidifying my understanding.
  </li>
</ol>

I had the opportunity to dive deep into several new concepts this week. While I didn't finish the project by Saturday, I gained a much deeper understanding and appreciation for JavaScript APIs. I commend the efforts of the developers who create and maintain these powerful tools. I've learned some new best practices that I'm excited to implement moving forward. <br>

My vacation ended on Sunday, and I returned to work. As a retail worker during the busy Christmas season, I had to be strategic with my time. This required me to make quick and efficient decisions, such as when I switched from random quotes to random artworks due to limitations in my unsecured HTTP environment.


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


### Help Me Debug

```js
const copyContent = async () => {
    try {
        const copyButton = document.querySelector(".img2");
        const text = copyButton.alt;

        if (!text) {
            console.error("No text found to copy!")
            return
        }
        await navigator.clipboard.writeText(text);
        alert("Copied to Clipboardd!");
        console.log("Copied to clipboard:", text);

        copyButton.classList.add("active");

        setTimeout(() => {
            copyButton.classList.remove("active");
        }, 2000);
    } catch (error) {
        console.error("Failed to copy content:", err)
    }
}; //this code snippet is the copy feature
```

I struggled to implement the copy feature due to working in an unsecured HTTP environment. As a temporary solution, I added an alert button. If you have any suggestions for a more elegant solution, please let me know. I plan to revisit this feature in the future.

### Boilerplate

- [Piccalil CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/) - My go-to CSS Reset tool
- [Dinson Kadudhus](https://responsivetesttool.com/) - Website Responsive Testing

### Useful Sites

- [css_tricks](https://css-tricks.com/accessible-svgs/) - SVG tags do not have alt attributes, but CSS tricks found a work around so this site will remain accesible for all users. In this instance, I chose to use alt to provide context for the user. 

- [mdn_web_docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) - The try...catch block is like a if...else statement but it is specifically designed to catch errors.

- [geeksforgeeks](https://www.geeksforgeeks.org/javascript-errors-throw-and-try-to-catch/) - geeksforgeeks explains throw, try..catch blocks, finally block, and how to create your custom error message aka error handling for beginners. Pro-Tip **Don't wrap the entire code in a try...catch block. 🫠 **

- [w3schools](https://www.w3schools.com/js/js_random.asp) - w3schools explained Javascript Random easily, provided examples, syntax and there was quiz at the end to check comprehenson! A++

## Author

- LinkedIn - [Anjie M.F.](https://www.linkedin.com/in/anjiemay23/)
- Frontend Mentor - [Anjie-MF](https://www.frontendmentor.io/profile/Anjie-MF)
- devchallenges - [Anjie-MF](https://devchallenges.io/profile/8be0c431-2bcb-4836-b3e6-ec0349054e71)


## AI prompt 

- [Gemini AI](gemini.google.com) - The prompt I used to guide the discussion was:

``` I’m currently debugging an issue and need some advice. According to the API, it displays 12 records per page by default, with a limit of 100. My goal is to show a random artwork each time the user clicks a button, rather than the same 12 artworks being displayed repeatedly. Should I increase the pagination or use Math.random() to achieve this? ``` 

## Acknowledgments

- Skillcrush -  [Skillcrush](https://www.skillcrush.com) - More than just a coding academy. It is a supportive community with a rigorous curriculum that fostered my growth as a developer, enabling me to tackle this project with unwavering determination. 🖤 🖤 

