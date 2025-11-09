import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-4">
        <h2 className="text-xl font-bold mb-6">TaskFlow</h2>
        <nav className="space-y-2">
          <Link
            href="/"
            className="block text-gray-700 dark:text-gray-200 hover:underline"
          >
            DashBoard
          </Link>
          <Link
            href="/tasks"
            className="block text-gray-700 dark:text-gray-200 hover:underline"
          >
            Tasks
          </Link>
          <Link
            href="/settings"
            className="block text-gray-700 dark:text-gray-200 hover:underline"
          >
            Settings
          </Link>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b dark:border-gray-700 flex items-center justify-between px-6 bg-white dark:bg-gray-800">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            DashBoard
          </h1>
          <ThemeToggle />
        </header>
        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
