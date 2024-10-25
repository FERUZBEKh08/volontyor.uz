import { useState } from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [region, setRegion] = useState('Toshkent');

    const Func = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        // Trim qilish
        const trimmedName = name.trim();
        const trimmedSurname = surname.trim();
        const trimmedEmail = email.trim();

        if (trimmedName && trimmedSurname && emailRegex.test(trimmedEmail)) {
            alert('Arzizangiz qabul qilindi, adminlar siz bilan bog‘lanishadi.');
        } else {
            alert('Iltimos, barcha maydonlarni to‘ldiring va emailingiz @gmail.com bilan tugashi kerak.');
        }
    };

    return (
        <div className="Be">
            <div className="top">
                <span>
                    <p>Ismingiz</p>
                    <input
                        type="text"
                        placeholder="Ism kiriting..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </span>

                <span>
                    <p>Familya</p>
                    <input
                        type="text"
                        placeholder="Familya kiriting..."
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </span>

                <span>
                    <p>Gmail</p>
                    <input
                        type="email"
                        placeholder="Gmail kiriting..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </span>

                <span>
                    <p>Hudud</p>
                    <select value={region} onChange={(e) => setRegion(e.target.value)}>
                        <option value="Toshkent">Toshkent</option>
                        <option value="Andijon">Andijon</option>
                        <option value="Fargona">Fargona</option>
                        <option value="Namangan">Namangan</option>
                        <option value="Sirdaryo">Sirdaryo</option>
                        <option value="Samarqand">Samarqand</option>
                        <option value="Jizzax">Jizzax</option>
                        <option value="Navoiy">Navoiy</option>
                        <option value="Buxoro">Buxoro</option>
                        <option value="Xorazm">Xorazm</option>
                        <option value="Surxondayo">Surxondayo</option>
                        <option value="Qoraqalpoqiston">Qoraqalpoqiston</option>
                        <option value="Qashqadaryo">Qashqadaryo</option>
                    </select>
                </span>

                <button onClick={Func}>Ariza yuborish</button>
            </div>
        </div>
    );
};

export default App;
