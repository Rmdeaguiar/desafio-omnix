import './styles.css';
import Header from '../../Components/Header'
import { useNavigate } from 'react-router-dom'
import useClient from '../../Hooks/useClient'

function Offers() {

    const navigate = useNavigate();
    const { fullAddress } = useClient();
    const offers = [{ id: 1, name: 'Oferta 1' }, { id: 2, name: 'Oferta 2' }, { id: 3, name: 'Oferta 3' }]

    return (
        <>
            <Header />
            <div className="container-offers">
                <p>{`O seu endereço é: ${fullAddress.address}, ${fullAddress.district} - ${fullAddress.city} (${fullAddress.state})`}</p>
                <h2>Ofertas Disponíveis</h2>
                <div className="all-offers">
                    {offers.map((offer) => (
                        <div key={offer.id} className='each-offer'>
                            <h3>{offer.name}</h3>
                        </div>
                    ))}
                </div>
                <button onClick={() => navigate('/')}>Ops, errei meu cep!</button>
            </div>
            <Header />
        </>
    );
}

export default Offers;
