const app = document.getElementById("app");
const btnUbah = document.getElementById("btn");
const input = document.getElementById("input");
const gambar = document.getElementById("image");

const generateHewan = () => {
    let result = input.value.toUpperCase();

    if (result === "BURUNG") {
        gambar.src = 
        "./burung.jpg";
    }else if (result === "KUCING") {
        gambar.src = 
        "./kucing.jpg";
    }else if (result === "HARIMAU") {
        gambar.src = 
        "./harimau.jpg";
    }else {
        gambar.src ="./manusia.jpg";
    }
};

btnUbah.addEventListener("click", generateHewan);