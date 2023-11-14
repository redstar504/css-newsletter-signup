const form = document.getElementById('subscribe');
const emailAddress = document.getElementById('emailAddress');

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
});
