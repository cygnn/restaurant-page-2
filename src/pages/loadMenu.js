import img1 from '../imgs/adobo.jpg';
import img2 from '../imgs/lechon.jpeg';
import img3 from '../imgs/scallops.jpg';
import img4 from '../imgs/shrimp.jpeg';
import img5 from '../imgs/squid.jpg';
import img6 from '../imgs/sisig.jpg';

export function loadMenu(){
    const content = document.querySelector('#content')
    while (content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('title');
    menuTitle.textContent = 'Food Menu';
    heroContent.appendChild(menuTitle);
    menuContent.appendChild(heroContent);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menuSub = document.createElement('h2');
    menuSub.classList.add('menu-subtitle');
    menuSub.textContent = 'Best Selling';
    menu.appendChild(menuSub);

    const mainmenu = document.createElement('div');
    mainmenu.classList.add('main-menu');
    
    let menuItems = [
        {
            name: "Adobong Baboy",
            img: img1,
            price: "P150"
        },
        {
            name: "Lechon Belly",
            img: img2,
            price: "P500"
        },
        {
            name: "Scallops",
            img: img3,
            price: "P250"
        },
        {
            name: "Deviled Shrimp",
            img: img4,
            price: "P300"
        },
        {
            name: "Grilled Squid",
            img: img5,
            price: "250"
        },
        {
            name: "Sizzling Pork Sisig",
            img: img6,
            price: "P150"
        }
    ]

    menuItems.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const img = document.createElement('img');
        img.src = item.img;
        img.classList.add('menu-image');
        
        const menudetailsDiv = document.createElement('div');
        menudetailsDiv.classList.add('menu-div');

        const menuDetails = document.createElement('h5');
        menuDetails.classList.add('menu-details');

        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;

        const menuDesc = document.createElement('p');
        menuDesc.classList.add('menu-desc');
        menuDesc.textContent = 'Ipsum ipsum clita erat amet dolor justo diam';
        
        menuDetails.appendChild(itemName);
        menuDetails.appendChild(itemPrice);

        menudetailsDiv.appendChild(menuDetails);
        menudetailsDiv.appendChild(menuDesc);
        
        menuCard.appendChild(img);
        menuCard.appendChild(menudetailsDiv);
        mainmenu.appendChild(menuCard);
    });
    menu.appendChild(mainmenu);
    menuContent.appendChild(menu);
    content.appendChild(menuContent);
}