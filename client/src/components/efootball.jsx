import React, { useState } from 'react';
import Menu from './menu';
import Footer from './footer';

import MatchCountdown from './matchcountdown';

import RegistrationPage from './register';

function Efootball() {
  
  return (
    <>
      <Menu />
      <div className="flex flex-col gap-24 md:gap-32 bg-black text-white min-h-screen">
                {/* First Section - Full Screen */}
                <section className="relative bg-black text-white">
                    <div className="pt-20 pb-24 h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-2 md:p-6 h-full">
                            {/* Grid 1 - Match Countdown */}
                            <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-1 bg-white/30 backdrop-blur-lg text-white rounded-xl shadow-lg">
                                <MatchCountdown />
                            </div>

                            {/* Grid 2 - Announcements */}
                            <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1  text-white rounded-xl shadow-lg overflow-hidden">
                                <div className=" bg-gradient-to-b from-black to-black p-[2px]">
                                <RegistrationPage/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent">
                        
                    </div>
                </section>
</div>
     
      <Footer />
    </>
  );
}

export default Efootball;
