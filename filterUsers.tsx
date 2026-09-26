"use client";

import { useState } from "react"; // Fixed: capitalized State

type User = {
  id: number;
  name: string;
  username: string;
};

// Fixed: Component name capitalized (FilterUser)
export default function FilterUser({ users }: { users: User[] }) {
  const [searchTerm, setSearchTerm] = useState(""); // Fixed: useState

  // Filter logic based on the user's input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Filtered Results List */}
      <ul className="divide-y divide-slate-100 border border-slate-200 rounded-md bg-white">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="p-3 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-800">{user.name}</p>
              <p className="text-xs text-slate-500">@{user.username}</p>
            </li>
          ))
        ) : (
          <li className="p-3 text-sm text-slate-400 text-center">No users found</li>
        )}
      </ul>
    </div>
  );
}
