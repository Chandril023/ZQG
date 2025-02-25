import React, { useState, useEffect } from "react";
import axios from "axios";

const PremierLeagueTable = () => {
  const [tableData, setTableData] = useState([{
    username: "chandril",
    team: "manu",
    matchesPlayed: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsConceded: 0,
    goalsScored: 0
  }]);

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
                    <th className="px-6 py-3 text-left tracking-wider">Username</th>
                    <th className="px-6 py-3 text-left tracking-wider">Team</th>
                    <th className="px-6 py-3 text-left tracking-wider">MP</th>
                    <th className="px-6 py-3 text-left tracking-wider">W</th>
                    <th className="px-6 py-3 text-left tracking-wider">D</th>
                    <th className="px-6 py-3 text-left tracking-wider">L</th>
                    <th className="px-6 py-3 text-left tracking-wider">GF</th>
                    <th className="px-6 py-3 text-left tracking-wider">GA</th>
                    <th className="px-6 py-3 text-left tracking-wider">GD</th>
                    <th className="px-6 py-3 text-left tracking-wider">Pts</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800">
                  {tableData.map((team, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-black bg-opacity-20' : ''}`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">{team.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.team}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.matchesPlayed}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.wins}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.draws}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.losses}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.goalsScored}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.goalsConceded}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.goalsScored - team.goalsConceded}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{team.wins * 3 + team.draws}</td>
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