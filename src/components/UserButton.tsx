'use client'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { LucideUser } from 'lucide-react'
import { useSession } from 'next-auth/react'


function UserButton() {
    const session = useSession();
    console.log(session)
    const user = session?.data?.user;
    return (
        <Popover>
            <PopoverTrigger>
                <LucideUser />
            </PopoverTrigger>
            <PopoverContent className='mr-2'>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </PopoverContent>
        </Popover>

    )
}

export default UserButton