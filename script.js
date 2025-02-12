

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('start');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('start');
    })
}


// contact page
function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    const serviceID = "service_8s3e0w5";
    const templateID = "template_ha8v6rl";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message sent successfully");
            })
        .catch((err) => console.log(err));
}

