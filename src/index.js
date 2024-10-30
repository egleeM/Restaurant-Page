import loadHomepage from './homepage.js'; 
import loadMenu from './menu.js'; 
import loadContact from './contact.js'; 
import './styles.css'; 


const contentDiv = document.getElementById('content');

loadHomepage(); 

function switchTab(tab) 
{
    contentDiv.innerHTML = ''; 

    if (tab === 'home') 
    {
        contentDiv.appendChild(loadHomepage()); 
    } 
    else if (tab === 'menu') 
    {
        contentDiv.appendChild(loadMenu()); 
    } 
    else if (tab === 'contact') 
    {
        contentDiv.appendChild(loadContact()); 
    }
}

document.getElementById('home').addEventListener('click', () => switchTab('home'));
document.getElementById('menu').addEventListener('click', () => switchTab('menu'));
document.getElementById('about').addEventListener('click', () => switchTab('contact'));
