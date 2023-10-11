import Image from "next/image"


export const Trending = () => {
    return (
        <>
            <div className="bg-white text-black p-10 pl-32">
                <div className="pb-2 flex">
                    <div className="flex p-1 bg-blue-200 align-top">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none">
                            <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                            <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                            <path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" strokeLinecap="round"></path>
                        </svg>
                        <p className="p-1 pl-3">
                            Trending on Medium
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-4">
                    <div className="...">01</div>
                    <div className="...">02</div>
                    <div className="...">03</div>
                    <div className="bg-orange-200">04</div>
                    <div className="...">05</div>
                    <div className="...">06</div>
                </div>
            </div>
        </>
    )
}