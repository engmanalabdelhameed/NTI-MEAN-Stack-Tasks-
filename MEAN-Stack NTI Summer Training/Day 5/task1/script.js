var products = [
  { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

var nextId = 5;

function printProducts(list) {
  if (!list || list.length === 0) {
    console.log("No products to display.");
    return;
  }
  console.table(list);
}

function createProduct(name, price, category, quantity) {
  if (typeof name === "string") {
    var isDuplicate = products.some(function (p) {
      return p.name.trim().toLowerCase() === name.trim().toLowerCase();
    });
    if (isDuplicate) {
      console.log("Error: Product name already exists");
      return "Error: Product name already exists";
    }
  }

  var cleanName = typeof name === "string" ? name.trim() : "";
  var cleanCategory = typeof category === "string" ? category.trim() : "";
  var numPrice = Number(price);
  var numQuantity = Number(quantity);

  if (!cleanName) {
    console.log("Error: Name is required");
    return "Error: Name is required";
  }
  if (isNaN(numPrice) || numPrice <= 0) {
    console.log("Error: Price must be a number greater than 0");
    return "Error: Price must be a number greater than 0";
  }
  if (isNaN(numQuantity) || numQuantity < 0 || !Number.isInteger(numQuantity)) {
    console.log("Error: Quantity must be an integer >= 0");
    return "Error: Quantity must be an integer >= 0";
  }

  var newProduct = {
    id: nextId++,
    name: cleanName,
    price: numPrice,
    category: cleanCategory,
    quantity: numQuantity
  };

  products.push(newProduct);
  return newProduct;
}

function getAllProducts() {
  return products;
}

function printProducts(list) {
  if (!list || list.length === 0) {
    console.log("No products found.");
  } else {
    console.table(list);
  }
}

function getProductById(id) {
  var found = products.find(function (p) {
    return p.id === Number(id);
  });
  return found ? found : null;
}

function updateProduct(id, name, price, category, quantity) {
  var index = products.findIndex(function (p) {
    return p.id === Number(id);
  });

  if (index === -1) {
    console.log("Error: Product not found");
    return "Error: Product not found";
  }

  var currentProduct = products[index];

  if (name !== null && name !== undefined && name.toString().trim() !== "") {
    currentProduct.name = name.toString().trim();
  }
  if (price !== null && price !== undefined && price !== "") {
    var parsedPrice = Number(price);
    if (!isNaN(parsedPrice) && parsedPrice > 0) {
      currentProduct.price = parsedPrice;
    }
  }
  if (category !== null && category !== undefined && category.toString().trim() !== "") {
    currentProduct.category = category.toString().trim();
  }
  if (quantity !== null && quantity !== undefined && quantity !== "") {
    var parsedQuantity = Number(quantity);
    if (!isNaN(parsedQuantity) && parsedQuantity >= 0 && Number.isInteger(parsedQuantity)) {
      currentProduct.quantity = parsedQuantity;
    }
  }

  return currentProduct;
}

function deleteProduct(id) {
  var index = products.findIndex(function (p) {
    return p.id === Number(id);
  });

  if (index === -1) {
    console.log("Error: Product not found");
    return "Error: Product not found";
  }

  var isConfirmed = confirm("Are you sure you want to delete product ID: " + id + "?");
  if (isConfirmed) {
    var deletedArray = products.splice(index, 1);
    return deletedArray[0];
  } else {
    console.log("Delete canceled");
    return null;
  }
}

function filterProducts(keyword) {
  var search = typeof keyword === "string" ? keyword.trim().toLowerCase() : "";
  var filtered = products.filter(function (p) {
    return (
      p.name.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search)
    );
  });
  return filtered;
}

function sortByPrice(order) {
  if (order === undefined) order = "asc";
  return products.toSorted(function (a, b) {
    return order === "desc" ? b.price - a.price : a.price - b.price;
  });
}

function getStoreStats() {
  var stats = products.reduce(
    function (acc, p) {
      acc.totalProducts += 1;
      acc.totalInventoryValue += p.price * p.quantity;
      if (p.quantity === 0) {
        acc.outOfStockCount += 1;
      }
      return acc;
    },
    { totalProducts: 0, totalInventoryValue: 0, outOfStockCount: 0 }
  );

  var avgPrice = stats.totalProducts > 0 ? stats.totalInventoryValue / stats.totalProducts : 0;

  return {
    totalProducts: stats.totalProducts,
    totalInventoryValue: stats.totalInventoryValue.toFixed(2),
    averagePrice: avgPrice.toFixed(2),
    outOfStockCount: stats.outOfStockCount
  };
}

function groupByCategory() {
  return products.reduce(function (acc, p) {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

function filterByPriceRange(min, max) {
  if (min === undefined) min = 0;
  if (max === undefined) max = Infinity;

  return products.filter(function (p) {
    return p.price >= min && p.price <= max;
  });
}

const getOutOfStock = (list) => list.filter((p) => p.quantity === 0);

function withAfterAction(fn, callback) {
  var result = fn();
  if (typeof callback === "function") {
    callback();
  }
  return result;
}

function addMany(...items) {
  var addedItems = [];
  for (var item of items) {
    var created = createProduct(item.name, item.price, item.category, item.quantity);
    if (typeof created === "object") {
      addedItems.push(created);
    }
  }
  return addedItems;
}

function startApp() {
  var running = true;

  while (running) {
    var menu =
      "NTI Mini Store\n" +
      "1) Add product\n" +
      "2) Show all products\n" +
      "3) Show product by ID\n" +
      "4) Update product\n" +
      "5) Delete product\n" +
      "6) Search / Filter\n" +
      "0) Exit\n\n" +
      "Enter option number:";

    var choice = prompt(menu);

    if (choice === null || choice.trim() === "0") {
      alert("Exiting application. Goodbye!");
      running = false;
      break;
    }

    switch (choice.trim()) {
      case "1": {
        var name = prompt("Enter product name:");
        var price = prompt("Enter product price:");
        var category = prompt("Enter product category:");
        var quantity = prompt("Enter product quantity:");
        var newProd = createProduct(name, price, category, quantity);
        if (typeof newProd === "object") {
          alert("Product added successfully!");
          printProducts([newProd]);
        } else {
          alert(newProd);
        }
        break;
      }

      case "2": {
        var all = getAllProducts();
        printProducts(all);
        break;
      }

      case "3": {
        var searchId = prompt("Enter Product ID:");
        var prod = getProductById(searchId);
        if (prod) {
          printProducts([prod]);
        } else {
          alert("Product not found!");
        }
        break;
      }

      case "4": {
        var uId = prompt("Enter Product ID to update:");
        var existing = getProductById(uId);
        if (!existing) {
          alert("Product not found!");
          break;
        }
        var uName = prompt("Enter new name (leave empty to keep current):", existing.name);
        var uPrice = prompt("Enter new price (leave empty to keep current):", existing.price);
        var uCat = prompt("Enter new category (leave empty to keep current):", existing.category);
        var uQty = prompt("Enter new quantity (leave empty to keep current):", existing.quantity);

        var updated = updateProduct(uId, uName, uPrice, uCat, uQty);
        alert("Product updated!");
        printProducts([updated]);
        break;
      }

      case "5": {
        var dId = prompt("Enter Product ID to delete:");
        var deleted = deleteProduct(dId);
        if (deleted && typeof deleted === "object") {
          alert("Product deleted successfully!");
          printProducts([deleted]);
        }
        break;
      }

      case "6": {
        var kw = prompt("Enter search keyword (name or category):");
        var results = filterProducts(kw);
        printProducts(results);
        break;
      }

      default:
        alert("Invalid option! Please enter a number from 0 to 6.");
        break;
    }
  }
}

var store = (function () {
  return {
    create: createProduct,
    getAll: getAllProducts,
    getById: getProductById,
    update: updateProduct,
    remove: deleteProduct,
    filter: filterProducts,
    getStats: getStoreStats,
    groupByCat: groupByCategory,
    start: startApp
  };
})();