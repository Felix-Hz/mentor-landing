export const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <nav className="flex justify-between items-center container mx-auto">
        <p className="text-2xl font-bold cursor-pointer">Template</p>
        <ul className="flex space-x-4">
          <li>
            <p className="hover:text-gray-400 cursor-pointer">About</p>
          </li>
          <li>
            <p className="hover:text-gray-400 cursor-pointer">Pricing</p>
          </li>
          <li>
            <p className="hover:text-gray-400 cursor-pointer">Contact</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};
