const savedEmail = sessionStorage.getItem('email');
if (savedEmail) {
    const savedEmailDisplay = document.getElementById('savedEmail');
    console.log(savedEmailDisplay);
    savedEmailDisplay.textContent = savedEmail;
    sessionStorage.clear();
}

const form = document.getElementById('subscribe');
const emailAddress = document.getElementById('emailAddress');


if (form) {
    form.addEventListener('submit', (e) => {
        let isValid = true;

        if (!emailAddress.value) {
            isValid = false;
        }

        if (null === emailAddress.value.match(/.+@.+\..+/g)) {
            isValid = false;
        }

        if (false === isValid) {
            form.classList.add('invalid');
            e.preventDefault();
        }

        sessionStorage.setItem("email", emailAddress.value);
    });
}
