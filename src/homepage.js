import pancakesImage from './images/food.jpeg';

export default function loadHomepage() 
{
    const contentDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';

    const image = document.createElement('img');
    image.src = pancakesImage; 
    image.alt = 'Delicious Food';
    image.style.width = '300px'; 

    const description = document.createElement('p');
    description.textContent = 'We serve the best food in town, made with love and fresh ingredients. Come visit us for an unforgettable dining experience!';


    contentDiv.appendChild(headline);
    contentDiv.appendChild(image);
    contentDiv.appendChild(description);
    
    return contentDiv; 
}
