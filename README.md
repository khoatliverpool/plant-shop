# Plant Shop - Paradise Nursery 🌿

A modern e-commerce application for houseplants built with React and Redux.

## 🎯 Project Requirements Met (50 points)

### GitHub (6 points) ✅
- ✅ Public GitHub repository URL (2 points)
- ✅ Redux-related files and code (4 points)
  - `/src/redux/store.js` - Redux store configuration
  - `/src/redux/cartSlice.js` - Cart reducer with all actions

### Landing Page (5 points) ✅
- ✅ Background image (1 point)
- ✅ Company paragraph description (1 point)
- ✅ Company name: "Paradise Nursery" (1 point)
- ✅ Get Started button linking to product listing page (2 points)

### Product Listing Page (9 points) ✅
- ✅ Six unique houseplants with thumbnail, name, and price (2 points)
  - Monstera Deliciosa, Bird of Paradise, Aloe Vera, Echeveria, Boston Fern, Maidenhair Fern
- ✅ Plants grouped into 3 categories (1 point)
  - Tropical, Succulent, Fern
- ✅ Add to Cart button functionality (6 points)
  - Shopping cart icon increases by one ✅
  - Button becomes disabled after selection ✅
  - Plant gets added to shopping cart ✅

### Header (7 points) ✅
- ✅ Displays on both product listing and shopping cart pages (2 points)
- ✅ Shopping cart icon with total number of items (3 points)
- ✅ Navigation to all pages (2 points)
  - Home, Products, Cart

### Shopping Cart Page (23 points) ✅
- ✅ Total number of plants in cart (2 points)
- ✅ Total cost of all items (2 points)
- ✅ Each plant displays thumbnail, name, and unit price (6 points)
- ✅ Increase button increments quantity and updates values (4 points)
- ✅ Decrease button decrements quantity and updates values (4 points)
- ✅ Delete button for each item (2 points)
- ✅ Checkout button showing "Coming Soon" (1 point)
- ✅ Continue shopping button linking to products (2 points)

## 📁 Project Structure

```
plant-shop/
├── public/
│   └── index.html                 # HTML template
├── src/
│   ├── components/
│   │   ├── LandingPage.js        # Landing page component
│   │   ├── LandingPage.css       # Landing page styles
│   │   ├── ProductListing.js     # Product listing component
│   │   ├── ProductListing.css    # Product listing styles
│   │   ├── ShoppingCart.js       # Shopping cart component
│   │   ├── ShoppingCart.css      # Shopping cart styles
│   │   ├── Header.js             # Header component
│   │   └── Header.css            # Header styles
│   ├── data/
│   │   └── plantsData.js         # Plant products data
│   ├── redux/
│   │   ├── store.js              # Redux store configuration
│   │   └── cartSlice.js          # Cart slice with reducers
│   ├── App.js                     # Main app component
│   ├── App.css                    # App styles
│   ├── index.js                   # Entry point
│   └── index.css                  # Global styles
├── package.json                   # Dependencies
├── .gitignore                     # Git ignore file
└── README.md                      # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 8 or higher)
- npm (comes with Node.js)

### Step 1: Install Dependencies
```bash
cd plant-shop
npm install
```

### Step 2: Start the Development Server
```bash
npm start
```

The application will open automatically at [http://localhost:3000](http://localhost:3000)

## 💻 Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm build`** - Builds the app for production
- **`npm test`** - Launches the test runner
- **`npm eject`** - Ejects from Create React App (one-way operation)

## 🛠️ Technologies Used

- **React 17** - Frontend library
- **Redux Toolkit** - State management
- **React Router v5** - Navigation and routing
- **React Redux** - React bindings for Redux
- **CSS3** - Styling

## 🌟 Features

### Redux State Management
- Centralized state management for shopping cart
- Actions: `addToCart`, `increaseQuantity`, `decreaseQuantity`, `removeFromCart`
- Persistent cart state across pages

### Responsive Design
- Modern, clean UI
- Gradient backgrounds
- Hover effects and transitions
- Card-based layouts

### User Experience
- Disabled state for items already in cart
- Real-time cart count updates
- Smooth navigation between pages
- Visual feedback for all actions

## 📄 Pages Overview

### 1. Landing Page (`/`)
- Beautiful background image
- Company information
- Call-to-action button

### 2. Product Listing Page (`/products`)
- 6 houseplants organized by category
- Add to Cart functionality
- Visual indicators for cart status

### 3. Shopping Cart Page (`/cart`)
- Complete cart management
- Quantity controls
- Price calculations
- Checkout and continue shopping options

## 🔧 Troubleshooting

If you encounter any issues during installation:

1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and reinstall:**
   ```bash
   rmdir /s /q node_modules
   npm install
   ```

3. **Make sure you're using a compatible Node.js version:**
   ```bash
   node --version
   ```

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Development Notes

- All Redux files are in `/src/redux/`
- Plant data is in `/src/data/plantsData.js`
- Each component has its own CSS file
- Uses functional components with React Hooks
- Compatible with older npm versions

---

**Made with ❤️ for the Plant Shop Project**
