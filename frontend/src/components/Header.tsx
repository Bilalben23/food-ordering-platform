import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='py-6 border-b-2 border-b-orange-500'>
            <div className='container flex items-center justify-between mx-auto'>
                <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
                    Foodio
                </Link>
            </div>
        </header>
    )
}
