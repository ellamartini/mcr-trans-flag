const aboutDiv = document.getElementById('aboutDiv');
const btnText = document.getElementById('closeBtnText');
const expandBtn = document.getElementById('expandBtn');

btnText.addEventListener("click", () => {
    aboutDiv.style.visibility = 'hidden';
    btnText.style.visibility = 'hidden';
    expandBtn.style.visibility = 'visible';
})

expandBtn.addEventListener("click", () => {
    aboutDiv.style.visibility = 'visible';
    btnText.style.visibility = 'visible';
    expandBtn.style.visibility = 'hidden';
    expandBtn.style.animation = 'stop';
})
