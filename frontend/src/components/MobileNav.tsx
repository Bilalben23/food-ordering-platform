import { CircleUserRound, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useAuth0 } from '@auth0/auth0-react';
import MobileNavLinks from './MobileNavLinks';

export default function MobileNav() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-orange-500' size={27} />
      </SheetTrigger>
      <SheetContent className='p-5'>
        <SheetTitle>
          {isAuthenticated
            ? <span className='flex items-center gap-2 font-bold'>
              <CircleUserRound className='text-orange-500' />
              {user?.email}
            </span>
            : <span>Welcome to Foodio!</span>
          }
        </SheetTitle>
        <Separator />
        <SheetDescription className='flex flex-col gap-4'>
          {
            isAuthenticated
              ? <MobileNavLinks />
              : <Button
                className='flex-1 font-bold bg-orange-500'
                onClick={async () => await loginWithRedirect()}
              >Log In</Button>
          }
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
