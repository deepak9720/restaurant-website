// Menu Data
const menuData = {
    food: [
      { name: "Margherita Pizza", price: "$10", image: "food_images/pizza.jpg" },
      { name: "Pasta Alfredo", price: "$12", image: "food_images/pasta.webp" },
      { name: "Caesar Salad", price: "$8", image: "food_images/salad.jpg" },
      { name: "Grilled Chicken", price: "$15", image: "chicken.jpg" },
    ],
    beverages: [
      { name: "Cappuccino", price: "$4", image: "food_images/cappucccino.jpg" },
      { name: "Orange Juice", price: "$3", image: "food_images/orange-juice.jpg" },
      { name: "Iced Tea", price: "$3.5", image: "iced-tea.jpg" },
      { name: "Lemonade", price: "$3", image: "lemonade.jpg" },
    ],
    desserts: [
      { name: "Chocolate Cake", price: "$5", image: "chocolate-cake.jpg" },
      { name: "Vanilla Ice Cream", price: "$3.5", image: "vanilla-ice-cream.jpg" },
      { name: "Cheesecake", price: "$6", image: "cheesecake.jpg" },
    ],
    beverages2: [
        { name: "Cappuccino", price: "$4", image: "cappuccino.avif" },
        { name: "Orange Juice", price: "$3", image: "orange-juice.jpg" },
        { name: "Iced Tea", price: "$3.5", image: "iced-tea.jpg" },
        { name: "Lemonade", price: "$3", image: "lemonade.jpg" },
      ],
      desserts2: [
        { name: "Chocolate Cake", price: "$5", image: "chocolate-cake.jpg" },
        { name: "Vanilla Ice Cream", price: "$3.5", image: "vanilla-ice-cream.jpg" },
        { name: "Cheesecake", price: "$6", image: "cheesecake.jpg" },
      ],
  };
  
  
  // Generate Menu Sections Dynamically
  function generateMenu(menuData) {
    const menuContainer = document.getElementById("menu-sections");
  
    Object.entries(menuData).forEach(([category, items]) => {
      // Create a column for each category
      const column = document.createElement("div");
      column.className = "menu-category";
  
      // Add category title
      const categoryTitle = document.createElement("h4");
      categoryTitle.textContent = capitalize(category);
      column.appendChild(categoryTitle);
  
      // Create a scrollable container for the category items
      const itemsContainer = document.createElement("div");
      itemsContainer.className = "items-container";
  
      // Add each menu item
      items.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
  
        menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="menu-image">
          <div class="menu-details">
            <h5>${item.name}</h5>
            <p>${item.price}</p>
          </div>
        `;
        itemsContainer.appendChild(menuItem);
      });
  
      column.appendChild(itemsContainer);
      menuContainer.appendChild(column);
    });
  }
  
  // Capitalize function
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  // Generate the menu
  generateMenu(menuData);
  