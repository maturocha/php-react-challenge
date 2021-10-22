import Link from "next/link";


const Navigation = () => {
  return <ul className="items-center hidden md:flex">
    <li className="block md:hidden mb-4 md:mb-0 md:mr-4">
      <Link href="/">
        <a className="text-lg md:text-normal px-6 py-4 md:py-2 md:px-4 transition duration-200 ease-in-out dark:text-gray-100 dark:hover:text-gray-400 md:dark:hover:bg-dark-700 md:hover:bg-gray-50 rounded">
          Home
        </a>
      </Link>
    </li>
    <li className="mb-4 md:mb-0 md:mr-4">
      <Link href="/reservas">
        <a className="text-lg md:text-normal px-6 py-4 md:py-2 md:px-4 transition duration-200 ease-in-out dark:text-gray-100 md:dark:hover:bg-dark-700 md:hover:bg-gray-50 rounded">
          Mis Reservas
        </a>
      </Link>
    </li>
  </ul>
}

export default Navigation;