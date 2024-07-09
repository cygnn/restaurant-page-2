import img1 from '../imgs/resto.jpg';
export function loadAbout(){
    const content = document.querySelector('#content')
    while (content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }

    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about-content');

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const heroContentText = document.createElement('h1');
    heroContentText.classList.add('title');
    heroContentText.textContent = 'About Us';

    heroContent.appendChild(heroContentText);

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-div');

    const img = document.createElement('img');
    img.src = img1;
    img.classList.add('about-img');
    imgDiv.appendChild(img);
    mainContent.appendChild(imgDiv);

    const textContent = document.createElement('div');
    textContent.classList.add('text-content');

    const aboutTitle = document.createElement('h5');
    aboutTitle.classList.add('section-title');
    aboutTitle.textContent = 'About Us'

    const welcome = document.createElement('h1');
    welcome.classList.add('welcome');
    welcome.textContent = 'Welcome to Pearl Grill';

    const subtext1 = document.createElement('p');
    subtext1.classList.add('subtext');
    subtext1.textContent = 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.'

    const subtext2 = document.createElement('p');
    subtext2.classList.add('subtext');
    subtext2.textContent = 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet'

    const subtext3 = document.createElement('p');
    subtext3.classList.add('subtext');
    subtext3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at velit ipsum. Sed at neque placerat, varius felis ut, posuere risus. Aliquam ut tellus sit amet justo pretium molestie. Nulla in ipsum sodales, ultricies magna a, fermentum massa. In tempor.'

    const btn = document.createElement('button');
    btn.classList.add('read-more');
    btn.textContent = 'READ MORE';

    textContent.appendChild(aboutTitle)
    textContent.appendChild(welcome)
    textContent.appendChild(subtext1)
    textContent.appendChild(subtext2)
    textContent.appendChild(subtext3)
    textContent.appendChild(btn)

    mainContent.appendChild(textContent);

    aboutContent.appendChild(heroContent);
    aboutContent.appendChild(mainContent);

    content.appendChild(aboutContent);

}