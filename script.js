    document.addEventListener("DOMContentLoaded", function () {

    // ---------- SIGNUP FORM ----------
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {

                const res = await 
                fetch("http://localhost:3000/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: email,
    password: password,
    district: document.getElementById("district").value
  })
})

                const data = await res.json();

                if (data.success) {
                    alert("Signup successfully");
                    signupForm.reset();
                    if (data.success) {
    

    window.location.href = "home.html";   

} else {
    alert(data.message);
}
                } else {
                    alert(data.message);
                }

            } catch (err) {
                console.error(err);
                alert("Server error");
            }

        });
    }


    // ---------- LOGIN FORM ----------
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {

                const res = await fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();

                console.log("Login Response:", data); // Debug line

                if (data.success) {

                    // 🔥 VERY IMPORTANT LINE
                    localStorage.setItem("userId", data.userId);

                    alert("Login successfully");
                    loginForm.reset();

                    window.location.href = "home.html";

                } else {
                    alert(data.message);
                }

            } catch (err) {
                console.error(err);
                alert("Server error");
            }

        });
    }

});
const words=[
"WELCOME",
"TO",
"GROUPCART",
"BEST",
"DEALS"
];

const container=document.querySelector(".form-container");

words.forEach((word,i)=>{

let rope=document.createElement("div");
rope.className="hanging-rope";

let board=document.createElement("div");
board.className="hanging-word";
board.innerText=word;

rope.appendChild(board);

/* center spacing */
rope.style.left=(20+(i*15))+"%";

/* different swing speed */
rope.style.animation=`swing${(i%3)+1} ${3+i*0.5}s ease-in-out infinite alternate`;

container.appendChild(rope);

});
