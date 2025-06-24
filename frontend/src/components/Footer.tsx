
export default function Footer() {
    return (
        <footer className='py-10 bg-orange-500'>
            <div className='container flex flex-col items-center justify-between mx-auto md:flex-row '>
                <div>
                    <p className="text-3xl font-bold tracking-tight text-white">Foodio</p>
                </div>
                <nav className='font-bold tracking-tight text-white'>
                    <ul className='flex gap-4'>
                        <li>
                            <a href="#" className='transition hover:underline hover:opacity-95'>privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className='transition hover:underline hover:opacity-95'>Terms of service</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
