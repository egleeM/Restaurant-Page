export default function loadMenu() {
    const menuDiv = document.createElement('div');
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';

    const menuItems = [
        'Pancakes - $5.99',
        'Burger - $8.99',
        'Pizza - $10.99',
        'Salad - $6.99',
        'Dessert - $4.99'
    ];

    menuDiv.appendChild(menuTitle);

    const ul = document.createElement('ul');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    menuDiv.appendChild(ul);
    return menuDiv;
}