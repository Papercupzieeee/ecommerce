    document.addEventListener("DOMContentLoaded", function () {

    // ---------- SIGNUP FORM ----------
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const district = document.getElementById("district").value;


            localStorage.setItem("district", district);

            try {

                const res = await 
                fetch("https://ecommerce-backend-yx51.onrender.com/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: email,
    password: password,
    district: district
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

                const res = await fetch("https://ecommerce-backend-yx51.onrender.com/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();

                console.log("Login Response:", data); 

                if (data.success) {

                    
                    localStorage.setItem("userId", data.userId);
                    if (data.success) {

                    localStorage.setItem("userId", data.userId);

    
                    localStorage.setItem("district", data.district);

                    alert("Login successfully");
                    loginForm.reset();

                    window.location.href = "home.html";
                }

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

const container = document.querySelector(".form-container");

if(container){   // 🔥 IMPORTANT CHECK

    words.forEach((word,i)=>{

        let rope=document.createElement("div");
        rope.className="hanging-rope";

        let board=document.createElement("div");
        board.className="hanging-word";
        board.innerText=word;

        rope.appendChild(board);

        rope.style.left=(20+(i*15))+"%";
        rope.style.animation=`swing${(i%3)+1} ${3+i*0.5}s ease-in-out infinite alternate`;

        container.appendChild(rope);

    });

}
