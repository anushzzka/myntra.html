const brandsData = [
    { id: 1, image: '1img.jpeg', name: 'Puma', offer: 'Up to 50% Off' },
    { id: 2, image: '2img.jpeg', name: 'Nike', offer: 'Min 40% Off' },
    { id: 3, image: '3img.jpeg', name: 'Adidas', offer: 'Latest Collection' },
    { id: 4, image: '4img.jpeg', name: 'H&M', offer: 'Up to 60% Off' },
    { id: 5, image: '5img.jpeg', name: 'Zara', offer: 'Trending Now' },
    { id: 6, image: '6img.jpeg', name: 'Levis', offer: 'Flat 40% Off' },
    { id: 7, image: '7img.jpeg', name: 'Mango', offer: 'Up to 50% Off' },
    { id: 8, image: '8img.jpeg', name: 'Biba', offer: 'Min 50% Off' },
    { id: 9, image: '9img.jpeg', name: 'FabIndia', offer: 'Flat 30% Off' },
    { id: 10, image: '10img.jpeg', name: 'U.S. Polo Assn.', offer: 'Up to 40% Off' },
    { id: 11, image: '11img.jpeg', name: 'Tommy Hilfiger', offer: 'New Arrivals' },
    { id: 12, image: '12img.jpeg', name: 'Roadster', offer: 'Up to 70% Off' },
    { id: 13, image: '13img.jpeg', name: 'W', offer: 'Min 40% Off' },
    { id: 14, image: '14img.jpeg', name: 'Vero Moda', offer: 'Flat 50% Off' }
];

const categoriesData = [
    { id: 15, image: '15img.jpeg', name: 'Beauty', offer: 'Up to 30% Off', link: 'https://www.myntra.com/personal-care' },
    { id: 16, image: '16img.jpeg', name: 'Handbags', offer: 'Min 40% Off', link: 'https://www.myntra.com/accessories?f=Categories%3AHandbags' },
    { id: 17, image: '17img.jpeg', name: 'Jeans', offer: 'Up to 50% Off', link: 'https://www.myntra.com/clothing?f=Categories%3AJeans' },
    { id: 18, image: '18img.jpeg', name: 'Home Decor', offer: 'Min 50% Off', link: 'https://www.myntra.com/home-furnishing' },
    { id: 19, image: '19img.jpeg', name: 'Handbags', offer: 'Min 40% Off', link: 'https://www.myntra.com/accessories?f=Categories%3AHandbags' },
    { id: 20, image: '20img.jpeg', name: 'Home Decor', offer: 'Min 50% Off', link: 'https://www.myntra.com/home-furnishing' },
    { id: 21, image: '21img.jpeg', name: 'Footwear', offer: 'Under ₹699', link: 'https://www.myntra.com/footwear?src=bc' },
    { id: 22, image: '22img.jpeg', name: 'Perfume', offer: 'Up to 70% Off', link: 'https://www.myntra.com/personal-care?f=Categories%3APerfume' },
    { id: 23, image: '23img.jpeg', name: 'Women skirts', offer: 'Under ₹999', link: 'https://www.myntra.com/skirts-palazzos' },
    { id: 24, image: '24img.jpeg', name: 'Kidswear', offer: 'Starting ₹299', link: 'https://www.myntra.com/shop/kids' },
    { id: 25, image: '25img.jpeg', name: 'Kurtas', offer: 'Min 50% Off', link: 'https://www.myntra.com/women-ethnic-wear' },
    { id: 26, image: '26img.jpeg', name: 'mobile accessories', offer: 'Up to 15% Off', link: 'https://www.myntra.com/gadgets' },
    { id: 27, image: '27img.jpeg', name: 'Home appliances', offer: 'Up to 15% Off', link: 'https://www.myntra.com/shop/home-living' },
    { id: 28, image: '28img.jpeg', name: 'Dresses', offer: 'Starting ₹399', link: 'https://www.myntra.com/dresses?f=Gender%3Amen%20women%2Cwomen' }
];

let bagCount = 0;

function renderItems(dataArray, containerId) {
    const container = document.getElementById(containerId);
    let innerHTML = '';

    dataArray.forEach(item => {
        // If a link is provided, wrap the image and title in an <a> tag
        const imageAndTitleHtml = item.link ?
            `<a href="${item.link}" target="_blank" style="text-decoration:none; color:inherit;">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
            </a>` :
            `<img src="${item.image}" alt="${item.name}">
             <p>${item.name}</p>`;

        innerHTML += `
            <div class="scroll_item">
                ${imageAndTitleHtml}
                <div class="item-offer">${item.offer}</div>
                <button class="add-to-bag-btn" onclick="addToBag()">Add to Bag</button>
            </div>
        `;
    });

    container.innerHTML = innerHTML;
}

function addToBag() {
    bagCount++;
    document.getElementById('bag-count').innerText = bagCount;
    // Optional: Add a small animation to the bag icon to show something was added
    const bagIcon = document.querySelector('.action_name');
    bagIcon.style.color = '#ff3f6c';
    bagIcon.style.fontWeight = 'bold';
    setTimeout(() => {
        bagIcon.style.color = '';
        bagIcon.style.fontWeight = '';
    }, 300);
}

// Initialize the page once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderItems(brandsData, 'brands-container');
    renderItems(categoriesData, 'categories-container');
});
