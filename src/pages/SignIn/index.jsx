import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loading, setLoading } = useAuth();

  function handleSignIn() {
    signIn({email, password});
  }

  return (
    <Container>
      <div>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        <h1>Food Explorer</h1>
      </div>

      <Form>
        <legend>Faça login</legend>   
        <Input 
          type="email" 
          label="email" 
          title="Email" 
          placeholder="seuemail@email.com"
          onChange={e => setEmail(e.target.value)}
          required
        />

        <Input 
          type="password" 
          label="password" 
          title="Senha" 
          onChange={e => setPassword(e.target.value)}
          minLength="6"
          required 
        />

        <Button 
          title={loading ? "Entrando" : "Entrar"} 
          onClick={handleSignIn}
          disabled={loading}
        />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
