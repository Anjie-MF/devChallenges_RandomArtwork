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

const getArtwork = async function (query = "painting") {
    try {
        const searchURL = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}&hasImages=true&isPublicDomain=true`;
        const searchResponse = await fetch(searchURL);

        if (!searchResponse.ok) {
            throw new Error(`HTTP error! status: ${searchResponse.status}`);
        }

        const searchData = await searchResponse.json();

        if (!searchData.objectIDs || searchData.objectIDs.length === 0) {
            throw new Error("No artwork found");
        }

        const randomId = searchData.objectIDs[Math.floor(Math.random() * searchData.objectIDs.length)];

        const detailResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`);
        const artwork = await detailResponse.json();

        if (!artwork.primaryImage) {
            throw new Error("No image available");
        }

        document.getElementById("artistName").innerText = `${artwork.title} by ${artwork.artistDisplayName || "Unknown Artist"}`;
        document.getElementById("pictureOfArt").innerHTML = `<img src="${artwork.primaryImageSmall}" alt="${artwork.title}" style="max-width: 100%;">`;

    } catch (error) {
        console.error("Failed to fetch artwork:", error);
        document.getElementById("artistName").innerText = "Failed to load artwork.";
        document.getElementById("pictureOfArt").innerHTML = "";
    }
};
getArtwork();

document.querySelector("#randomArt").addEventListener("click", () => {
getArtwork("painting");
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
