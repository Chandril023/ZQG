import React from 'react';
import logo from '../components/photos/zero.png';
const Announcements = () => {
  // Sample announcements data
  const announcements = [
    { id: 1, title: "Happy", icon: "LEC", count: 4 },
    { id: 2, title: "Finally here", icon: "Store", count: 12 },
    { id: 3, title: "Need information about this water bottle", icon: "FNC", count: 2 },
    { id: 4, title: "[Berlin] Sony INZONE VCT EMEA Kickoff T...", icon: "VCT", count: 5 },
    { id: 5, title: "Third match of the LEC", icon: "LEC", count: 2 },
 
  ];

  // Icon components mapping
  const IconComponent = ({ type }) => {
    switch (type) {
      case 'LEC':
        return <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">🎮</div>;
      case 'Store':
        return <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">🛍️</div>;
      case 'FNC':
        return <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">🔶</div>;
      case 'VCT':
        return <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">🎯</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black/95 text-white rounded-lg p-6 min-h-full">
      {/* Header */}
      <div 
  className="flex items-center justify-between mb-6 bg-cover bg-center p-4 rounded-lg"
  style={{ backgroundImage: `url('https://static.videezy.com/system/resources/thumbnails/000/012/113/original/warm-fire-embers-creating-glowing-waves-on-darkness-in-4k.jpg')` }}
>
  <h2 className="text-2xl font-bold tracking-wider text-white">ANNOUCEMENTS</h2>
  <div className="w-8 h-8">
    <img src={logo} alt="ZQG" className="w-full h-full object-contain opacity-80" />
  </div>
</div>


      {/* Subheader */}
      <div className="text-gray-400 mb-4">Latest Discussions</div>

      {/* Announcements list */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div 
            key={announcement.id} 
            className="flex items-center justify-between py-2 hover:bg-white/5 transition-colors rounded px-2 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <IconComponent type={announcement.icon} />
              <span className="text-sm text-gray-200 hover:text-orange-500 transition-colors line-clamp-1">
                {announcement.title}
              </span>
            </div>
            <span className="text-sm text-gray-400">
              {announcement.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;