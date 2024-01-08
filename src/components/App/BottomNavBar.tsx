import React from 'react'

const Navigation = [
    {
        url: '/profile',
        name: 'Profile'
    },
    {
        url: '/dashboard',
        name: 'Dashboard'
    }
]
function BottomNavBar() {
    return (
        <div className='h-[60px] border-t absolute bottom-0 left-0 w-full bg-accent text-accent-foreground'>
            <div className='h-full flex justify-center items-center w-full max-w-3xl mx-auto'>
                <ul className='flex items-center gap-4'>
                    {
                        Navigation.map((item, index) => {
                            return (
                                <li key={index} className='text-sm'>
                                    <a href={item.url}>{item.name}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default BottomNavBar