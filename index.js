const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');
const arrow5 = document.getElementById('arrow5');

const mapLink = document.getElementById('mapLink');
const storiesLink = document.getElementById('storiesLink');
const docLink = document.getElementById('docLink');
const participateLink = document.getElementById('participateLink');
const blogLink = document.getElementById('blogLink');

mapLink.addEventListener("mouseover", () => { 
    arrow1.style.visibility = 'visible';
})

mapLink.addEventListener("mouseout", () => { 
    arrow1.style.visibility = 'hidden';
})

storiesLink.addEventListener("mouseover", () => { 
    arrow2.style.visibility = 'visible';
})

storiesLink.addEventListener("mouseout", () => { 
    arrow2.style.visibility = 'hidden';
})

docLink.addEventListener("mouseover", () => { 
    arrow3.style.visibility = 'visible';
})

docLink.addEventListener("mouseout", () => { 
    arrow3.style.visibility = 'hidden';
})

participateLink.addEventListener("mouseover", () => { 
    arrow4.style.visibility = 'visible';
})

participateLink.addEventListener("mouseout", () => { 
    arrow4.style.visibility = 'hidden';
})

blogLink.addEventListener("mouseover", () => { 
    arrow5.style.visibility = 'visible';
})

blogLink.addEventListener("mouseout", () => { 
    arrow5.style.visibility = 'hidden';
})