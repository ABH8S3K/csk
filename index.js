// fetch("http://localhost:8080/myData", {
//         method: "GET",
//     })
//     .then((response) => response.json())
//     .then((data) => renderData(data));

// function renderData(data) {
//     // console.log(data)
//     data.forEach((el (let indexEach((el = 0; index < array.leEach((elngth; index++) {
//         const element = Each((elarray[index];
//             const div = document.createElement("div");
//     const image = document.createElement("img");
//     image.src = el.image;
//     const movieTitle = document.createElement("h3");
//     movieTitle.innerText = el.title;
//     const rating = document.createElement("p");
//     rating.innerText = el.rating;
//     const button = document.createElement("button");
//     button.innerText = "Click Movie";
//     button.addEventListener("click", () => {
//         alert(`You clicked on ${el.title}`);
//     });
//     div.append(image, movieTitle, rating, button);
//     movieBox.append(div);
const button = document.getElementById("mybutton");
const takenmail = document.getElementById("email");
const takenpassword = document.getElementById("password");

function submitData() {
    //e.preventDefault();
    if (takenmail.value !== "" && takenpassword.value !== "") {
        const obj = {
            id: Date.now(),
            email: takenmail.value,
            password: takenpassword.value,
        };
        fetch("http://localhost:8080/myData", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(obj),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Created Account");
                window.location.href = "./login.html";
            })
            .catch((err) => console.log(err));
    } else {
        alert("fill in the form")
    }
}