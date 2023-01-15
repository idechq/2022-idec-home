(function() {
            // https://dashboard.emailjs.com/admin/integration
            emailjs.init('user_uWUDhVJ1AvKnjoP1OzqYJ');
        })();

window.onload = function() {
            document.getElementById('fcf-form-id').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('service_myeauaj', 'template_jrx7rad', this)
                    .then(function() {
                        console.log('SUCCESS!');
                        alert("Feedback Sent!");
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert("Failure to send feedback! \nPlease send email to support@idechq.org");
                    });
            });
        }