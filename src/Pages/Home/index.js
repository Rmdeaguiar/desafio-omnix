import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../Components/Header'
import useClient from '../../Hooks/useClient'

function Home() {
  const navigate = useNavigate();
  const { fullAddress, setFullAddress } = useClient();
  const [cep, setCep] = useState('');
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (cep.length !== 8) {
      setError(true)
      return
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const responseCep = await response.json();

    if (!responseCep.logradouro) {
      setError(true)
      return
    }

    setFullAddress({ ...fullAddress, address: responseCep.logradouro, district: responseCep.bairro, city: responseCep.localidade, state: responseCep.uf });
    setError(false)
    navigate('/ofertas')
  }

  return (
    <>
      <Header />
      <div className="container-home">
        <h1>Seja bem vindo!</h1>
        <p>Digite o seu CEP abaixo para prosseguir</p>
        <form onSubmit={handleSubmit} >
          <input placeholder='CEP' value={cep} onChange={(e) => setCep(e.target.value)} ></input>
          <button>Prosseguir</button>
        </form>
        {error && <span>Insira um CEP válido</span>}
      </div>
      <Header />
    </>
  );

}

export default Home;
