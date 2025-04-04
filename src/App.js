import React, { useState, useRef, useEffect } from "react";

// Fungsi untuk membuat elemen hati secara dinamis di layar
const generateHearts = () => {
  const hearts = [];
  for (let i = 0; i < 50; i++) {
    hearts.push(
      <div
        key={i}
        className="heart absolute text-red-500 animate-fall"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 2 + 3}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      >
        ❤️
      </div>
    );
  }
  return hearts;
};

const images = [
  "/images/a1.jpg",
  "/images/a2.jpg",
  "/images/a3.jpg",
  "/images/a4.jpg",
  "/images/a5.jpg",
];

function App() {
  const [key, setKey] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isButtonMoving, setIsButtonMoving] = useState(false); // State to control button movement
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup
  const audioRef = useRef(null); // Menggunakan ref untuk mengakses elemen audio
  const correctKey = "istillloveyou"; // Key yang benar untuk membuka surat

  const [showApology, setShowApology] = useState(false);

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleUnlock = () => {
    if (key === correctKey) {
      setIsUnlocked(true);
    } else {
      alert("Ciee salahh. Tanya aksa dulu yaa kalo mau bukaa");
    }
  };

  const handleGaMauClick = () => {
    setIsButtonMoving(true);
    setTimeout(() => setIsButtonMoving(false), 500);
  };

  const handleIyaDimaafinClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  useEffect(() => {
    if (isUnlocked && audioRef.current) {
      audioRef.current.play(); // Memulai audio saat surat terbuka
    }
  }, [isUnlocked]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-100">
      <div className="bg-white w-full max-w-3xl p-4 relative rounded-2xl">
        {/* Raining Love Animations */}
        {isUnlocked && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
              {generateHearts()}
            </div>
          </div>
        )}

        {!isUnlocked ? (
          <div>
            <h1 className="text-4xl font-extrabold text-center text-black p-4">
              ADA HADIAH NI BUAT KAMU
            </h1>
            <div className="flex justify-center mb-6">
              <img
                src="/images/beruangkado-cl.jpg"
                alt="Surat"
                className="h-1/2 w-1/2 md:w-3/4 lg:w-1/2 rounded-lg object-contain"
              />
            </div>

            <div className="p-6">
              <p className="text-center text-xl mb-4">
                Masukan kuncinya dibawah ini yaa
              </p>
              <input
                type="text"
                value={key}
                onChange={handleKeyChange}
                className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-black-500"
                placeholder="ketik kuncinya disini"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={handleUnlock}
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-2xl text-lg px-5 py-2.5 text-center"
                >
                  Buka Hadiah
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-center mb-4">BWAAAAA</h1>
            <div className="flex justify-center mb-6">
              <img
                src="/images/beruangkado.gif"
                alt="Surat GIF"
                className="h-1/2 w-1/2 md:w-3/4 lg:w-1/2 rounded-lg object-contain"
              />
            </div>
            <div className="p-6">
              <p className="text-xl font-semibold mb-4">
                Halo Sayang, Gimana kabar kamu hari inii? Cie yang lagi ganti puasa
                yaa
              </p>
              <p className="mb-4">
                Sebenerya ini aku bikin buat hadiah ulang tahun kamu si, tapi
                kemarin kita sempat berantem😔, jadi aku kasih sekarang aja deh.
                Nah, disini aku mau ngasih tau siapa si orang yang ada di hati
                aku selama ini. Liat nii
              </p>

              <div className="bg-red-50 p-4 rounded-lg shadow-sm mb-4">
                <div className="flex mb-6">
                  <img
                    src="/images/a6.jpg"
                    alt="Foto Profil"
                    className="mr-8 w-32 h-32 md:w-64 md:h-64 rounded-xl border-4 border-red-200 shadow-lg object-cover"
                  />
                  <img
                    src="/images/beruanghug.gif"
                    alt="Surat GIF"
                    className="h-[200px] w-[200px] rounded-lg object-contain "
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Kenalin dong ini cewe aku namanya Adine♥️
                </h2>
                <h3 className="font-semibold">
                  Kalo di WA aku namain Dinok🦖♥️
                </h3>
                <p className="text-gray-700">
                  Tau ga, bidadari yang cantik imut gemesin ini 🥰 bukan hanya
                  seseorang yang penting dalam hidupku, tapi dia adalah
                  perempuan yang ada di hatiku. Setiap kali aku berpikir tentang
                  masa depan, dia selalu ada di sana, menjadi bagian yang tak
                  terpisahkan dari setiap rencanaku. dia adalah orang yang
                  membuat dunia ini terasa lebih baik, lebih berarti. Aku ingin
                  orang lain tahu bahwa dia adalah perempuan yang aku sayangi,
                  yang aku jaga, dan yang selalu ada di hatiku. Karena bagi aku,
                  dia adalah segalanya.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
                <h2 className="text-2xl font-bold mb-2">
                  Fun Fact Cewe Aku Ini Unik, Mau Tau?🤫
                </h2>
                <ul className="list-disc pl-6">
                  <li className="text-gray-700">
                    Cewe aku ini orangnya SUKAAA BANGETTT NAMANYA PEDESS🔥
                  </li>
                  <li className="text-gray-700">
                    Cewe aku ini dulu orangnya malu malu tauu pas pertama kali
                    ketemu aku LUCU BANGET KANN🤭
                  </li>
                  <li className="text-gray-700">
                    Bidadari ini seneng banget yang namanya KUEE, kalo lagi
                    telponan suka kedengeran lagi ngunyah wkwkwkw
                  </li>
                  <li className="text-gray-700">
                    Kerjaannya tidur muluuu tapi rajinn orangnyaa gercepp
                  </li>
                  <li className="text-gray-700">
                    Kalo foto itu bibirnya selalu manyuunnn, pas manyun aja udah
                    bikin aku meleleh🫠 apalagi pas senyum
                  </li>
                  <li className="text-gray-700">
                    Terus juga kalo dibilang cantik pasti jawabnya "BOHONGG,
                    BOTEE", lucuu banget dah pokoknya
                  </li>
                  <li className="text-gray-700">
                    Dia ini care banget sama aku kalo aku belum bangun dia suka
                    nyariinn, ngucapin selamat pagi/malam, suka nanyain aku lagi
                    ngapain♥️
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-2">
                  Mau Liat Ga Ni Foto Cantik Imutnya Dia🤭
                </h2>
                <p className="text-gray-700">
                  Jadi foto-foto yang dia kasih aku simpan di galeri sama di
                  sinii, liatt cantik banget kann🥰. (ada 1 foto lagi tapi ntar
                  orangnya ngamuk kalo ditaro disinii hehehe)
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowApology(!showApology)}
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-lg px-5 py-2.5 text-center"
                >
                  {showApology
                    ? "Sembunyikan Permintaan Maaf"
                    : "Permintaan Maaf Dari Aku"}
                </button>
              </div>

              {/* Apology Message */}
              {showApology && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    Aku menyadari bahwa aku telah mengecewakanmu, dan aku
                    benar-benar menyesal telah membuatmu merasa cemburu dan
                    kesepian. Itu bukanlah niatku sama sekali. Aku sangat
                    menghargaimu, dan aku tahu aku harus lebih baik lagi dalam
                    menjaga perasaanmu. Aku mengerti bahwa sikapku mungkin telah
                    membuatmu merasa terabaikan, dan itu sangat menyakitkan. Aku
                    ingin kamu tahu, dengan sepenuh hati, aku bertekad untuk
                    memperbaiki semuanya. Aku tak ingin lagi membuatmu merasa
                    sendirian atau terluka. Aku berjanji akan lebih peka
                    terhadap perasaanmu dan berusaha menjadi pribadi yang lebih
                    baik. Kamu sangat berarti bagiku, dan aku ingin kita bisa
                    lebih bahagia bersama. Aku memohon maaf dengan tulus dan
                    berharap kamu memberi aku kesempatan untuk memperbaiki diri.
                    💖
                  </p>
                </div>
              )}

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleIyaDimaafinClick}
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-lg px-5 py-2.5 text-center"
                >
                  Iya dimaafin
                </button>
                <button
                  onClick={handleGaMauClick}
                  className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-2xl text-lg px-5 py-2.5 text-center ${
                    isButtonMoving
                      ? "transform translate-x-20 transition-all duration-500"
                      : ""
                  }`}
                >
                  Ga Mau
                </button>
              </div>

              {/* Popup "MAKAASII SAYANGG" */}
              {showPopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-extrabold text-center text-pink-500">
                      MAKAASII SAYANGG ❤️
                    </h1>
                  </div>
                </div>
              )}

              {/* Elemen Audio */}
              <audio ref={audioRef} autoPlay loop>
                <source src="/audios/nothingbm.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
