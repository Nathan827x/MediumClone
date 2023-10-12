import Image from "next/image"


export const Trending = () => {

    const MOCK_TRENDING_ARTICLES = [
        {
            author: "Jane Doe",
            title: "The Art of Cooking Pasta Al Dente",
            stats: {
                date: "Oct 5",
                readTime: "5 min read"
            }
        },
        {
            author: "John Smith",
            title: "Exploring the Wonders of Deep Space",
            stats: {
                date: "Oct 12",
                readTime: "10 min read"
            }
        },
        {
            author: "Alex Johnson",
            title: "10 Essential Tips for Productive Remote Work",
            stats: {
                date: "Sept 30",
                readTime: "4 min read"
            }
        },
        {
            author: "Sarah Williams",
            title: "The Secrets of Perfectly Balanced Yoga Poses",
            stats: {
                date: "Oct 2",
                readTime: "6 min read"
            }
        },
        {
            author: "Michael Adams",
            title: "How to Build a Sustainable Garden at Home",
            stats: {
                date: "Oct 7",
                readTime: "8 min read"
            }
        },
        {
            author: "Ella Davis",
            title: "Creating Stunning Watercolor Artworks: A Step-by-Step Guide",
            stats: {
                date: "Oct 11",
                readTime: "12 min read"
            }
        }
    ];

    return (
        <>
            <div className="bg-white text-black p-10 pl-32">
                <div className="pb-2 flex">
                    <div className="flex p-1">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {MOCK_TRENDING_ARTICLES.map((article, index) => (
                        <div key={index}>
                            <div className="flex">
                                <header className="">
                                    {/* Number of article in the grid 1-6 */}
                                    <h3 className="opacity-10 text-3xl pr-5">0{index + 1}</h3>
                                </header>
                                <div className="flex-col">
                                    <div className="flex pb-2 pt-2">
                                        {/* Company image */}
                                        <Image
                                            src="https://miro.medium.com/v2/resize:fill:40:40/1*OdaLifs02To5Yibe8Pgrwg.png"
                                            alt={article.author}
                                            width={20}
                                            height={20}
                                        />
                                        {/* Author */}
                                        <p className="pl-2 text-xs font-medium">{article.author}</p>
                                    </div>
                                    <div className="pb-2">
                                        {/* Title */}
                                        <p className="font-bold">{article.title}</p>
                                    </div>
                                    <div className="flex text-xs opacity-50">
                                        {/* Stats (read time date of article) */}
                                        <p>{article.stats.date}</p>
                                        <p>&ensp;·&ensp;</p>
                                        <p>{article.stats.readTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}