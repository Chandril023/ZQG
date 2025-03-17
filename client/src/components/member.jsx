import React, { useState } from 'react';
import { Search, Filter, Camera, Globe, Twitter, Twitch, ChevronDown } from 'lucide-react';
import Menu from './menu';
import Footer from './footer';
import { members, gameCategories } from './memberData';
import logo from '../components/photos/zero.png';

const ModernTeamPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Games");
  const [expandedMember, setExpandedMember] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         member.inGameName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGame = activeFilter === "All Games" || 
                        member.gamesInvolved.includes(activeFilter);
    return matchesSearch && matchesGame;
  });

  const toggleMemberExpansion = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Menu />
      
      {/* Header section with background image */}
      <div className="relative">
        {/* Background image for only the header section */}
        <div
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
      url('https://t4.ftcdn.net/jpg/05/20/71/15/360_F_520711569_TXpAeak7zUHAb4mb6uRM1iDxZqQMNEbX.jpg')
    `,
   
  }}
/>

        
        <div className="relative z-10 pt-24">
          <div className="container mx-auto px-4 flex flex-col items-center my-12">
            <img src={logo} alt="ZQG" className="h-8 sm:h-12 md:h-16 w-auto duration-300 transform scale-110 object-contain opacity-80 hover:opacity-100" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wider uppercase text-left dm-serif-display-regular py-10">ROSTER 2k25</h1>
          </div>
        </div>
      </div>


      {/* Content section - pure black background */}
      <div className="bg-black pb-24">
        <div className="container mx-auto px-4 w-full md:w-2/3 lg:w-1/2">
          {filteredMembers.length > 0 ? (
            <div className="flex flex-col space-y-6">
              {filteredMembers.map((member) => (
                <div key={member.id} className="relative bg-gray-900 bg-opacity-40 rounded-lg overflow-hidden hover:bg-opacity-50 transition-all">
                  <div className="flex items-center py-4 px-4 border-b border-gray-800">
                    <div className="w-16 h-16 overflow-hidden rounded-full mr-6">
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow text-left">
                      <div className="uppercase text-xl font-bold text-white dm-serif-display-regular">{member.name}</div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <span className="mr-1 text-gray-500">
                          {member.designation === "Team Captain" ? "IT" : 
                           member.designation === "First in Command" ? "FIC" : "FIC"}
                        </span>
                        {member.inGameName}
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleMemberExpansion(member.id)} 
                      className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <ChevronDown 
                        className={`w-5 h-5 text-white transition-transform ${expandedMember === member.id ? "transform rotate-180" : ""}`} 
                      />
                    </button>
                  </div>
                  {expandedMember === member.id && (
                    <div className="py-4 pl-4 pr-4 bg-gray-900 bg-opacity-70 rounded-b-lg mt-0 text-left">
                      <div className="flex flex-col space-y-3">
                        <div className="text-gray-500 text-sm mt-1">{member.designation}</div>
                        {member.profession && (
                          <div className="text-gray-300">
                            <span className="text-gray-500 mr-2">Profession:</span>
                            {member.profession}
                          </div>
                        )}
                        <div className="text-gray-500 text-sm mt-1">{member.gamesInvolved.join(", ")}</div>
                        {member.socialMedia?.twitter && (
                          <a href={`https://twitter.com/${member.socialMedia.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <Twitter className="w-4 h-4 mr-2" />
                            <span>{member.socialMedia.twitter}</span>
                          </a>
                        )}
                        {member.socialMedia?.twitch && (
                          <a href={`https://twitch.tv/${member.socialMedia.twitch}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <Twitch className="w-4 h-4 mr-2" />
                            <span>{member.socialMedia.twitch}</span>
                          </a>
                        )}
                        {member.socialMedia?.instagram && (
                          <a href={`https://instagram.com/${member.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                            <Camera className="w-4 h-4 mr-2" />
                            <span>{member.socialMedia.instagram}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-900 bg-opacity-40 rounded-lg">
              <p className="text-gray-400">No team members found</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ModernTeamPage;