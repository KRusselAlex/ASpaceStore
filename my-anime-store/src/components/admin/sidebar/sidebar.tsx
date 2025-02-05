import { Home, Shirt, List, Image, Users, Settings } from "lucide-react";
import Link from "next/link";
// Utility to combine classNames if needed (if you have it in your project)

export default function SidebarSection() {
  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Products", href: "/admin/products", icon: Shirt },
    { name: "Categories", href: "/admin/categories", icon: List },
    { name: "Images", href: "/admin/images", icon: Image },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-neutral-800 text-neutral-100 p-6 flex flex-col space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-700 transition duration-300 ease-in-out">
              <item.icon className="w-6 h-6 text-neutral-300" />
              <span className="font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
