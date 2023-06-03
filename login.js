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
                alert("logged in succesfully");
                window.location.href = "index1.html";
            })
            .catch((err) => console.log(err));
    } else {
        alert("Login not Successfully")
    }
}