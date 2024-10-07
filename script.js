const captcha = document.getElementById("captcha");
const captchaInput = document.getElementById("captcha-input");

const verifyButton = document.getElementById("verify");

//Defining generateCaptcha function

function generateCaptcha(){
    const ctx = captcha.getContext('2d');
    captcha.width = 150;
    captcha.height = 50;

    ctx.fillStyle ='#f0f0f0';
    ctx.fillRect (0,0,captcha.width,captcha.height);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let captchaValue = '';

    for (let i=0; i<6; i++){
        const randomIndex = Math.floor(Math.random()*characters.length);

        captchaValue += characters.charAt(randomIndex);
    }

    ctx.font = '24px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText(captchaValue, 10,30);

    return captchaValue;

}

// Fetching current captcha text
let currentCaptcha = generateCaptcha();

//verifying captcha

verifyButton.addEventListener('click', function(){
    const inputText = captchaInput.value.trim();

    if (inputText === currentCaptcha){
        alert('Captcha Verified!');
        result.textContent = 'Captcha Verified Successfully';
        currentCaptcha = generateCaptcha();
        
    } else {
        alert('Captcha entered is incorrect! Try again');
        result.textContent = 'Incorrect Captcha';
        currentCaptcha = generateCaptcha();
        
    }

    
});










