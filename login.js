/* ===== AUTH TOGGLE ===== */
const authWrapper = document.querySelector('.auth-wrapper');
const loginTrigger = document.querySelector('.login-trigger');
const registerTrigger = document.querySelector('.register-trigger');

if (registerTrigger && loginTrigger && authWrapper) {
    registerTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        authWrapper.classList.add('toggled');
    });

    loginTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        authWrapper.classList.remove('toggled');
    });
}

/* ===== LOGIN ===== */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        // demo admin
        if (username === "azhar" && password === "12345") {
            window.location.href = "./main.html";
            return;
        }

        // check registered users
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const validUser = users.find(
            user => user.username === username && user.password === password
        );

        if (validUser) {
            window.location.href = "./index.html";
        } else {
            alert("❌ Invalid username or password");
        }
    });
}

/* ===== REGISTER ===== */
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", () => {
        const username = document.getElementById("regUsername").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value.trim();

        if (!username || !email || !password) {
            alert("⚠️ Please fill all fields");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert("❌ Username already exists");
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("✅ Registration successful! Please login.");
        document.getElementById("registerForm").reset();
        authWrapper.classList.remove("toggled");
    });
}
