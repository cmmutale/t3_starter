'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import axios from 'axios';
import { useToast } from './ui/use-toast';

type Inputs = {
    name: string,
}

function ProfileForm() {
    const router = useRouter();
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        // send an api request to update the name
        const res = await axios.patch('/api/user', data);
        // refresh window
        if (res.status === 200) {
            toast({
                title: 'Success',
                description: 'Name updated successfully',
            });
            router.refresh();
            console.log(res);
        }
    }

    return (
        <div className='w-full'>
            <form
                className='flex flex-col gap-2'
                onSubmit={handleSubmit(onSubmit)}>
                <Input 
                type="text" 
                {...register('name')} 
                required 
                placeholder='update name'/>
                <Button>
                    save
                </Button>
            </form>
        </div>
    )
}

export default ProfileForm