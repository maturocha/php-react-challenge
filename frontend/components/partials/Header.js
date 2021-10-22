import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {

  return <header className="py-6 lg:pb-4">
    <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            Civitatis Challenge
          </Link>
        </div>
        <Navigation />
      </div>
    </div>
  </header>
};

export default Header;