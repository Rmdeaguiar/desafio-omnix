import { useState } from 'react';

function useClientProvider() {
    const [fullAddress, setFullAddress] = useState({ address: '', district: '', city: '', state: '' })

    return {
        setFullAddress,
        fullAddress,
    }
}

export default useClientProvider;