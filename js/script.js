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
        const apiURL = `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,artist_display,image_id&query[term][is_public_domain]=true&limit=50`;
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.data || data.data.length === 0) {
            throw new Error("No artwork found");
        }

        // const randomIndex = Math.floor(Math.random() * data.data.length);
        // const randomArtwork = data.data[randomIndex];
        const artworksWithImages = data.data.filter(
        artwork => artwork.image_id
        );

        if (artworksWithImages.length === 0) {
        throw new Error("No artwork with images found.");
        }

        const randomIndex = Math.floor(
        Math.random() * artworksWithImages.length
        );

        const randomArtwork = artworksWithImages[randomIndex];        
        const title = randomArtwork.title;
        const artist = randomArtwork.artist_display;
        const imageId = randomArtwork.image_id;

        // if(!imageId){
        //     throw new Error("Artwork has no image");
        // }

        document.getElementById("artistName").innerText = `${title} by ${artist}`;
        // document.getElementById("pictureOfArt").innerHTML = `<img src="https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg" alt="${title}" style="max-width: 100%;">`;
        const iiifUrl = data.config.iiif_url;

        // document.getElementById("pictureOfArt").innerHTML =
        // `<img src="${iiifUrl}/${imageId}/full/full/0/default.jpg" alt="${title}" style="max-width: 100%;">`   TESTING KEEP THIS IN IF OTHER TEST DOENT WORK;

        document.getElementById("pictureOfArt").innerHTML =
        `<img src="https://picsum.photos/600/400" alt="test" style="max-width:100%;">`;
        
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
