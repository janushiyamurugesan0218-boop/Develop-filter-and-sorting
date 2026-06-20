document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Sample Inventory Dataset Array
    const productInventory = [
        { id: 1, name: "Wireless Headphones", category: "electronics", price: 89.99 },
        { id: 2, name: "Ergonomic Desk Chair", category: "furniture", price: 185.00 },
        { id: 3, name: "Cotton T-Shirt", category: "apparel", price: 24.50 },
        { id: 4, name: "Mechanical Keyboard", category: "electronics", price: 120.00 },
        { id: 5, name: "Minimalist Coffee Table", category: "furniture", price: 145.00 },
        { id: 6, name: "Winter Hooded Jacket", category: "apparel", price: 79.99 }
    ];

    // DOM layout pointer selections
    const categoryFilter = document.getElementById('category-filter');
    const priceSort = document.getElementById('price-sort');
    const catalogContainer = document.getElementById('catalog-container');
    const emptyViewNotice = document.getElementById('empty-view-notice');

    // 2. Core Processing Engine Function
    const updateCatalogDisplay = () => {
        // Clear old rendering layouts elements (retains notice block element)
        const oldCards = catalogContainer.querySelectorAll('.item-card');
        oldCards.forEach(card => card.remove());

        const activeCategory = categoryFilter.value;
        const activeSortDirection = priceSort.value;

        // Step A: Perform filtering sequence evaluation parameters
        let processedItemsList = productInventory.filter(product => {
            return activeCategory === 'all' || product.category === activeCategory;
        });

        // Step B: Perform sorting sequencing evaluations arrays mutations 
        if (activeSortDirection === 'low-high') {
            processedItemsList.sort((itemA, itemB) => itemA.price - itemB.price);
        } else if (activeSortDirection === 'high-low') {
            processedItemsList.sort((itemA, itemB) => itemB.price - itemA.price);
        }

        // Step C: Validate output checklist collection layout visibility limits
        if (processedItemsList.length === 0) {
            emptyViewNotice.style.display = 'block';
            return;
        } else {
            emptyViewNotice.style.display = 'none';
        }

        // Step D: Construct dynamic element cards nodes tree maps
        processedItemsList.forEach(item => {
            const cardNode = document.createElement('div');
            cardNode.classList.add('item-card');

            cardNode.innerHTML = `
                <span class="item-category">${item.category}</span>
                <div class="item-name">${item.name}</div>
                <div class="item-price">$${item.price.toFixed(2)}</div>
            `;
            catalogContainer.appendChild(cardNode);
        });
    };

    // 3. Bind Change Event Listeners to selection control drops
    categoryFilter.addEventListener('change', updateCatalogDisplay);
    priceSort.addEventListener('change', updateCatalogDisplay);

    // Initial load presentation call setup execution sequence loop maps complete
    updateCatalogDisplay();
});