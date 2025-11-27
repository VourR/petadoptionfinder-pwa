// src/components/DesktopNavbar.jsx
import logoUrl from '../../assets/LOGORN.png';

export default function DesktopNavbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'pets', label: 'List Hewan' },
    { id: 'shelters', label: 'Shelter List' },
    { id: 'about', label: 'About' }
  ];

  return (
    <nav className="hidden md:block shadow-lg border-b border-blue-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <img
                src={logoUrl}
                alt="Pet Adoption Finder Logo"
                className="w-12 h-12 object-contain filter drop-shadow-md transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-teal-600 to-slate-800 bg-clip-text text-transparent">
              Pet Adoption Finder
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-3 text-base font-semibold transition-all duration-200 border-b-2 ${
                  currentPage === item.id
                    ? 'text-teal-600 border-teal-500'
                    : 'text-slate-600 border-transparent hover:text-teal-500 hover:border-teal-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
         
        </div>
      </div>
    </nav>
  );
}