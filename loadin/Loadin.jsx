import { useState, useEffect } from 'react';

export default function LoadingPage() {
  const [loading, setLoading] = useState(true); // Dastlab yuklanish holati true

  useEffect(() => {
    // 1.5 sekunddan keyin yuklanish sahifasini yo'q qilish
    const timer = setTimeout(() => {
      setLoading(false); // Yuklanish tugagach false bo'ladi
    }, 1500); // 1.5 sekund

    return () => clearTimeout(timer); // Toza to'xtatish funksiyasi
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          {/* Yuklanish animatsiyasi */}
          <div className="spinner"></div>
          <p>Sayt yuklanmoqda...</p>
        </div>
      ) : (
      )}
    </>
  );
}
