import React, {Dispatch, SetStateAction} from 'react'
import AlgoliaPlaces from 'algolia-places-react';

interface Props {
    setCity: Dispatch<SetStateAction<string>>
}


const Input: React.FC<Props> = ({ setCity }): JSX.Element => {
    return (
        <AlgoliaPlaces
            className="flex-3 bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
            placeholder="Enter a city"
            options={{
                appId: process.env.ALGOLIA_APP_ID,
                style: false,
                apiKey: process.env.ALGOLIA_API_KEY,
                type: 'city',
                aroundLatLngViaIP: false
                // Other options from https://community.algolia.com/places/documentation.html#options
            }}
            onChange={e => setCity(e.suggestion.name)}/>
    )
}

export default Input
