import { Home, Shirt, List, Image, Users, Settings } from "lucide-react";
import Link from "next/link";


const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Products", href: "/admin/products", icon: Shirt },
    { name: "Categories", href: "/admin/categories", icon: List },
    { name: "Images", href: "/admin/images", icon: Image },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
