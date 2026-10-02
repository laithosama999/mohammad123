document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const text = document.getElementById("message").value.trim();

            if (name === "" || text === "") {

                message.textContent = "يرجى كتابة الاسم والرسالة";

                setTimeout(function () {
                    message.textContent = "";
                }, 2000);

                return;
            }

            message.textContent = "تم إرسال رسالتك بنجاح";

            form.reset();

            setTimeout(function () {
                message.textContent = "";
            }, 2000);

        });

    }

});