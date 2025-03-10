import homeImg from '../imgs/home-img.png'
export function loadHome(){
    const content = document.querySelector('#content')
    while (content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const leftside = document.createElement('div');
    leftside.classList.add('left-side');

    const leftsideTitle = document.createElement('h1');
    leftsideTitle.textContent = 'Eat with us'
    leftsideTitle.classList.add('title');

    const leftsideDesc = document.createElement('p');
    leftsideDesc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices, diam ac tincidunt aliquam, mi nisi suscipit nisi, egestas imperdiet felis lectus ac elit. Quisque.';
    leftsideDesc.classList.add('desc');

    const contentBtn = document.createElement('button');
    contentBtn.textContent = 'PLACE A RESERVATION'
    contentBtn.classList.add('content-button');

    leftside.appendChild(leftsideTitle);
    leftside.appendChild(leftsideDesc);
    leftside.appendChild(contentBtn);

    const rightside = document.createElement('div');
    rightside.classList.add('right-side');

    const img = document.createElement('img');
    img.src  = homeImg;

    rightside.appendChild(img);

    heroContent.appendChild(leftside);
    heroContent.appendChild(rightside);

    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.appendChild(heroContent);
    content.appendChild(homeContent);
}