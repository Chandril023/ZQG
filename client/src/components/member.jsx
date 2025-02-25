import React, { useState } from 'react';
import { Gamepad2, Search, Filter, Camera, Globe, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Menu from './menu';
import Footer from './footer';
import { members, gameCategories } from './memberData';

const ModernTeamPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Games");
  const [currentPage, setCurrentPage] = useState(1);

  const membersPerPage = 4;

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         member.inGameName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGame = activeFilter === "All Games" || 
                        member.gamesInvolved.includes(activeFilter);
    return matchesSearch && matchesGame;
  });

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const currentMembers = filteredMembers.slice(startIndex, startIndex + membersPerPage);

  return (<>
    <Menu />
    <div className="bg-black min-h-screen text-white pb-10 px-2">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-black overflow-hidden ">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Our <span className="text-gray-400">Team</span>
          </h1>
          <p className="text-gray-300 max-w-xl">
            Meet the elite players who represent our organization in competitions around the world.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 mt-6 mb-12" >
        <div className="bg-black rounded-xl shadow-xl p-4 md:p-6 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search players..."
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <select
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white appearance-none"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                {gameCategories.map((game) => (
                  <option key={game} value={game}>{game}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4">
        {filteredMembers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-black rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl border border-gray-800"
                >
                  {/* Card Header with Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    {/* Member Games */}
                    <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1">
                      {member.gamesInvolved.slice(0, 2).map((game, index) => (
                        <span key={index} className="px-2 py-1 bg-black backdrop-blur-sm rounded-md text-xs font-medium text-white">
                          {game}
                        </span>
                      ))}
                      {member.gamesInvolved.length > 2 && (
                        <span className="px-2 py-1 bg-black backdrop-blur-sm rounded-md text-xs font-medium text-white">
                          +{member.gamesInvolved.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Card Info */}
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-xl text-white group-hover:text-gray-300">{member.name}</h3>
                        <p className="text-gray-400">@{member.inGameName}</p>
                      </div>
                      
                    </div>
                    
                    {/* Social Links */}
                    <div className="mt-4 pt-3 border-t border-gray-800 flex gap-3">
                    <span className="px-2 py-1 bg-black rounded-lg text-xs font-medium text-gray-300">
                        {member.designation}
                      </span>
                      {member.socials?.instagram && (
                        <a 
                          href={member.socials.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-black/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                        >
                          <Camera className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials?.website && (
                        <a 
                          href={member.socials.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-black/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="inline-flex bg-gray-900 rounded-xl border border-gray-800 p-1">
                  <button 
                    className={`p-2 rounded-lg flex items-center justify-center ${currentPage === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-white hover:bg-black/50'}`}
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="px-4 py-2 text-white font-medium flex items-center">
                    {currentPage} <span className="mx-2 text-gray-500">/</span> {totalPages}
                  </div>
                  
                  <button 
                    className={`p-2 rounded-lg flex items-center justify-center ${currentPage === totalPages ? 'text-gray-600 cursor-not-allowed' : 'text-white hover:bg-black/50'}`}
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-gray-900 rounded-xl border border-gray-800">
            <Gamepad2 className="w-16 h-16 mx-auto text-gray-700 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No team members found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filter to find the team members you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>

  
    
    <Footer />
  </>);
};

// Needed for the import in the component
const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// Needed for the import in the component
const Trophy = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

export default ModernTeamPage;