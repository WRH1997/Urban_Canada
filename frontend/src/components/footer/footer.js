// author: HARSH NARESHBHAI KATHIRIA

import React from 'react';
import logo from '../../assets/footer_logo.png';

export default function Footer() {

  return (
    <footer class="bg-gray-200 w-full">
        <div class="p-4">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex items-center sm:mb-0">
                    <img src={logo} class="h-7 mr-3" alt="Logo" />
                    <span class="self-center text-lg font-semibold whitespace-nowrap text-gray-800">Urban Canada</span>
                </div>
                
                <ul class="flex absolute right-2 flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-1 no-underline text-gray-800 hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">About</a>
                    </li>
                    <li>
                        <a href="/faq" class="mr-1 no-underline text-gray-800 hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">FAQ</a>
                    </li>
                    <li>
                        <a href="/contact" class="no-underline text-gray-800 hover:bg-gray-800 hover:text-gray-100 py-2 px-4 rounded">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}