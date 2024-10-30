export default function loadContact() 
{
    const contactDiv = document.createElement('div');
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Email: info@restaurant.com';

    const phoneInfo = document.createElement('p');
    phoneInfo.textContent = 'Phone: (123) 456-7890';

    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactInfo);
    contactDiv.appendChild(phoneInfo); 

    return contactDiv;
}
