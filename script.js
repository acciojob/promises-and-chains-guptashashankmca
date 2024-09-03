document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    if (!name || isNaN(age)) {
        alert('Please fill out both fields.');
        return;
    }

    const ageCheckPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry, ${name}. You aren't old enough.`);
            }
        }, 4000); // Wait for 4 seconds
    });

    ageCheckPromise
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});

});