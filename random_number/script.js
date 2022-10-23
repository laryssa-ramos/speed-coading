const number = document.getElementById('number');
const generateBtn = document.getElementById('generateBtn');
const num = document.querySelector('.num');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor (Math.random() * 10 + 1);

    number.textContent = randomNumber;
    num.textContent = randomNumber;

}

generateBtn.addEventListener('click', randomNumberGenerator);

randomNumberGenerator();