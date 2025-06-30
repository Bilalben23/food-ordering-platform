import { CircleUserRoundIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function UsernameMenu() {

    const { user, logout } = useAuth0();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex p-3 items-center gap-2 px-3 font-bold hover:text-orange-500'>
                <CircleUserRoundIcon className='text-orange-500' />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-48 mt-5'>
                <DropdownMenuItem>
                    <Link to="/user-profile" className='font-bold hover:text-orange-500 p-1'>
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button
                        className='w-full bg-orange-500'
                        onClick={() => logout()}
                    >Logout</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}