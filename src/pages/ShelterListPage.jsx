// src/pages/ShelterListPage.jsx
import { useState, useEffect } from 'react';
import { Building2, Search, MapPin } from 'lucide-react';
import { sheltersAPI } from '../services/api';
import ShelterCard from '../components/shelters/ShelterCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function ShelterListPage({ onNavigate }) {
  const [shelters, setShelters] = useState([]);
  const [filteredShelters, setFilteredShelters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchShelters();
  }, []);

  useEffect(() => {
    filterShelters();
  }, [searchTerm, shelters]);

  const fetchShelters = async () => {
    try {
      setLoading(true);
      const response = await sheltersAPI.getAll();
      if (response.success) {
        setShelters(response.data);
        setFilteredShelters(response.data);
      }
    } catch (error) {
      console.error('Error fetching shelters:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterShelters = () => {
    let filtered = shelters;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(shelter =>
        shelter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (shelter.city && shelter.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (shelter.address && shelter.address.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredShelters(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 pb-20 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Building2 size={40} />
            <h1 className="text-3xl md:text-4xl font-bold">
              Daftar Shelter
            </h1>
          </div>
          <p className="text-center text-green-100 text-lg">
            Shelter terpercaya yang siap membantu hewan membutuhkan
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari shelter atau lokasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan <span className="font-semibold text-gray-800">{filteredShelters.length}</span> shelter
          </p>
        </div>

        {/* Shelters Grid */}
        {loading ? (
          <LoadingSpinner />
        ) : filteredShelters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShelters.map((shelter) => (
              <ShelterCard key={shelter.id} shelter={shelter} onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Building2 size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">
              Tidak ada shelter yang ditemukan
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
