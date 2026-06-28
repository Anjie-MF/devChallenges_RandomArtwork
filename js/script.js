const contemporaryBtn = document.querySelector(".contemporaryArtButton");
const classicalBtn = document.querySelector(".classicalArtButton");

contemporaryBtn.addEventListener("click", () => {
    getArtwork("contemporary");
    contemporaryBtn.classList.add("selected");
    classicalBtn.classList.remove("selected");
});

classicalBtn.addEventListener("click", () => {
    getArtwork("classic");
    classicalBtn.classList.add("selected");
    contemporaryBtn.classList.remove("selected");
});

const getArtwork = async function (query = "") {
    try {
        const apiURL = `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,artist_display,image_id`;
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

document.querySelector("#randomArt").addEventListener("click", () => {
    getArtwork("&query=");
 contemporaryBtn.classList.remove("selected");
classicalBtn.classList.remove("selected");
});

const copyContent = async () => {
    try {
const title = document.getElementById("artistName").innerText;

        if(!title) {
            console.error("No title found to copy!");
            return;
        }

        await navigator.clipboard.writeText(title);

        const copyButton = document.getElementById("copyMe");
        copyButton.classList.add("active");

        setTimeout(() => {
            copyButton.classList.remove("active");
        }, 2000);
        
    } catch (error) {
        console.error("Failed to copy content:", error)
    }
};

document.getElementById("copyMe").addEventListener("click", copyContent);
