import { Menu, Receipt, LogOut } from "lucide-react";
import { useState, useEffect, type FC } from "react";
import axios from "axios";
import { Link } from "react-router";
type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/home" },
  { name: "Features", path: "/features" },
  { name: "Templates", path: "/template" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/Register" },
];
const API=import.meta.env.VITE_API_URL;
const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
  const checkAuth = async () => {
    try {
      await axios.get(`${API}/api/auth/check`, {
        withCredentials: true,
      });
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  };

  checkAuth();
}, []);

const handleLogout = async () => {
  try {
    await axios.post(`${API}/api/auth/logout`, {}, {
      withCredentials: true,
    });
    setIsAuthenticated(false);
    // Using window.location.href causes a full page reload
    // We'll keep this for logout as it's often desired to fully refresh after logout
  } catch (err) {
    console.error('Logout failed:', err);
  }
};


  return (
    <nav className="bg-[#BDB395] fixed w-full top-0 left-0 z-50 border-b-2 text-[#2b2822] font-['DynaPuff']">
      <div className="mx-auto max-w-screen-xl w-full flex items-center justify-between py-2 px-4">
        <div
          className="flex items-center text-2xl font-bold text-black cursor-pointer"
        >
          <Receipt size={32} className="inline-block  m-2" />
          Billify
        </div>
          {/* Window view */}
        <ul className="hidden md:flex space-x-6">
          {isAuthenticated ? (
            <>
              <li className="relative cursor-pointer list-none m-2">
                <Link
                  to="/dashboard"
                  className="transition-colors duration-300 hover:text-gray-600
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                    after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Dashboard
                </Link>
              </li>
              <li className="relative cursor-pointer list-none m-2">
                <button
                  onClick={handleLogout}
                  className="text-red-600 transition-colors duration-300 hover:text-red-800 flex items-center cursor-pointer"
                >
                  <LogOut size={16} className="mr-1" />
                  Logout
                </button>
              </li>
            </>
          ) : (
            navItems.map((item) => (
              <li key={item.name} className="relative cursor-pointer list-none m-2">
                <Link
                  to={item.path}
                  className="transition-colors duration-300 hover:text-gray-600
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                    after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))
          )}
        </ul>
        {/* Mobile view */}
          <button className=" md:hidden cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
            <Menu size={32}/>
          </button>
      </div>
      {
        isOpen && (
          <ul>
            {isAuthenticated ? (
              <>
                <li className="cursor-pointer list-none m-2">
                  <Link to="/dashboard" className="block transition-colors duration-300 hover:text-purple-600">
                    Dashboard
                  </Link>
                </li>
                <li className="cursor-pointer list-none m-2">
                  <button onClick={handleLogout} className="block transition-colors duration-300 hover:text-purple-600">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              navItems.map((item) => (
                <li key={item.name} className="cursor-pointer list-none m-2">
                  <Link
                    to={item.path}
                    className="block transition-colors duration-300 hover:text-purple-600">
                    {item.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        )
      }
    </nav>
  );
};

export default Navbar;

