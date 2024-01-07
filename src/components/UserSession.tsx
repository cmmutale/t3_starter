'use client'
import { SessionProvider } from "next-auth/react";

interface UserSessionProps {
    children: React.ReactNode;
}
export default function UserSession({ children }: UserSessionProps) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
