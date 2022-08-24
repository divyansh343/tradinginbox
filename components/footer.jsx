import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <footer className=" p-4 bg-green-400 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-black sm:text-center dark:text-gray-400">© 2022 <a href="https://divyanshpal.vercel.app/" className="hover:underline">Eduvera™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3  text-black text-base dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/">
                            <a className="mr-4 hover:underline md:mr-6 ">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <a className="mr-4 hover:underline md:mr-6 ">Products</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users">
                            <a className="mr-4 hover:underline md:mr-6 ">Users</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/orders">
                            <a className="mr-4 hover:underline md:mr-6 ">Orders</a>
                        </Link>
                    </li>

                </ul>
            </footer>
        </div>

    )
}

export default Footer