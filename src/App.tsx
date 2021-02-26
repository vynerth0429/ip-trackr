import React from 'react';

import IMGHeader from './assets/images/pattern-bg.png';

import { API } from './api';

import { TGeo, TGeoReqParams } from './types/geo-types';

import MapComp from './components/MapComp';
import SearchInputComp from './components/SearchInputComp';
import GeoDetailComp from './components/GeoDetailComp';

function App() {
  const [geo, setGeo] = React.useState<TGeo>();
  const [error, setError] = React.useState<string>('');
  const [fetching, setFetching] = React.useState<boolean>(false);

  const getGeolocation = async (reqParams: TGeoReqParams) => {
    setFetching(true);

    try {
      const params = {
        apiKey: process.env.REACT_APP_GEO_API_KEY,
        ...reqParams
      };

      const endpoint = API.convertJsonToParams(params);

      const res = await API.get<TGeo>('?' + endpoint);
      setGeo(res);
    } catch (error) {
      if (error?.data?.messages) {
        setError(error.data.messages)
      }
    }

    setFetching(false);
  };

  React.useEffect(() => {
    getGeolocation({
      ipAddress: null,
      domain: null,
    });
  }, [])

  return (
    <div className="h-auto md:h-screen flex flex-col justify-between">
      <div
        className="relative h-500 md:max-h-80 md:h-80 flex-none"
        style={{
          backgroundImage: "url(" + IMGHeader + ")",
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 500px'
          // backgroundSize: 'auto'
        }}>

        <div className="absolute z-9999 lg:-bottom-20 left-0 right-0 px-4 flex flex-col items-center">
          <div className="text-center mb-8 mt-16 lg:mt-0">
            <span className="text-3xl font-medium text-white">
              IP Address Tracker
            </span>
          </div>

          <div className="text-center w-full md:max-w-screen-sm mb-4">
            <SearchInputComp
              onSubmit={getGeolocation}
              error={error}
              fetching={fetching}/>
          </div>

          <div className="container min-h-40 w-full bg-white rounded-3xl">
            {
              geo && <GeoDetailComp geo={geo}/>
            }
          </div>
        </div>
      </div>

      <div className="h-500 md:flex-auto">
        {
          geo ? <MapComp geo={geo}/> : <div className="h-full bg-gray-400"></div>
        }
      </div>
    </div>
  );
}

export default App;
