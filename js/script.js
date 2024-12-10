const getQuote = async function () {
    const getRandomQuote = await fetch("FIND_FREE_API_FOR_QUOTES");
    const data = await getRandomQuote.json();
    console.log(data)
}
getQuote();









// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);



















// let text = document.getElementById('quoteContainer').innerHTML;
// const copyContent = async () => {
//     try {
//         await navigator.clipboard.writeText(text);
//         console.log('Quote copied to clipboard!')
//     } catch (err) {
//         console.error('Failed to copy:', err);
//     }
// }