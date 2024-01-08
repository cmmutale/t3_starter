'use client'
import React from 'react'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import AppBar from '@/components/App/AppBar';

interface PlatformLayoutProps {
    children: React.ReactNode;
}
function PlatformLayout({ children }: PlatformLayoutProps) {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/auth/login');
        }
    });

    return (
        <>
            <AppBar />
            <main>{children}</main>
        </>
    )
}

export default PlatformLayout