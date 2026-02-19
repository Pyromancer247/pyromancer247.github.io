window.onload = function() {
    this.document.getElementById("filterContent").style.display = "none";
};

function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newContentForm = document.getElementById("newContent");
    newContentForm.style.display = "none";
    if (filterForm.style.display === "none" || filterForm.style.display === "") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    const newContentForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");
    filterForm.style.display = "none";
    if (newContentForm.style.display === "none" || newContentForm.style.display === "") {
        newContentForm.style.display = "flex";
    } else {
        newContentForm.style.display = "none";
    }
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;
    const allArticles = document.querySelectorAll("#articleList article");
    allArticles.forEach(article => {
        if (article.classList.contains("opinion") && !showOpinion) {
            article.style.display = "none";
        } else if (article.classList.contains("recipe") && !showRecipe) {
            article.style.display = "none";
        } else if (article.classList.contains("update") && !showUpdate) {
            article.style.display = "none";
        } else {
            article.style.display = "block";
        }
    });
}

function addNewArticle() {
    const titleInput = document.getElementById("inputHeader").value.trim();
    const textInput = document.getElementById("inputArticle").value.trim();
    const typeInput = document.querySelector("input[name='articleType']:checked");
    if (!titleInput || !textInput || !typeInput) {
        alert("Please fill in all fields and select an article type.");
        return;
    }
    const articleType = typeInput.id.replace("Radio", "");  
    let finalType = articleType;
    if (articleType === "life") finalType = "update";
    const newArticle = document.createElement("article");
    newArticle.className = finalType;
    newArticle.innerHTML = `
        <span class="marker">${capitalize(finalType)}</span>
        <h2>${titleInput}</h2>
        <p>${textInput}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;
    document.getElementById("articleList").appendChild(newArticle);
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    typeInput.checked = false;
    document.getElementById("newContent").style.display = "none";
    filterArticles();
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
