import { useState } from "react";
import ProfileImageIcon from "./ProfileImageIcon";
import CartCard from "./CartCard";
import CartBottom from "./CartBottom";
import CartIcon from "./CartIcon";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navLinks = [
    { label: "Products", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ];

  const toggleCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-black font-semibold text-xl">3legant</div>
        <ul className="flex space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-gray-600 hover:text-gray-300 transition duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-4">
          <button onClick={toggleCartDrawer}>
            <CartIcon numberOfItems={3} />
          </button>
          <button>
            <ProfileImageIcon />
          </button>
        </div>
      </div>
      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleCartDrawer}
        >
          X
        </button>
        <div className="flex flex-col h-full">
          <div className="p-4">
            <h2 className="text-xl font-semibold">Cart</h2>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <div className="mb-2">
              <CartCard />
            </div>
            <div className="mb-2">
              <CartCard />
            </div>
            <div className="mb-2">
              <CartCard />
            </div>
          </div>
          <div className="p-4 border-t">
            <CartBottom />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
