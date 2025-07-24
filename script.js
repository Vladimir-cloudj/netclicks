const cardWrapper = document.querySelector(".content-cards");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const films = [
  {
    id: 0,
    title: "Марсианин 1",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    image: "./img/film.png",
  },
  {
    id: 1,
    title: "Марсианин 2",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    image: "./img/film.png",
  },
  {
    id: 2,
    title: "Марсианин 3",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "./film.html",
    image: "./img/film.png",
  },
];

const render = (array) => {
    cardWrapper.innerHTML = '';
    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML(
          "beforeend",
          `
            <a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src="./img/film.png" alt="film">
                </div>
                <div class="content-cards__item--title">
                    <h5>${item.title}, </h5>
                    <span>${item.original}</span>
                </div>
                <p class="content-cards__item--description">
                    ${item.category}
                </p>
                <p class="content-cards__item--rating">
                    ${item.rating}/10
                </p>
            </a>            
        `
        );
    })
}

searchButton.addEventListener('click', () => {
    console.log(searchInput.value);
    
    render(films.filter((item) => {
        return item.title.includes(searchInput.value)
    }));
    // if (searchInput.value) {
    //     const searchValue = searchInput.value.toLowerCase();
    //     const filteredFilms = films.filter((item) => {
    //         return item.title.toLowerCase().includes(searchValue);
    //     })
    //     render(filteredFilms);
    // } else {
    //     render();
    // }
})

render(films);
console.log('end');
