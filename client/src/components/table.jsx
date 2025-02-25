import React, { useState, useEffect } from "react";
import axios from "axios";

const PremierLeagueTable = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/admin/fetch-table");
        // Sort data by total points (you might want to implement a more complex sorting logic)
        const sortedData = response.data.sort((a, b) => {
          const pointsA = a.wins * 3 + a.draws;
          const pointsB = b.wins * 3 + b.draws;
          return pointsB - pointsA;
        });
        
        setTableData(sortedData.map((team, index) => ({
          ...team,
          position: index + 1,
          gd: team.goalsScored - team.goalsConceded,
          pts: team.wins * 3 + team.draws
        })));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching table data:", error);
        setError("Failed to fetch table data");
        setLoading(false);
      }
    };
    
    fetchTableData();
  }, []);

  if (loading) return <div className="text-center text-white bg-gray-900 min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500 bg-gray-900 min-h-screen flex items-center justify-center">{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
      <h1 className="text-lg text-gray-400 font-medium">2020-21 Season</h1>
      
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full text-sm text-gray-400">
                <thead className="bg-gray-800 text-xs uppercase font-medium">
                  <tr>
                    <th></th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">Club</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">UserName</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">MP</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">W</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">D</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">L</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">GS</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">GC</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">GD</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">Pts</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800">
                  {tableData.map((team, index) => (
                    <tr 
                      key={team.id || index} 
                      className={`${index % 2 === 0 ? 'bg-black bg-opacity-20' : ''}`}
                    >
                      <td className="pl-4">{team.position}</td>
                      <td className="pl-4">{team.position}</td>
                      <td className="pl-4">{team.position}</td>
                      <td className="flex px-6 py-4 whitespace-nowrap">a
                        <span className="ml-2 font-medium">{team.team}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.matchesPlayed}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.wins}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.draws}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.losses}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.goalsScored}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.goalsConceded}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.gd}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremierLeagueTable;