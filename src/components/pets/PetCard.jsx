import { PawPrint, Calendar } from 'lucide-react';

export default function PetCard({ pet, onNavigate }) {
  const handleClick = () => {
    onNavigate('petDetail', pet.id);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
    >
      {/* Pet Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-100 to-cyan-100">
        {pet.image_url ? (
          <img
            src={pet.image_url}
            alt={pet.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <PawPrint size={64} className="text-teal-300" />
          </div>
        )}
        {/* Type Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-teal-600 capitalize">
          {pet.type}
        </div>
      </div>

      {/* Pet Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
          {pet.name}
        </h3>
        
        {pet.age && (
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Calendar size={16} className="mr-2" />
            <span>{pet.age} tahun</span>
          </div>
        )}

        {pet.description && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {pet.description}
          </p>
        )}

        <button 
          className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
