const Navbar = () => {
    return (<nav class="bg-gray-800 py-4">
  <div class="container mx-auto flex justify-between items-center">
    <a href="#" class="text-lg font-bold text-white">Logo</a>
    <ul class="flex items-center space-x-4">
      <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
      <li><a href="#" class="text-gray-300 hover:text-white">About</a></li>
      <li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
    </ul>
    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
  </div>
</nav>)}
export default Navbar;