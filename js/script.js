
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

        const randomIndex = Math.floor(Math.random() * data.data.length);
        const randomArtwork = data.data[randomIndex];
        const title = randomArtwork.title;
        const artist = randomArtwork.artist_display;
        const imageId = randomArtwork.image_id;

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
    getArtwork("&query=classic");
});

document.getElementById("artistName").classList.add("error");


document.querySelector(".img1").addEventListener("click", () => {
    getArtwork("&query=");
});

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
};

document.getElementById("copyMe").addEventListener("click", copyContent);
