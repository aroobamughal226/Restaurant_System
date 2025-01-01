// Food Search for Pakistani Dishes
document.getElementById('pakistani-search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('#pakistani-list li');
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Food Search for Chinese Dishes
document.getElementById('chinese-search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('#chinese-list li');
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// Reservation Form Submission
document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const successMessage = `Thank you, ${name}! Your table for ${guests} guests on ${date} at ${time} has been reserved.`;
    document.getElementById('reservation-success').textContent = successMessage;
    this.reset();
});
// Validate Signup Form
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Sign-up successful!');
        this.reset();
    }
});

// Validate Login Form
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        alert(`Welcome back, ${username}!`);
        this.reset();
    } else {
        alert('Please enter both username and password.');
    }
});
// Handle Review Form Submission
document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('review-name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();
    const rating = document.getElementById('review-rating').value;

    if (name && reviewText && rating) {
        // Create a new review element
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `
            <h4>${name}</h4>
            <p>${reviewText}</p>
            <p class="rating">Rating: ${rating}/5</p>
        `;

        // Append to the review list
        document.getElementById('reviews-display').appendChild(reviewItem);

        // Reset the form
        document.getElementById('review-form').reset();

        // Success message (optional)
        alert('Thank you for your review!');
    } else {
        alert('Please fill out all fields!');
    }
});
// Handle Reservation Form Submission
document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Validate form inputs
    if (name === '' || date === '' || time === '' || guests === '') {
        alert('successfully reserved a table.');
        return;
    }

    // Display success message
    const successMessage = `Thank you, ${name}! Your table for ${guests} guest(s) has been reserved on ${date} at ${time}.`;
    document.getElementById('reservation-success').textContent = successMessage;
    document.getElementById('reservation-success').style.color = 'green';

    // Reset the form
    this.reset();
});


