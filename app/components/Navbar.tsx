const Navbar = () => {
  const links = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Psychomotricité", href: "/psychomotricite" },
    { name: "Bilans & Séances", href: "/bilans-seances" },
    { name: "Infos utiles", href: "/infos-utiles" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="text-2xl font-bold text-primary ml-5 hover:opacity-80 transition">
          Marion Couasse
        </a>
      </div>
      <div className="hidden md:flex gap-6 navbar-center">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary mr-5 text-white">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
