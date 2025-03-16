🛒 E-Commerce Store (React + Vite)
This project is an E-Commerce Store built with React and Vite, optimized for fast performance, seamless user experience, and scalable development. It includes a shopping cart, product listings, authentication, and checkout functionality.

🚀 Tech Stack
Frontend:
React (JS library for UI)
Vite (Faster build tool than CRA)
Axios (For API calls)
Tailwind CSS (For styling)
🏗 Project Features
🛍️ E-Commerce Functionality
✔ Product Listings – Display products dynamically from the database.
✔ Product Details – View full details of each item.
✔ Shopping Cart – Add/remove products, adjust quantity, and view total price.
✔ Checkout & Payments – Integration with Stripe

👤 User Features
✔ Authentication – User login/signup with Firebase or JWT.
✔ Profile Management – View and update account details.
✔ Order History – Track past orders.

📦 Admin Features
✔ Product Management – Add, update, and delete products.
✔ Order Management – Track & update orders.
✔ Dashboard – View sales reports and analytics

🔧 Setup & Installation
🏗 Frontend (React + Vite) Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/yourusername/ecommerce-store.git
cd ecommerce-store
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Start the React Development Server
sh
Copy
Edit
npm run dev
This runs the frontend at http://localhost:5173/.

🏗 Backend (Laravel) Setup
1️⃣ Navigate to the Backend Directory
sh
Copy
Edit
cd backend
2️⃣ Install Laravel Dependencies
sh
Copy
Edit
composer install
3️⃣ Configure the .env File
Copy the .env.example file and update the database details:

sh
Copy
Edit
cp .env.example .env
Edit .env and set:

env
Copy
Edit
APP_URL=http://127.0.0.1:8000
4️⃣ Generate Application Key
sh
Copy
Edit
php artisan key:generate
5️⃣ Run Migrations & Seed Database
sh
Copy
Edit
php artisan migrate --seed
6️⃣ Start Laravel Development Server
sh
Copy
Edit
php artisan serve
Your API is now available at http://127.0.0.1:8000/api.