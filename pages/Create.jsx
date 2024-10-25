import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({ username: false, password: false, confirmPassword: false });
  const navigate = useNavigate();

  const validate = () => {
    const isValidUsername = /^[A-Z]/.test(username);
    const isValidPassword = password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password);
    
    const newErrors = {
      username: !isValidUsername,
      password: !isValidPassword,
      confirmPassword: password !== confirmPassword,
    };

    setErrors(newErrors);

    return !newErrors.username && !newErrors.password && !newErrors.confirmPassword;
  };

  const handleSubmit = () => {
    if (isChecked) {
      if (validate()) {
        alert('Ma’lumotlar to’g’ri!');
        navigate('/');
      } else {
        alert('Xato! Iltimos, qaytadan tekshiring.');
      }
    } else {
      alert('Iltimos, shartlarni qabul qiling.');
    }
  };

  return (
    <div className="create">
      <div className="box">
        <p>Akkaunt yaratish</p>
        <div className="center">
          <span>
            <p>User</p>
            <input
              type="text"
              placeholder="User..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? 'error' : ''}
            />
          </span>
          <span>
            <p>Parol</p>
            <input
              type="password"
              placeholder="Parol..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error' : ''}
            />
          </span>
          <span>
            <p>Parollni qaytib yozing</p>
            <input
              type="password"
              placeholder="Parol..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirmPassword ? 'error' : ''}
            />
          </span>
        </div>
        <div className="bottom">
          <div>
          <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
          <p>Maxfiylik shartlari</p>
          </div>
          <button onClick={handleSubmit}>Yaratish</button>
        </div>
      </div>
    </div>
  );
}
