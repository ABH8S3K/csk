const data = [{
        image: "https://images.pexels.com/photos/2199486/pexels-photo-2199486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: " man in silent street",
        rating: 5,
    },
    {
        image: "https://images.pexels.com/photos/3109671/pexels-photo-3109671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: " night day",
        rating: 5,
    },
    {
        image: "https://images.pexels.com/photos/859899/pexels-photo-859899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: " silence road",
        rating: 5,
    },
];
const movieBox = document.getElementById("show_movies")

data.map((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const rating = document.createElement("p");
    rating.innerText = el.rating;
    const button = document.createElement("button");
    button.innerText = "Click Movie";
    button.addEventListener("click", () => {
        alert(`You clicked on ${el.title}`);
    });
    div.append(image, movieTitle, rating, button);
    movieBox.append(div);


});
// for (let i = 0; i < data.length; i++) {
//     const div = document.createElement("div");
//     const image = document.createElement("img");
//     image.src = data[i].image;
//     const movieTitle = document.createElement("h3");
//     movieTitle.innerText = data[i].title;
//     const rating = document.createElement("p");
//     rating.innerText = data[i].rating;

//     div.append(image, movieTitle, rating);
//     movieBox.append(div);

// }