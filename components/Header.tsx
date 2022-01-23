import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-24 object-contain cursor-pointer"
            src="/logo/header_logo.jpg"
            alt=""
          />
        </Link>
        {/* href"/" creates the  logo into a link to the homepage 
        object-contain - maintains the images aspect ratio when resizing */}
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
        {/* hidden means hidden on the mobile screen. 
        then to get the text and the logo in the same line use flex on the container div
        items-center - centers them on the y-axis
        justify-between - will space the 2 children
        mx-auto - to center it in the x-axis */}
      </div>

      <div className=" flex items-center space-x-5 text-green-600">
          <h3>
              Sign In
          </h3>
          <h3 className="border px-4 py-1 rounded-full border-green-600">
              Get started
          </h3>
      </div>
    </header>
  );
}

export default Header;
