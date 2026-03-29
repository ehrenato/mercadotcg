import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLogin) {
      login(email, password);
    } else {
      register(name, email, password);
    }

    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="section-stack">
          <span className="eyebrow">MercadoTCG</span>
          <h1>{isLogin ? 'Entrar na conta' : 'Criar nova conta'}</h1>
          <p className="muted">Fluxo simplificado e pronto para futura integração com backend real.</p>
        </div>

        <form className="section-stack" onSubmit={handleSubmit}>
          {!isLogin && (
            <input className="input" value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu nome" required />
          )}
          <input className="input" value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="E-mail" required />
          <input className="input" value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Senha" required />
          <button type="submit" className="button">{isLogin ? 'Entrar' : 'Cadastrar'}</button>
        </form>

        <button type="button" className="link-button" onClick={() => setIsLogin((current) => !current)}>
          {isLogin ? 'Ainda não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
        </button>
      </div>
    </div>
  );
}
