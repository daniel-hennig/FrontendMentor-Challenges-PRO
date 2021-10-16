// form-label toggle
const contactInput = document.querySelectorAll(".contact-text-input");
const contactLabel = document.querySelectorAll(".text-input-lb");
const contactAreaLabel = document.querySelector(".textarea-input-lb");

for(let i = 0; i < contactInput.length; i++) {
    contactInput[i].addEventListener("keyup", function(e) {
        console.log(this.value);

        if(this.value !== "") {
            if(!contactLabel[i].classList.contains("text-input-lb__styling") && !contactLabel[i].classList.contains("textarea-input-lb")) {
                contactLabel[i].classList.toggle("text-input-lb__styling");
            }

            if(!contactLabel[i].classList.contains("text-input-lb__styling") && contactLabel[i].classList.contains("textarea-input-lb")) {
                contactLabel[i].classList.toggle("text-input-lb__styling-textarea");
            }
        } else {
            if(contactLabel[i].classList.contains("text-input-lb__styling") && !contactLabel[i].classList.contains("textarea-input-lb")) {
                console.log("empty");
                contactLabel[i].classList.toggle("text-input-lb__styling");
            }
            if(contactLabel[i].classList.contains("text-input-lb__styling-textarea")) {
                console.log("empty");
                contactLabel[i].classList.toggle("text-input-lb__styling-textarea");
            }
        }
    });
}

// form email-validation
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
    const contactName = document.getElementById("contact-name");
    const contactEmail = document.getElementById("contact-email");
    const contactMessage = document.getElementById("contact-message");
    
    e.preventDefault();

    // email-validation regex
    function validateEmail(email) {
        const regex = /^(([^<>()äüöü\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regex.test(email);
    }    

    // show email-validation
    if(validateEmail(contactEmail.value) === true) {
            contactEmail.parentNode.classList.remove("invalidEmail");
            contactEmail.classList.remove("isEmptyBorder");
            contactLabel[1].classList.remove("isEmptyColor");  
    } else {
        contactEmail.parentNode.classList.add("invalidEmail");
        contactEmail.classList.add("isEmptyBorder");
        contactLabel[1].classList.add("isEmptyColor");  
    }

    
    function isEmptyMessage(name, email, message) {
        const requiredFields = [name, email, message];

        requiredFields.forEach(field => {
            for(let i = 0; i < contactLabel.length; i++) {
                if(field.value === "") {    
                    if(contactLabel[i].id === `label-${field.name}`) {
                        contactLabel[i].classList.add("isEmptyColor");
                        field.classList.add("isEmptyBorder");
                        field.parentNode.classList.add("errorText");
                    } 
                }
                else {
                    if(contactLabel[i].classList.contains("isEmptyColor") && field.classList.contains("isEmptyBorder")) {
                        field.classList.remove("isEmptyBorder");
                        contactLabel[i].classList.remove("isEmptyColor");
                        field.parentNode.classList.remove("errorText");
                    }
                }
            }
        });
    }

    isEmptyMessage(contactName, contactEmail, contactMessage);
});