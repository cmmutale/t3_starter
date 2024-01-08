import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LucideMenu } from 'lucide-react'
import Link from 'next/link'
import Logout from '@/app/auth/_components/Logout'

const AppMenu = [
    {
        'url': '/dashboard',
        'name': 'Dashboard'
    },
    {
        'url': '/profile',
        'name': 'Profile'
    },

]
function AppDrawer() {
    return (
        <Sheet>
            <SheetTrigger>
                <LucideMenu />
            </SheetTrigger>
            <SheetContent side='left' className='flex flex-col'>
                <SheetHeader className=''>
                    <SheetTitle>WISO</SheetTitle>
                </SheetHeader>
                <div className='grow'>
                    <ul className=''>
                        {
                            AppMenu.map((item, index) => {
                                return (
                                    <li key={index} className='hover:bg-accent'>
                                        <SheetClose asChild>
                                            <Link 
                                            className='py-3 px-2 w-full'
                                            href={item.url}>{item.name}</Link>
                                        </SheetClose>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Link
                            href='/profile'
                            className='w-full'>
                                <Logout />
                        </Link>
                        </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default AppDrawer