'use client';

import { useState } from 'react';

interface SearchBarProps {
    onSearchResults: (searchTerm: string) => void;
}

export default function SearchBar({ onSearchResults }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearchResults(value);
    };

    return (
        <div className="mb-8">
            <div className="flex w-full max-w-md mx-auto">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search Pokémon by name..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
        </div>
    );
}