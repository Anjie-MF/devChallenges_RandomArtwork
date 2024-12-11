const getArtwork = async function (query = "") {
    try {
        const apiURL = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,image_id${query}`;
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.data || data.data.length === 0) {
            throw new Error("No artwork found");
        }
        const artwork = data.data[0];
        const title = artwork.title;
        const artist = artwork.artist_display;
        const imageId = artwork.image_id;

        document.getElementById("artistName").innerText = `${title} by ${artist}`;
        document.getElementById("pictureOfArt").innerHTML = `<img src="https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg" alt="${title}" style="max-width: 100%;">`;
    } catch (error) {
        console.error("Failed to fetch artwork:", error);
        document.getElementById("artistName").innerText = "Failed to load artwork.";
        document.getElementById("pictureOfArt").innerHTML = "";
    }
};

getArtwork();


document.querySelector(".contemporaryArtButton").addEventListener("click", () => {
    getArtwork("&query=contemporary");
});

document.querySelector(".classicalArtButton").addEventListener("click", () => {
    getArtwork("&query=classical");
});

document.getElementById("artistName").classList.add("error");


// let text = document.getElementById('quoteContainer').innerHTML;
// const copyContent = async () => {
//     try {
//         await navigator.clipboard.writeText(text);
//         console.log('Quote copied to clipboard!')
//     } catch (err) {
//         console.error('Failed to copy:', err);
//     }
// }