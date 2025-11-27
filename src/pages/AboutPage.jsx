// src/pages/AboutPage.jsx
import { Heart, PawPrint, Building2, Users, Award, Target } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: PawPrint,
      title: 'Temukan Hewan',
      description: 'Jelajahi berbagai hewan yang membutuhkan rumah dan keluarga baru'
    },
    {
      icon: Building2,
      title: 'Shelter Terpercaya',
      description: 'Bekerja sama dengan shelter yang terverifikasi dan terpercaya'
    },
    {
      icon: Heart,
      title: 'Adopsi Mudah',
      description: 'Proses adopsi yang sederhana dan transparan'
    },
    {
      icon: Users,
      title: 'Komunitas',
      description: 'Bergabung dengan komunitas pecinta hewan'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Hewan Diadopsi' },
    { number: '50+', label: 'Shelter Partner' },
    { number: '5000+', label: 'Pengguna Aktif' },
    { number: '100%', label: 'Kepuasan' }
  ];

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
              Tentang Pet Finder
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Platform terpercaya untuk menghubungkan hewan peliharaan dengan keluarga yang tepat
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* Mission Section */}
        <section className="text-center">
          <div className="flex justify-center mb-6">
            <Target size={48} className="text-teal-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Misi Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pet Finder hadir untuk membantu hewan-hewan yang membutuhkan rumah menemukan keluarga 
            yang penuh kasih sayang. Kami percaya setiap hewan berhak mendapatkan kehidupan yang 
            layak dan penuh cinta. Melalui platform ini, kami menghubungkan shelter terpercaya 
            dengan calon pemilik yang bertanggung jawab.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Mengapa Pet Finder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-teal-100 p-4 rounded-full">
                      <IconComponent size={32} className="text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Dampak Kami
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <Award size={40} className="text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                Transparansi
              </h3>
              <p className="text-gray-600 text-center">
                Kami berkomitmen untuk menyediakan informasi yang jelas dan akurat tentang 
                setiap hewan dan shelter.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <Heart size={40} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                Kasih Sayang
              </h3>
              <p className="text-gray-600 text-center">
                Setiap keputusan kami didasarkan pada kesejahteraan dan kebahagiaan hewan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                Komunitas
              </h3>
              <p className="text-gray-600 text-center">
                Membangun jaringan yang kuat antara shelter, adopter, dan pecinta hewan.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Siap Membuat Perbedaan?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan orang yang telah memberikan rumah baru untuk hewan yang membutuhkan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
              Mulai Adopsi
            </button>
            <button className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-bold py-4 px-8 rounded-xl transition-all duration-200">
              Hubungi Kami
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
