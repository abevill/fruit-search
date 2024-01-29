
const searchInput = document.getElementById('searchInput');
const fruitList = document.getElementById('fruitList');


searchInput.addEventListener('input', searchFruits);

const fruits = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'guava',
    'jackfruit',
    'kiwi',
    'lemon',
    'mango',
    'nectarine',
    'orange',
    'peach',
    'pineapple',
    'plum',
    'pomegranate',
    'pineapple',
    'strawberry',
    'tangerine',
    'watermelon'
];


function searchFruits() {
    // Get the search query
    const query = searchInput.value.toLowerCase();

    
    const filteredFruits = fruits.filter(fruit => fruit.includes(query));

  
    fruitList.innerHTML = '';
    filteredFruits.forEach(fruit => {
        const fruitElement = document.createElement('li');
        fruitElement.textContent = fruit;
        fruitList.appendChild(fruitElement);
    });
}
