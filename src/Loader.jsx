import { useState, useEffect } from 'react';

function SimpleLoader() {
  const [loading, setLoading] = useState(true); // Dastlab yuklanayotgan holat

  useEffect(() => {
    // 3 sekund davomida yuklanish holatini saqlab turadi
    const timer = setTimeout(() => {
      setLoading(false); // 3 sekunddan keyin yuklanish tugaydi
    }, 3000);

    return () => clearTimeout(timer); // Toza to'xtatish funksiyasi
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">Yuklanmoqda...</div> // Yuklanish paytida ko'rsatiladi
      ) : (
        <div>Kontent yuklandi!</div> // Yuklangandan keyin ko'rsatiladi
      )}
    </div>
  );
}

export default SimpleLoader;
