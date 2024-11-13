export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} L3 Importations. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-500">Premium Agricultural Machinery Import</p>
      </div>
    </footer>
  );
}