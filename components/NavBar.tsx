import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const items = [
        {
            name: "主页",
            link: "./"
        },
        {
            name: "关于我们",
            link: "./about_us"
        },
        {
            name: "近期活动",
            link: "./recent_activities"
        },
        {
            name: "作品集",
            link: "./gallery"
        },
        {
            name: "博客",
            link: "./blogs"
        },
        {
            name: "联系",
            link: "./contacts"
        }
    ];

    return (
        <div className={`
        flex flex-row w-full sticky top-0 z-50 p-3 
        items-center justify-between 
        bg-white text-black border drop-shadow-md`}>
            {/* Logo & Hamburger Button */}
            <div className={`flex flex-row items-center max-[640px]:w-full justify-between`}>
                {/* Logo */}
                <div className={`flex`}>
                    {/* Long Logo */}
                    <img src={`../images/goat_village_logo/Goat_Village_Light_Transparent.png`}
                        className={`flex h-12 w-auto max-[640px]:hidden`} />
                    {/* Short Logo */}
                    <img src={`../images/goat_village_logo/Single_Light_Transparent.png`}
                        className={`flex h-12 w-auto min-[640px]:hidden`} />
                </div>

                {/* Hamburger Button */}
                <div className={`flex flex-row min-[640px]:hidden max-w-12`}>
                    <div className={`flex flex-col gap-1.5`} onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) }}>
                        <div className={`w-8 h-0.5 bg-black transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : "rotate-0"}`} />
                        <div className={`w-8 h-0.5 bg-black transition-all ${isMobileMenuOpen && "opacity-0"}`} />
                        <div className={`w-8 h-0.5 bg-black transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "rotate-0"}`} />
                    </div>
                </div>
            </div>

            {/* Navigations */}
            <div className={`flex flex-row`}>
                {/* PC Navigation Links */}
                <nav className={`max-[640px]:hidden`}>
                    <ul className={`flex flex-row gap-5 pr-5`}>
                        {items.map((val, idx) => (
                            <li><Link href={val.link}>{val.name}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div className={`
                min-[640px]:hidden
                absolute left-0 top-16 z-40 w-full 
                px-3 items-center backdrop-blur-3xl bg-white drop-shadow-md
                ${isMobileMenuOpen ? "max-h-[600px] pt-5 pb-3" : "max-h-0"} 
                overflow-hidden transition-all`}>
                <ul className={`flex flex-col items-center`}>
                    {items.map((val, idx) => (
                        <li className={`py-4`}><Link href={val.link}>{val.name}</Link></li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default NavBar;