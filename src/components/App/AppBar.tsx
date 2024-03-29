'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import AppDrawer from './AppDrawer';
import { usePathname } from 'next/navigation';
import UserButton from '../UserButton';

function AppBar() {
    const { data: session } = useSession();
    const pathname = usePathname();

    function removeFirstCharacter(str: string) {
        return str.slice(1); // Use slice() to get a substring starting from index 1
    }
    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const AppTitle = capitalizeFirstLetter(removeFirstCharacter(pathname));
    return (
        <header className='h-[60px] shadow-sm bg-white'>
            <div className='flex items-center justify-between h-full max-w-3xl mx-auto max-md:px-2 gap-2'>
                <div className='AppDrawer'>
                    <AppDrawer />
                </div>
                <div className="AppTitle font-semibold text-2xl grow text-center">
                    <p>{AppTitle}</p>
                </div>
                <div className='AppAction'>
                    {
                        session ? <UserButton /> : <Link href='/auth/login'>Login</Link>
                    }
                </div>
            </div>
        </header>
    )
}

export default AppBar