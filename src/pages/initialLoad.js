import logoImg from '../imgs/logo.png';
import { loadAbout } from './loadAbout';
import { loadHome } from './loadHome';
import { loadMenu } from './loadMenu';
export default function initialLoad(){
    const header = document.querySelector('header');
    const nav = document.createElement('nav');
    const brand = document.createElement('div');
    brand.classList.add('brand');

    const logo = document.createElement('img');
    logo.classList.add('logo-img');
    logo.src = logoImg;

    const brandName = document.createElement('h2');
    brandName.textContent = 'Pearl Grill';

    brand.appendChild(logo);
    brand.appendChild(brandName);

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');

    const home = document.createElement('button');
    home.textContent= 'Home';
    home.classList.add('home');

    const menu = document.createElement('button');
    menu.textContent='Menu';
    menu.classList.add('menu');

    const about = document.createElement('button');
    about.textContent='About';
    about.classList.add('about');

    buttonDiv.appendChild(home);
    buttonDiv.appendChild(menu);
    buttonDiv.appendChild(about);

    nav.appendChild(brand);
    nav.appendChild(buttonDiv);
    header.appendChild(nav);

    //EVENT LISTENERS;
    home.addEventListener('click', loadHome);
    menu.addEventListener('click', loadMenu);
    about.addEventListener('click', loadAbout);
    loadHome();

    const footer = document.createElement('footer');
    const div1 = document.createElement('div');
    div1.classList.add('footer-content')
    const div2 = document.createElement('div');
    div2.classList.add('footer-content')
    const div3 = document.createElement('div');
    div3.classList.add('footer-content')

    const footerCompany = document.createElement('h4')
    footerCompany.classList.add('footer-title');
    footerCompany.textContent = 'Company';

    const listItems = ['About Us', 'Contact Us', 'Reservation', 'Privacy', 'Terms and Conditions'];
    const ul = document.createElement('ul');
    for(let i = 0; i < listItems.length; i++){
        const item = document.createElement('li');
        item.textContent = listItems[i];
        ul.appendChild(item);
    }
    div1.appendChild(footerCompany);
    div1.appendChild(ul);

    const footerContact = document.createElement('h4');
    footerContact.classList.add('footer-title');
    footerContact.textContent = 'Contact Us';
    div2.appendChild(footerContact);

    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = '123 Street, City, Country';
    div2.appendChild(address)

    const num = document.createElement('p');
    num.classList.add('contact-no');
    num.textContent = '+123 456 789';
    div2.appendChild(num)

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'random@email.com';
    div2.appendChild(email)

    const icons = document.createElement('div');
    icons.classList.add('icons');

    const opening = document.createElement('h4')
    opening.classList.add('footer-title');
    opening.textContent = 'Opening';
    div3.appendChild(opening);

    const date1 = document.createElement('h5');
    date1.classList.add('sub-title');
    date1.textContent = 'Monday - Saturday';
    div3.appendChild(date1);

    const time1 = document.createElement('p');
    time1.classList.add('time');
    time1.textContent = '9AM - 9PM';
    div3.appendChild(time1);

    const date2 = document.createElement('h5');
    date2.classList.add('sub-title');
    date2.textContent = 'Sunday';
    div3.appendChild(date2);

    const time2 = document.createElement('p');
    time2.classList.add('time');
    time2.textContent = '10AM - 10PM';
    div3.appendChild(time2);
    

    footer.appendChild(div1);
    footer.appendChild(div2);
    footer.appendChild(div3);
    const body = document.querySelector('body');
    body.appendChild(footer);


    
}