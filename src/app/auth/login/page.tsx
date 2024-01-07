'use client'
import ProviderButtons from '../_components/ProviderButtons'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

function Login() {
    const { data: session } = useSession();
    if (session) {
        redirect('/dashboard');
    }

    return (
        <div>
            <section className='max-w-3xl mx-auto max-md:px-2 py-[10vh]'>
                <div className='max-w-[400px] space-y-6 p-6 rounded-xl bg-black/5'>
                    <h1 className='font-bold text-3xl'>Login</h1>
                    <ProviderButtons />
                </div>
            </section>
        </div>
    )
}

export default Login