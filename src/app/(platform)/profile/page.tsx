import ProfileCard from '@/components/ProfileCard'
import ProfileForm from '@/components/ProfileForm'
import React from 'react'

function Profile() {
    return (
        <div>
            <section className='max-w-3xl mx-auto max-md:px-2 py-[10vh] grid 
            sm:grid-cols-4 grid-cols-2'>
                <div className='space-y-4 col-span-2'>
                    <ProfileCard />
                    <ProfileForm />
                </div>
            </section>
        </div>
    )
}

export default Profile