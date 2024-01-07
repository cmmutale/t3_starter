/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getServerAuthSession } from '@/server/auth'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from './ui/card';

async function ProfileCard() {
    const session = await getServerAuthSession();
    const user = session?.user;
    return (
        <div className='p-3 rounded-xl bg-black/5 w-full'>
            <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                    <img
                        className='w-16 aspect-square rounded-full'
                        src={user?.image}
                        alt="profile picture" />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfileCard