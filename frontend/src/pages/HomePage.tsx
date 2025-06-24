import { assets } from "@/constants/assets";

export default function HomePage() {
    return (
        <div className='flex flex-col gap-12'>

            <div className="flex flex-col gap-5 py-8 -mt-16 text-center bg-white rounded-lg shadow-md">

                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Tuck into a takeway today
                </h1>
                <span className="text-xl">Food is just a click away!</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <img
                        src={assets.landing}
                        alt="Landing"
                        className=""
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <p className="text-3xl font-bold tracking-tighter">
                        Order takeway <span className="text-orange-600">even faster!</span>
                    </p>
                    <p>Download the Foodio App for faster ordering and personal recommendations</p>

                    <img
                        src={assets.appDownload}
                        alt="App Download"
                    />
                </div>
            </div>

        </div>
    )
}
