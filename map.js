const aboutDiv = document.getElementById('aboutDiv');
const btnText = document.getElementById('btnText');
const aboutBtn = document.getElementById('aboutBtn');

btnText.addEventListener("click", () => {
    aboutDiv.style.visibility = 'hidden';
    btnText.style.visibility = 'hidden';
    aboutBtn.style.visibility = 'visible';
})

aboutBtn.addEventListener("click", () => {
    aboutDiv.style.visibility = 'visible';
    btnText.style.visibility = 'visible';
    aboutBtn.style.visibility = 'hidden';
})
