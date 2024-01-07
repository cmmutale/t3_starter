import Link from 'next/link'
import React from 'react'

function Home() {
    return (
        <main>
            <section className='max-w-3xl mx-auto max-md:px-2 py-[10vh]'>
                <h1 className='text-[3rem] px-[5vh]'>My NextJS starter
                    <span className='text-[1.5rem]'>(with t3)</span></h1>
                <p className='px-[5vh]'>Tap the login button 👉</p>
                <Link href='/auth/login'>Login</Link>
            </section>
        </main>
    )
}

export default Home