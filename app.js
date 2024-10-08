let charactersData = [
    {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
    },
    {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
    },
    {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
    },
    {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
    },
    {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
    },
    {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
    },
    {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
    },
    {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
    },
    {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
    },
    {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
    }
]

// Burada tüm homeworld dataları return ediyor
const homeworlsdRaw = charactersData.map(characters => characters.homeworld ?? "other")
const homeworldsUnique = Array.from(new Set(homeworlsdRaw))
const homeworldsLowerCase = homeworldsUnique.map(homeworld => homeworld.toLowerCase())
const homeworlds = homeworldsLowerCase
const characterVisibilityButton = document.getElementById("character-visible-btn");
const characterSectionEl = document.getElementById("character-container")
const filterSectionEl = document.getElementById("filter-card-container")

let isVisible = false;

const renderHomeworldFilterItem = () => {
    filterSectionEl.innerHTML = ""
    homeworlds.map((homeworld) => {
        filterSectionEl.innerHTML += `
        <div class="col-lg-1">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="homeworld" onchange="handleFilterChange(event)" id="homeworld-${homeworld}" value="${homeworld}">
                <label class="form-check-label" for="homeworld-${homeworld}">
                    ${homeworld}
                </label>
            </div>
        </div>
        `
    })
}

const showCharacter = () => {
    isVisible = !isVisible;
    if (isVisible) {
        renderCharacters()
        renderHomeworldFilterItem()
        characterVisibilityButton.classList.replace("btn-success", "btn-danger");
        characterVisibilityButton.textContent = "Karakterleri Gizle";
    } else {
        characterSectionEl.innerHTML = "";
        filterSectionEl.innerHTML = ""
        characterVisibilityButton.classList.replace("btn-danger", "btn-success")
        characterVisibilityButton.textContent = "Karakterleri Göster";
    }
}
const handleFilterChange = (targetFilter) => {
    renderCharacters(targetFilter.target.value);
}
const renderCharacters = (render) => {
    // Önce mevcut içerikleri temizle
    let filterData = charactersData;
    characterSectionEl.innerHTML = "";
    if (render != null) {
        filterData = charactersData.filter((data) => data.homeworld == render)
    }
    console.log(filterData);
    // Her karakteri map ile döngüye al ve HTML yapısını oluştur
    filterData.map((data) => {
        characterSectionEl.innerHTML += `
            <div class="col-lg-4 col-md-6">
                <div class="card border-success mb-3">
                    <div class="card-header">${data.homeworld || "other"}</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">${data.name}</h5>
                    </div>
                </div>
            </div>
        `;
    });
}

characterVisibilityButton.addEventListener("click", showCharacter);
