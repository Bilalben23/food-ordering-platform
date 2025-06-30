import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import UsernameMenu from './UsernameMenu';

export default function MainNav() {

    const { loginWithRedirect, isAuthenticated } = useAuth0();


    return (
        <div className='flex items-center space-x-2'>
            {isAuthenticated
                ? <UsernameMenu />
                : <Button
                    variant="ghost"
                    className='font-bold transition-colors hover:text-orange-500 hover:bg-white'
                    onClick={async () => await loginWithRedirect()}
                >
                    Log In
                </Button>
            }
        </div>
    );
}
