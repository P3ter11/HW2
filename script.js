const idEminem = document.getElementById("eminem");
const idMetallica = document.getElementById("metallica");
const idQueen = document.getElementById("queen");

function search(){
    let input = document.getElementById("searchField");
    idEminem.classList.add("d-none");
    idMetallica.classList.add("d-none");
    idQueen.classList.add("d-none");

    if(input.value === "eminem"){
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then((response) => response.json()) 
        // Abbiamo una promise restituita qui
        .then((data) => {
            const albums = data.data; // Array contenente gli album
            idEminem.classList.remove("d-none");

            // Seleziona il contenitore dove inserire i div degli album
            const eminemSection = document.getElementById("eminemSection");

            // Itera su ogni album ottenuto
            albums.forEach(album => {
                // Crea un nuovo div per l'album
                const albumDiv = document.createElement("div");
                albumDiv.classList.add("album");

                // Crea un'immagine per l'album
                const albumImg = document.createElement("img");
                albumImg.src = album.album.cover_medium;
                albumImg.alt = album.title;

                // Crea un paragrafo per il titolo dell'album
                const albumTitle = document.createElement("p");
                albumTitle.textContent = album.title;

                // Aggiungi l'immagine e il titolo al div dell'album
                albumDiv.appendChild(albumImg);
                albumDiv.appendChild(albumTitle);

                // Aggiungi il div dell'album al contenitore
                eminemSection.appendChild(albumDiv);
            });
        })
        .catch((error) => console.log(error));
    } else if(input.value === "metallica"){
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
        .then((response) => response.json()) 
        // Abbiamo una promise restituita qui
        .then((data) => {
            const albums = data.data; // Array contenente gli album
            idMetallica.classList.remove("d-none");

            // Seleziona il contenitore dove inserire i div degli album
            const metallicaSection = document.getElementById("metallicaSection");

            // Itera su ogni album ottenuto
            albums.forEach(album => {
                // Crea un nuovo div per l'album
                const albumDiv = document.createElement("div");
                albumDiv.classList.add("album");

                // Crea un'immagine per l'album
                const albumImg = document.createElement("img");
                albumImg.src = album.album.cover_medium;
                albumImg.alt = album.title;

                // Crea un paragrafo per il titolo dell'album
                const albumTitle = document.createElement("p");
                albumTitle.textContent = album.title;

                // Aggiungi l'immagine e il titolo al div dell'album
                albumDiv.appendChild(albumImg);
                albumDiv.appendChild(albumTitle);

                // Aggiungi il div dell'album al contenitore
                metallicaSection.appendChild(albumDiv);
            });
        })
        .catch((error) => console.log(error));
    } else if(input.value === "queen"){
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
        .then((response) => response.json()) 
        // Abbiamo una promise restituita qui
        .then((data) => {
            const albums = data.data; // Array contenente gli album
            idQueen.classList.remove("d-none");

            // Seleziona il contenitore dove inserire i div degli album
            const queenSection = document.getElementById("queenSection");

            // Itera su ogni album ottenuto
            albums.forEach(album => {
                // Crea un nuovo div per l'album
                const albumDiv = document.createElement("div");
                albumDiv.classList.add("album");

                // Crea un'immagine per l'album
                const albumImg = document.createElement("img");
                albumImg.src = album.album.cover_medium;
                albumImg.alt = album.title;

                // Crea un paragrafo per il titolo dell'album
                const albumTitle = document.createElement("p");
                albumTitle.textContent = album.title;

                // Aggiungi l'immagine e il titolo al div dell'album
                albumDiv.appendChild(albumImg);
                albumDiv.appendChild(albumTitle);

                // Aggiungi il div dell'album al contenitore
                queenSection.appendChild(albumDiv);
            });
        })
        .catch((error) => console.log(error));
    }
}

function getList(){
    
}

