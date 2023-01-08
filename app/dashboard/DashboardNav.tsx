'use client'

import { useSelectedLayoutSegments } from 'next/navigation';
import clsx from 'clsx'
import { nav } from '#/lib/DashboardNavigation';
import Link from 'next/link';

export default function DashboardNav(){
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  console.log("selectedLayoutSegments", selectedLayoutSegments)
  
  return(
    <nav className='flex flex-col bg-black/[0.3] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg '>
      {nav.map((demo) => {
        return (
          <div key={demo.name}>
            <div className="mb-2 px-3 font-semibold uppercase tracking-wider text-gray-500">
              <div>{demo.name}</div>
            </div>

            {demo.items?.map((item) => {
              const isActive = item.slug === selectedLayoutSegments || selectedLayoutSegments === '';

              return (
                <div key={item.slug}>
                  {item.isDisabled ? (
                    <div
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600"
                      title="Coming Soon"
                    >
                      {item.name}
                    </div>
                  ) : (
                    <Link
                      href={`dashboard/${item.slug}`}
                      className={clsx(
                        'block px-3 py-2 text-sm font-medium hover:text-gray-100',
                        { 'text-gray-400': !isActive, 'text-white': isActive },{'border-daimoon-purple': isActive, 'border-l-2': isActive }
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
        {/* <Link className=" flex items-center text-md py-4" href={'/dashboard'}>
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path></svg>
          <label>Dashboard</label>
        </Link>
        <Link className=" flex items-center text-md py-4" href={"/dashboard/playlists"}>
          <label>Playlists</label>
        </Link>
        <li class="flex items-center text-gray-900 text-md py-4 text-indigo-600"><span class="text-gray-400 mr-5"><svg class="w-6 h-6 text-indigo-600" fill="#5046e5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></span> Live sessions</li> */}
      </nav>
  )
}