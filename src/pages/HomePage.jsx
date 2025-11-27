// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import { PawPrint, Building2, ArrowRight, Heart } from 'lucide-react';
import { petsAPI, sheltersAPI } from '../services/api';
import PetCard from '../components/pets/PetCard';
import ShelterCard from '../components/shelters/ShelterCard';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function HomePage({ onNavigate }) {
  const [pets, setPets] = useState([]);
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [petsResponse, sheltersResponse] = await Promise.all([
        petsAPI.getAll(),
        sheltersAPI.getAll()
      ]);
      
      if (petsResponse.success) {
        setPets(petsResponse.data.slice(0, 6));
      }
      if (sheltersResponse.success) {
        setShelters(sheltersResponse.data.slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Heart size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Perfect Pet
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-2xl mx-auto">
              Berikan rumah dan kasih sayang untuk hewan yang membutuhkan
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-16">
        {/* Featured Pets Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <PawPrint size={32} className="text-teal-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                Hewan Siap Diadopsi
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('pets')}
              className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              <span>Lihat Semua</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : pets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} onNavigate={onNavigate} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">
              Belum ada hewan tersedia
            </p>
          )}
        </section>

        {/* Featured Shelters Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Building2 size={32} className="text-green-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                Shelter Terpercaya
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('shelters')}
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              <span>Lihat Semua</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : shelters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shelters.map((shelter) => (
                <ShelterCard key={shelter.id} shelter={shelter} onNavigate={onNavigate} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">
              Belum ada shelter tersedia
            </p>
          )}
        </section>
      </main>
    </div>
  );
}