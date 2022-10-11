import { useContext } from 'react';
import ClientContext from '../Context/ClientContext';

function useClient() {
    return useContext(ClientContext);
}

export default useClient;