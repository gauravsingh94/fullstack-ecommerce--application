import ProfileImageIcon from "./ProfileImageIcon";
import CartIcon from "./CartIcon";
const NavBar = () => {
  const navLinks = [
    { label: "Products", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ];

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
          <button>
            <CartIcon numberOfItems={3} />
          </button>
          <button>
            <ProfileImageIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
