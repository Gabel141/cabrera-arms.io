var nav = document.getElementById("naviBar");
    if (nav.className != "navBarFlex") {
        nav.className = "navBarFlex"
    }

function navBarMenu() {
    if (nav.className === "navBarFlex") {
      nav.className += " responsive";
    } else {
      nav.className = "navBarFlex";
    }
}

let topButton = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleDisplay(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('hidden');
    }
}

function validateForm(isValid) {
    event.preventDefault();

    isValid = true;

    const nameInput = document.getElementById("fname");
    const nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name."
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please input your email addreses.";
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please input a VALID email address."
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    const messageInput = document.getElementById('subject');
    const messageError = document.getElementById('messageError');

    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please write your message here.";
        isValid = false;
    } else {
        messageError.textContent = "";
    }

    if (isValid) {
        const formMessage = document.getElementById("formMessage");
        formMessage.textContent = "Form submitted successfully!";

        setTimeout(() => {
            document.getElementById("contactform").reset();
            formMessage.textContent = "";
        }, 3000);

    }

    return false;

}