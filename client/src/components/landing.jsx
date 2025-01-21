import Footer from "./footer"
import Menu from "./menu"
import { Link } from 'react-router-dom'
import MatchCountdown from "./matchcountdown"
import Announcements from "./announcements"
import ZQGBanner from "./zqgbanner"
import NewsletterSignup from "./joinus"
import SponsorsTicker from "./sponserticker.jsx"
const sponsors = [
  { name: 'SONY', path: 'https://sony.scene7.com/is/content/sonyglobalsolutions/sony-logo?$S7Product$' },
  { name: 'APPLE', path: 'https://imgcdn.stablediffusionweb.com/2024/9/29/40e5f1f8-f9ad-43df-b6ad-f9290b513106.jpg' },
  { name: 'REALME', path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaW-miAOJzGIg2s7bFzzyDKGJ_9aRAmcinFA&s' },
  { name: 'NIKE', path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShZC-aRMjhBjWR8HqOAZPXCyMDC7ueGE2pg&s' },
  { name: 'ADIDAS', path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasOYhhl1JOL67FjasGcc3zuRCizxN6B6egw&s' },
  { name: 'KONAMI', path: 'https://external-preview.redd.it/konami-announces-record-high-revenue-but-profits-slump-v0--HS_Nrg9Ao51GovP3owmuHf8tJfnlJo9Ou2sa3_Upiw.jpg?width=640&crop=smart&auto=webp&s=1f40bf465f31e4417e951b100b71aba7ebbee70f' },
  
];

const allSponsors = [...sponsors, ...sponsors];

export default function Landing() {
    return (
        <div className="bg-black text-white min-h-screen">
        
            <Menu />
            <div className="flex flex-col gap-24 md:gap-32">
                {/* First Section - Full Screen */}
                <section className="relative min-h-screen">
                    <div className="pt-20 pb-24 h-full"> {/* Added bottom padding for sponsor space */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-4 md:p-6 h-full">
                            {/* Grid 1 - Match Countdown */}
                            <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-1 bg-white/30 backdrop-blur-lg text-white rounded-xl shadow-lg">
                                <MatchCountdown/>
                            </div>

                            {/* Grid 2 - Announcements */}
                            <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 bg-white/30 backdrop-blur-lg text-white rounded-xl shadow-lg overflow-hidden">
                                <div className="h-full bg-gradient-to-b from-black to-transparent p-[2px]">
                                    <Announcements/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"><SponsorsTicker allSponsors={allSponsors} /></div>
                  

                </section>

                {/* Second Section */}
                <section className="min-h-screen pb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-4 md:p-6">
                        {/* Grid 3 - Newsletter Signup */}
                        <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 backdrop-blur-lg text-white rounded-xl shadow-lg overflow-hidden">
                            <div className="h-full bg-gradient-to-b from-white/10 to-black/50 p-[2px]">
                                <NewsletterSignup/>
                            </div>
                        </div>

                        {/* Grid 4 - ZQG Banner */}
                        <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-1 backdrop-blur-lg text-white rounded-xl shadow-lg overflow-hidden">
                            <div className="h-full bg-gradient-to-b from-black to-transparent">
                                <ZQGBanner/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}