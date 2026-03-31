document.addEventListener("DOMContentLoaded", function () {

    // ---------- SIGNUP ----------
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const district = document.getElementById("district").value;

            localStorage.setItem("district", district);

            try {
                const res = await fetch("https://ecommerce-backend-yx51.onrender.com/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password, district })
                });

                const data = await res.json();

                if (data.success) {
                    alert("Signup successfully");
                    signupForm.reset();
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

    // ---------- LOGIN ----------
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const res = await fetch("https://ecommerce-backend-yx51.onrender.com/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();
                console.log("Login Response:", data);

                if (data.success) {
                    localStorage.setItem("userId", data.userId);
                    localStorage.setItem("district", data.district);

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