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
                    {/* <Image
                        width={54}
                        height={54}
                        src={user?.image}
                        alt={user?.name}
                    /> */}
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfileCard