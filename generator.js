const fs = require('fs');
const path = require('path');

// Master List of 58 Projects with Complete Domain Specs
const projects = [
  {
    id: 1,
    folder: '01-ecommerce-platform',
    name: 'Modern E-Commerce Platform',
    category: 'E-Commerce & Retail',
    description: 'Full-featured online store with product browsing, category filters, cart, multi-step checkout, order history, shipment tracking, and merchant inventory management.',
    entityName: 'Product',
    entitiesName: 'products',
    initialData: [
      { id: '1', name: 'Ergonomic Mechanical Keyboard', category: 'Electronics', price: 129.99, stock: 45, rating: 4.8, description: 'Wireless RGB mechanical keyboard with hot-swappable switches and 40-hour battery life.', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80', status: 'In Stock' },
      { id: '2', name: 'Noise-Canceling Wireless Headphones', category: 'Electronics', price: 249.50, stock: 28, rating: 4.9, description: 'Active noise cancellation with 30-hour battery, premium memory foam ear cushions.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', status: 'In Stock' },
      { id: '3', name: 'Ultra-Wide Curved Gaming Monitor 34"', category: 'Electronics', price: 499.00, stock: 12, rating: 4.7, description: '144Hz refresh rate, 1ms response time, HDR400 immersive curved display.', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80', status: 'Low Stock' },
      { id: '4', name: 'Handcrafted Full-Grain Leather Backpack', category: 'Fashion', price: 179.00, stock: 35, rating: 4.6, description: 'Vegetable-tanned leather with 15-inch laptop compartment and weather-resistant lining.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', status: 'In Stock' },
      { id: '5', name: 'Minimalist Titanium Automatic Watch', category: 'Accessories', price: 320.00, stock: 18, rating: 4.9, description: 'Sapphire crystal glass, Japanese automatic movement, 50m water resistance.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', status: 'In Stock' },
      { id: '6', name: 'Organic Cold-Pressed Olive Oil (1L)', category: 'Grocery', price: 24.99, stock: 80, rating: 4.8, description: 'Single-estate extra virgin olive oil from Mediterranean groves.', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80', status: 'In Stock' }
    ],
    extraEntities: {
      orders: [
        { id: 'ORD-9021', customer: 'Alex Johnson', date: '2026-09-18', total: 379.49, status: 'Shipped', trackingNumber: 'TRK-9821034', items: ['Ergonomic Mechanical Keyboard', 'Noise-Canceling Wireless Headphones'] },
        { id: 'ORD-9022', customer: 'Maria Garcia', date: '2026-09-20', total: 499.00, status: 'Processing', trackingNumber: 'TRK-9821035', items: ['Ultra-Wide Curved Gaming Monitor 34"'] }
      ]
    },
    fields: [
      { key: 'name', label: 'Product Name', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'select', options: ['Electronics', 'Fashion', 'Accessories', 'Grocery', 'Home'], required: true },
      { key: 'price', label: 'Price ($)', type: 'number', required: true },
      { key: 'stock', label: 'Stock Quantity', type: 'number', required: true },
      { key: 'rating', label: 'Rating (1-5)', type: 'number', required: true },
      { key: 'status', label: 'Inventory Status', type: 'select', options: ['In Stock', 'Low Stock', 'Out of Stock'], required: true },
      { key: 'description', label: 'Description', type: 'textarea', required: true }
    ],
    statCards: [
      { label: 'Total Catalog Products', value: '6 Items', icon: 'fa-box', color: 'blue' },
      { label: 'Active Orders', value: '2 Pending/Shipped', icon: 'fa-truck-fast', color: 'amber' },
      { label: 'Total Gross Revenue', value: '$878.49', icon: 'fa-dollar-sign', color: 'emerald' },
      { label: 'Avg Customer Rating', value: '4.8 ★', icon: 'fa-star', color: 'purple' }
    ]
  },
  {
    id: 2,
    folder: '02-food-delivery-system',
    name: 'BistroExpress Online Food Delivery',
    category: 'Food & Beverage',
    description: 'On-demand food delivery connecting foodies, local restaurants, and delivery drivers with live order tracking and menu customization.',
    entityName: 'Restaurant & Menu Item',
    entitiesName: 'restaurants',
    initialData: [
      { id: '1', name: 'Bella Italia Trattoria', cuisine: 'Italian', rating: 4.9, deliveryTime: '25-35 min', minOrder: 15.00, status: 'Open', featuredItem: 'Woodfired Truffle Pizza ($18.50)', address: '45 Roman Way, Downtown' },
      { id: '2', name: 'Tokyo Ramen House', cuisine: 'Japanese', rating: 4.8, deliveryTime: '20-30 min', minOrder: 12.00, status: 'Open', featuredItem: 'Tonkotsu Chashu Ramen ($14.99)', address: '12 Sakura Ave, Uptown' },
      { id: '3', name: 'Spice Boulevard Bistro', cuisine: 'Indian', rating: 4.7, deliveryTime: '30-45 min', minOrder: 20.00, status: 'Open', featuredItem: 'Butter Chicken & Garlic Naan ($16.99)', address: '88 Masala Road, Midtown' },
      { id: '4', name: 'Green Garden Bowl Co.', cuisine: 'Healthy / Vegan', rating: 4.9, deliveryTime: '15-25 min', minOrder: 10.00, status: 'Open', featuredItem: 'Avocado Quinoa Power Bowl ($13.50)', address: '102 Eco Plaza, Westside' },
      { id: '5', name: 'The Burger Forge', cuisine: 'American', rating: 4.6, deliveryTime: '25-40 min', minOrder: 14.00, status: 'Busy', featuredItem: 'Smoked Bacon Double Smash ($15.00)', address: '77 Grill Street, South' }
    ],
    extraEntities: {
      activeOrders: [
        { id: 'FD-101', customer: 'David Miller', restaurant: 'Bella Italia Trattoria', items: '2x Truffle Pizza, 1x Tiramisu', total: 46.50, stage: 'Out for Delivery', driver: 'Carlos M. (Scooter #14)', eta: '8 mins' },
        { id: 'FD-102', customer: 'Emma Watson', restaurant: 'Tokyo Ramen House', items: '1x Spicy Miso Ramen, 1x Gyoza', total: 22.99, stage: 'Preparing in Kitchen', driver: 'Assigning Driver', eta: '22 mins' }
      ]
    },
    fields: [
      { key: 'name', label: 'Restaurant Name', type: 'text', required: true },
      { key: 'cuisine', label: 'Cuisine Type', type: 'select', options: ['Italian', 'Japanese', 'Indian', 'Healthy / Vegan', 'American', 'Mexican'], required: true },
      { key: 'rating', label: 'Rating', type: 'number', required: true },
      { key: 'deliveryTime', label: 'Estimated Delivery Time', type: 'text', required: true },
      { key: 'minOrder', label: 'Minimum Order ($)', type: 'number', required: true },
      { key: 'featuredItem', label: 'Featured Menu Item & Price', type: 'text', required: true },
      { key: 'status', label: 'Operating Status', type: 'select', options: ['Open', 'Busy', 'Closed'], required: true },
      { key: 'address', label: 'Location Address', type: 'text', required: true }
    ],
    statCards: [
      { label: 'Partner Restaurants', value: '5 Live Venues', icon: 'fa-utensils', color: 'orange' },
      { label: 'Live Orders in Transit', value: '2 Active Trips', icon: 'fa-motorcycle', color: 'blue' },
      { label: 'Avg Delivery Time', value: '24 Minutes', icon: 'fa-stopwatch', color: 'emerald' },
      { label: 'Customer Satisfaction', value: '98.4%', icon: 'fa-heart', color: 'rose' }
    ]
  },
  {
    id: 3,
    folder: '03-inventory-management-system',
    name: 'StockMaster Pro Inventory System',
    category: 'Logistics & Supply Chain',
    description: 'Enterprise inventory control with multi-warehouse tracking, stock movements (IN/OUT/TRANSFER), reorder alerts, and supplier auditing.',
    entityName: 'Inventory Item',
    entitiesName: 'items',
    initialData: [
      { id: 'SKU-1001', name: 'Industrial Ball Bearings (Box 50)', category: 'Mechanical Parts', warehouse: 'Warehouse North (Aisle 4)', stock: 420, minThreshold: 100, unitCost: 35.00, supplier: 'Precision Dynamics Ltd', status: 'Adequate' },
      { id: 'SKU-1002', name: 'Heavy-Duty Hydraulic Fluid 20L', category: 'Fluids & Lubricants', warehouse: 'Warehouse Central (Bay 2)', stock: 15, minThreshold: 30, unitCost: 85.50, supplier: 'PetroTech Global', status: 'Low Stock Alert' },
      { id: 'SKU-1003', name: 'Fiberglass Safety Helmets ANSI', category: 'Safety Equipment', warehouse: 'Warehouse North (Aisle 1)', stock: 280, minThreshold: 50, unitCost: 22.00, supplier: 'SafeGuard Gear Co', status: 'Adequate' },
      { id: 'SKU-1004', name: 'Pneumatic Actuator Valves 2"', category: 'Pneumatics', warehouse: 'Warehouse South (Rack 7)', stock: 8, minThreshold: 20, unitCost: 145.00, supplier: 'FlowControl Systems', status: 'Critical Shortage' },
      { id: 'SKU-1005', name: 'Copper Wire Spool 500m 12AWG', category: 'Electrical', warehouse: 'Warehouse Central (Bay 5)', stock: 95, minThreshold: 40, unitCost: 110.00, supplier: 'ElectraWire Corp', status: 'Adequate' }
    ],
    extraEntities: {
      stockLogs: [
        { id: 'LOG-771', item: 'Industrial Ball Bearings', action: 'STOCK IN (Purchase Receipt)', qty: '+150 units', warehouse: 'Warehouse North', user: 'Admin SaiVatsal', date: '2026-09-20' },
        { id: 'LOG-772', item: 'Heavy-Duty Hydraulic Fluid', action: 'STOCK OUT (Dispatch Order #441)', qty: '-10 units', warehouse: 'Warehouse Central', user: 'Staff Member', date: '2026-09-21' }
      ]
    },
    fields: [
      { key: 'name', label: 'Item Description', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'select', options: ['Mechanical Parts', 'Fluids & Lubricants', 'Safety Equipment', 'Pneumatics', 'Electrical', 'Raw Materials'], required: true },
      { key: 'warehouse', label: 'Assigned Warehouse / Bay', type: 'text', required: true },
      { key: 'stock', label: 'Current Quantity', type: 'number', required: true },
      { key: 'minThreshold', label: 'Minimum Safety Stock', type: 'number', required: true },
      { key: 'unitCost', label: 'Unit Cost ($)', type: 'number', required: true },
      { key: 'supplier', label: 'Primary Supplier', type: 'text', required: true },
      { key: 'status', label: 'Stock Status', type: 'select', options: ['Adequate', 'Low Stock Alert', 'Critical Shortage'], required: true }
    ],
    statCards: [
      { label: 'Total SKU Portfolio', value: '5 Tracked Lines', icon: 'fa-boxes-stacked', color: 'blue' },
      { label: 'Stock Alerts Flagged', value: '2 Items Low/Crit', icon: 'fa-triangle-exclamation', color: 'rose' },
      { label: 'Total Inventory Valuation', value: '$45,860.50', icon: 'fa-sack-dollar', color: 'emerald' },
      { label: 'Active Warehouses', value: '3 Facilities', icon: 'fa-warehouse', color: 'purple' }
    ]
  }
];

console.log("Master Project Generator Config Loaded. Projects Defined:", projects.length);
