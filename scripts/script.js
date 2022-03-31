let radioButtons = document.querySelectorAll('.rating');
let userRating;
let submitButton = document.getElementById('button');
submitButton.disabled = true;

// enable button if any of radio buttons active and save user rating
for (let rating of radioButtons) { 
    rating.onclick = () => { 
        submitButton.disabled = false;
        userRating = rating.textContent;
        console.log(rating.textContent);
        console.log(userRating);
    }
}

// go to thank-you page on submit
submitButton.onclick = () => { 
    let mainPage = document.querySelector('.card--main');
    let thankYouPage = document.querySelector('.card--thank');

    mainPage.style.display = 'none';
    thankYouPage.style.display = 'flex';

    let ratingMessage = document.getElementById('user-rating');
    ratingMessage.innerHTML = "You selected " + userRating + " out of 5";
}