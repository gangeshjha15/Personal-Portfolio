// opentab function

let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');
let ele = document.getElementsByClassName('tab-titles');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }

    ele[0].addEventListener('click', (event) => {
        event.target.classList.add('active-link');
    });
    //deprecated
    // event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// open menu and close menu

let sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


// form submition code

const scriptURL = 'https://script.google.com/macros/s/AKfycbwIRphCrvz-a8UNnzpnwwBVNXbFerfTGxmoLv5j1JJdu2ooJR0MiEipVgPAKBE8z3o/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent Successfully!"
        setTimeout(()=>{
            msg.innerHTML = ""
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


// Auto Text Efect Animation

let elem = document.getElementsByClassName('header-text');
let e = elem[0].lastElementChild.lastChild;

const careers = ["Web Developer", "MERN Developer", "YouTuber", "Freelancer"];
let cIndex = 0;
let charIndex = 0;
updateText();
function updateText(){
    charIndex++;
    e.innerHTML = careers[cIndex].slice(0, charIndex);
    setTimeout(updateText, 400);
    if(charIndex === careers[cIndex].length){
        cIndex++;
        charIndex=0;
    }
    if(cIndex === careers.length)
        cIndex=0;
}

  
