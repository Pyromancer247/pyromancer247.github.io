document.getElementById("findBtn").addEventListener("click", function () {
    let nameOrId = document.getElementById("pokemonInput").value.trim().toLowerCase();

    if (nameOrId === "") return;

    let url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Pokemon not found");
            return response.json();
        })
        .then(data => {
            loadPokemonData(data);
        })
        .catch(err => {
            alert("Pokemon not found!");
        });
});


function loadPokemonData(pokemon) {
    console.log(pokemon);

    document.getElementById("pokemonImage").src =
        pokemon.sprites.other["official-artwork"].front_default;

    document.getElementById("pokemonCry").src =
        pokemon.cries?.latest || pokemon.cries?.legacy || "";

    let moveSelects = document.querySelectorAll(".moveSelect");

    moveSelects.forEach(select => {
        select.innerHTML = "";

        let emptyOption = document.createElement("option");
        emptyOption.value = "";
        emptyOption.textContent = "";
        select.appendChild(emptyOption);

        let sortedMoves = pokemon.moves
            .map(m => m.move.name)
            .sort((a, b) => a.localeCompare(b)); 

        sortedMoves.forEach(moveName => {
            let option = document.createElement("option");
            option.value = moveName;
            option.textContent = moveName;
            select.appendChild(option);
        });
    });
}

document.getElementById("addBtn").addEventListener("click", function () {

    let moveSelects = document.querySelectorAll(".moveSelect");

    let moves = [];
    moveSelects.forEach(sel => {
        if (sel.value !== "") moves.push(sel.value);
    });

    if (moves.length === 0) {
        alert("Please choose at least one move.");
        return;
    }

    let imgSrc = document.getElementById("pokemonImage").src;

    let box = document.createElement("div");
    box.className = "teamBox";

    let img = document.createElement("img");
    img.src = imgSrc;
    img.className = "teamImg";

    let moveList = document.createElement("ul");
    moveList.className = "teamMoves";

    moves.forEach(m => {
        let li = document.createElement("li");
        li.textContent = m;
        moveList.appendChild(li);
    });
    box.appendChild(img);

    let middle = document.createElement("div"); 
    box.appendChild(middle); 

    box.appendChild(moveList);

    document.getElementById("teamContainer").appendChild(box);
});