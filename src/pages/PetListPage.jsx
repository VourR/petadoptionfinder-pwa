// src/pages/PetListPage.jsx
import { useState, useEffect } from 'react';
import { PawPrint, Search } from 'lucide-react';
import { petsAPI } from '../services/api';
import PetCard from '../components/pets/PetCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function PetListPage({ onNavigate }) {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    filterPets();
  }, [searchTerm, selectedType, pets]);

  const fetchPets = async () => {
    try {
      setLoading(true);
      const response = await petsAPI.getAll();
      if (response.success) {
        setPets(response.data);
        setFilteredPets(response.data);
      }
    } catch (error) {
      console.error('Error fetching pets:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPets = () => {
    let filtered = pets;

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(pet => pet.type === selectedType);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(pet =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (pet.description && pet.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPets(filtered);
  };

  const petTypes = [...new Set(pets.map(pet => pet.type))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 pb-20 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <PawPrint size={40} />
            <h1 className="text-3xl md:text-4xl font-bold">
              Daftar Hewan
            </h1>
          </div>
          <p className="text-center text-teal-100 text-lg">
            Temukan teman baru yang sempurna untuk Anda
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari nama hewan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              >
                <option value="all">Semua Jenis</option>
                {petTypes.map((type) => (
                  <option key={type} value={type} className="capitalize">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan <span className="font-semibold text-gray-800">{filteredPets.length}</span> hewan
          </p>
        </div>

        {/* Pets Grid */}
        {loading ? (
          <LoadingSpinner />
        ) : filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <PawPrint size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">
              Tidak ada hewan yang ditemukan
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
