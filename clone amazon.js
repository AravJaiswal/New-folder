import React from 'react';

// Amazon-like single-file React component using Tailwind CSS
// - Default export is the main App component
// - Place this file inside a React app (e.g., create-react-app or Vite)
// - Tailwind must be configured in the project for styling to work

const sampleProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Wireless Headphones Model ${i + 1}`,
  price: (Math.random() * 90 + 10).toFixed(2),
  rating: (Math.random() * 2 + 3).toFixed(1),
  reviews: Math.floor(Math.random() * 5000) + 10,
  img: `https://images.unsplash.com/photo-1518441902114-4f9f9f45d6d5?w=800&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=${i}`
}));

function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white font-extrabold px-3 py-2 rounded">a</div>
          <div className="hidden sm:block font-semibold">ShopEasy</div>
        </div>

        <div className="flex-1">
          <div className="flex items-center bg-white rounded overflow-hidden shadow-sm">
            <select className="px-3 text-sm text-gray-600 border-r hidden md:block">
              <option>All</option>
              <option>Electronics</option>
              <option>Books</option>
              <option>Clothing</option>
            </select>
            <input
              className="flex-1 px-3 py-2 outline-none text-sm"
              placeholder="Search products, brands and more"
            />
            <button className="bg-yellow-500 px-4 py-2 font-semibold">Search</button>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-4 text-sm">
          <div className="text-gray-700">Hello, Sign in</div>
          <div className="text-gray-700">Orders</div>
          <div className="relative">
            <div className="bg-white px-3 py-2 rounded shadow">Cart</div>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs px-2">3</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=60&auto=format&fit=crop"
              alt="hero"
              className="w-full md:w-1/2 rounded-lg object-cover h-56"
            />
            <div>
              <h1 className="text-2xl font-extrabold mb-2">Huge savings on top brands</h1>
              <p className="text-gray-600 mb-4">Deals of the day — limited time offers across electronics, home, fashion and more.</p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-yellow-500 rounded font-semibold">Shop Deals</button>
                <button className="px-4 py-2 border rounded">Today's Picks</button>
              </div>
            </div>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Subscribe & Save</h3>
            <p className="text-sm text-gray-600">Sign up for exclusive deals, early access to sales, and personalised recommendations.</p>
            <div className="mt-4">
              <input className="w-full px-3 py-2 border rounded" placeholder="Email address" />
              <button className="mt-3 w-full bg-yellow-500 px-4 py-2 rounded font-semibold">Subscribe</button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Categories() {
  const cats = ['Electronics', 'Home', 'Fashion', 'Books', 'Toys', 'Beauty'];
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {cats.map((c) => (
          <div key={c} className="bg-white rounded-lg p-3 text-center shadow-sm">
            <div className="h-12 flex items-center justify-center text-xl font-semibold text-indigo-600">{c[0]}</div>
            <div className="text-sm mt-2">{c}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ p }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
      <div className="p-3">
        <h4 className="text-sm font-semibold h-12 overflow-hidden">{p.title}</h4>
        <div className="mt-2 flex items-center gap-2">
          <div className="font-bold">₹{p.price}</div>
          <div className="text-xs text-gray-500">• {p.rating} ★</div>
          <div className="text-xs text-gray-400">({p.reviews})</div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-3 py-2 bg-yellow-500 rounded font-semibold">Add to Cart</button>
          <button className="px-3 py-2 border rounded">Wish</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Categories />

        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="hidden lg:block">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-3">Filters</h3>
              <div className="text-sm text-gray-600">Price Range</div>
              <div className="flex gap-2 mt-2">
                <input placeholder="Min" className="w-1/2 px-2 py-1 border rounded" />
                <input placeholder="Max" className="w-1/2 px-2 py-1 border rounded" />
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-600">Rating</div>
                <select className="mt-2 w-full px-2 py-1 border rounded">
                  <option>4★ & above</option>
                  <option>3★ & above</option>
                </select>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sampleProducts.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="px-4 py-2 border rounded">Load more</button>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex justify-between">
          <div>© {new Date().getFullYear()} ShopEasy — clone demo</div>
          <div>Privacy · Terms · Help</div>
        </div>
      </footer>
    </div>
  );
}
