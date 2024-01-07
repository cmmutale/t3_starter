'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

function Logout() {
    return (
        <Button
        className='w-full'
            variant='destructive'
            size='lg'
            onClick={() => signOut()}>
            Logout
        </Button>
    )
}

export default Logout