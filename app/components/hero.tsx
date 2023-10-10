import Link from "next/link"


export const Hero = () => {
    return (
        <>
            <div className="flex bg-yellow-500 text-black border-black border-b">
                <div className="flex basis-1/2 space-y-9 flex-col py-20 pl-16">
                    <h2 className="text-8xl">Stay curious.</h2>
                    <h3 className="text-xl">Discover stories, thinking, and expertise from writers on any topic.</h3>
                    <div>
                        <Link href="/" className="py-2 px-10 text-white bg-black rounded-full">
                            Start reading
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}