# Pet Finder 🐾

Platform web modern untuk menemukan dan mengadopsi hewan peliharaan dari shelter terpercaya. Dibangun sebagai Progressive Web App (PWA), aplikasi ini dapat diinstal di perangkat Anda dan berfungsi penuh bahkan saat offline.

## ✨ Fitur Utama

- 🏠 **Home**: Tampilan featured pets dan shelters
- 🐕 **Daftar Hewan**: Jelajahi semua hewan yang tersedia untuk diadopsi dengan fitur pencarian dan filter
- 📋 **Detail Hewan**: Informasi lengkap tentang hewan, termasuk galeri foto interaktif
- 🏢 **Daftar Shelter**: Temukan shelter terpercaya di berbagai lokasi
- 📍 **Detail Shelter**: Informasi lengkap shelter dan hewan-hewan yang tersedia
- ℹ️ **About**: Informasi tentang Pet Finder dan misi kami
- 📱 **PWA Support**: Install aplikasi di perangkat mobile atau desktop
- 🔄 **Offline Mode**: Akses konten bahkan tanpa koneksi internet

## 🎨 Teknologi

- **React 19** - Library UI modern
- **Vite** - Build tool yang super cepat
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide React** - Icon library yang indah
- **PWA** - Progressive Web App support
- **RESTful API** - Integrasi dengan backend Pet Finder API

## 🚀 Memulai Proyek

### Prerequisites

Pastikan Anda sudah menginstal:
- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** atau **yarn**

### Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/pet-finder.git
   cd pet-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi API**
   
   Edit file `src/services/api.js` untuk mengatur base URL API:
   ```javascript
   const API_BASE_URL = 'http://localhost:4000/api'; // atau URL API Anda
   ```

4. **Jalankan development server**
   ```bash
   npm run dev
   ```
   
   Aplikasi akan berjalan di `http://localhost:5173`

## 🏗️ Build untuk Produksi

```bash
npm run build
```

Hasil build akan tersedia di folder `dist/`

## 📱 Testing PWA di Mobile

### 1. Build aplikasi
```bash
npm run build
```

### 2. Install serve globally
```bash
npm install -g serve
```

### 3. Jalankan production server
```bash
serve -s dist
```

### 4. Akses dari mobile
- Pastikan laptop dan HP terhubung ke WiFi yang sama
- Cari alamat Network di terminal (contoh: `http://192.168.1.10:3000`)
- Buka browser di HP dan akses alamat tersebut
- Tap tombol "Add to Home Screen" untuk install PWA

## 📂 Struktur Folder

```
src/
├── components/
│   ├── common/           # Komponen reusable
│   ├── navbar/           # Komponen navigasi
│   ├── pets/             # Komponen terkait pets
│   ├── shelters/         # Komponen terkait shelters
│   └── splash/           # Komponen splash screen
├── pages/                # Halaman-halaman utama
│   ├── HomePage.jsx
│   ├── PetListPage.jsx
│   ├── PetDetailPage.jsx
│   ├── ShelterListPage.jsx
│   ├── ShelterDetailPage.jsx
│   ├── AboutPage.jsx
│   └── SplashScreen.jsx
├── services/
│   └── api.js            # API service layer
├── assets/               # Gambar dan aset statis
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## 🔌 API Integration

Aplikasi ini mengintegrasikan dengan Pet Finder API. Dokumentasi lengkap API tersedia di `PetFinder-API-Docs.md`.

### Endpoints Utama:
- `GET /api/pets` - List semua pets
- `GET /api/pets/:id` - Detail pet
- `GET /api/shelters` - List semua shelters  
- `GET /api/shelters/:id` - Detail shelter

## 🎨 Customization

### Mengubah Color Theme

Semua warna menggunakan Tailwind CSS. Untuk mengubah tema warna, edit nilai warna di seluruh komponen. Color scheme saat ini menggunakan **Teal/Cyan** untuk pets dan **Green/Emerald** untuk shelters.

## 📄 Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Jalankan ESLint

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat issue atau pull request.

## 📝 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👥 Tim

Dibuat dengan ❤️ untuk membantu hewan menemukan rumah yang penuh kasih sayang.

---

**Pet Finder** - *Connecting Pets with Loving Homes* 🐾


## Memulai Proyek

Pastikan Anda sudah menginstal Node.js di sistem Anda (disarankan v18+).

### Buat Proyek React dengan Vite
Buka terminal di lokasi folder yang Anda inginkan, lalu jalankan perintah ini untuk membuat proyek baru.

```bash
npm create vite@latest resep-nusantara -- --template react
```
lalu masuk ke direktory proyek

```bash
cd resep-nusantara
```
### Instalasi Semua Dependensi

```bash
npm install lucide-react

npm install -D vite-plugin-pwa

npm install tailwindcss @tailwindcss/vite
```
### Mulai Koding

Setup awal selesai! Sekarang Anda bisa mulai membuat struktur folder (src/components, src/pages, src/data) dan mengisi file-file kode seperti HomePage.jsx, makanan.js, dan lainnya.

### Mode Pengembangan

```bash
npm run dev
```

### Mode Produksi

```bash
npm run build
```

### Pengujian PWA di Mobile

#### Bangun aplikasi dengan perintah npm run build

#### install serve untuk menjalankan folder dist hasil build

```bash
npm install -g serve
```

#### jalankan server produksi

```bash
serve -s dist
```
Perhatikan alamat Network yang muncul di terminal (misal: http://192.168.1.10:3000).

Akses dari HP Anda:

Pastikan laptop dan HP Anda terhubung ke jaringan Wi-Fi yang sama.

Buka browser Chrome di HP Anda dan ketikkan alamat Network tadi.

Aplikasi akan terbuka, dan Anda akan melihat opsi untuk menginstalnya
