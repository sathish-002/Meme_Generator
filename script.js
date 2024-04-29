const memegeneratorbtn = document.querySelector('.meme-generator .meme-generator-btn');
const memeimage = document.querySelector('.meme-generator img');
const memetitle = document.querySelector('.meme-generator .meme-title');
const memeauthor = document.querySelector('.meme-generator .meme-author');

const updateDetails = (url, title, author) =>{
    memeimage.setAttribute("src",url);
    memetitle.innerHTML = title;
    memeauthor.innerHTML = `Meme By: ${author}`;
};

const generatormeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=> response.json())
    .then((data)=>{ updateDetails(data.url, data.title, data.author)
    });
}
memegeneratorbtn.addEventListener('click',generatormeme);