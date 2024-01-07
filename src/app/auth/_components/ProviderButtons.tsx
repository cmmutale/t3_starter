'use client'
import React, { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'

export default function ProviderButtons() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className='flex flex-col gap-4'>
            <button
                className='bg-[#5865F2] text-white rounded-md px-4 py-2'
                onClick={() => signIn('discord', {
                    callbackUrl: '/dashboard',
                })}>
                Sign in with Discord
            </button>
            <button
                // style with github colors
                className='bg-[#333333] text-white rounded-md px-4 py-2'
                onClick={() => signIn('github', {
                    callbackUrl: '/dashboard',
                })}>
                Sign in with Github
            </button>
            <button
                // style with google colors
                className='bg-[#EA4335] text-white rounded-md px-4 py-2'
                onClick={() => signIn('google', {
                    callbackUrl: '/dashboard',
                })}>
                Sign in with Google
            </button>
        </div>
    )
}
