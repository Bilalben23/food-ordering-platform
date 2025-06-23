import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-orange-500' size={27} />
      </SheetTrigger>
      <SheetContent className='p-5'>
        <SheetTitle>
          <span>Welcome to Foodio!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className='flex'>
          <Button className='flex-1 font-bold bg-orange-500'>Login</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
