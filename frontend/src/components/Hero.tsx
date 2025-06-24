import { assets } from "@/constants/assets"

export default function Hero() {
    return (
        <div>
            <img
                src={assets.hero}
                alt="Hero"
                className="object-cover w-full max-h-[650px] aspect-video"
            />
        </div>
    )
}
