const dismissBanner  = (source) => {
    $(source.closest(".ad-banner")).fadeOut(); 
}

const timedBanner = () => {
   $(".ad-banner").fadeOut(); 
}

const timeUntilDismiss = 30 * 1000; // time = secs * 1000
let timeRemain = timeUntilDismiss / 1000 - 1;

const countDown = () => {
    const adCountdownText = document.querySelector('span.ad-timer');
    adCountdownText.innerHTML = '('+ timeRemain + ')';
    timeRemain= timeRemain - 1;
}

window.onload = () => {
    setInterval(countDown, 1000);
    setTimeout(timedBanner, timeUntilDismiss);
}