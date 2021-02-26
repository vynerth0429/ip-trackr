import React from 'react';

import { TGeo } from '../types/geo-types';

import GeoItemComp from './GeoItemComp';

interface ComponentProps {
  geo: TGeo,
}

function GeoDetailComp(props: ComponentProps) {
  return (
    <div className="shadow-md w-full h-full flex flex-col md:flex-wrap md:flex-row md:items-start lg:space-x-8 px-10 py-8">
      <div className="md:flex-40 lg:flex-1">
        <GeoItemComp
          label={'Ip address'}
          value={props.geo.ip}/>
      </div>

      <div className="self-stretch py-2">
        <div className="w-px h-full bg-gray-200"></div>
      </div>

      <div className="md:ml-8 md:flex-40 lg:flex-1 lg:ml-0 ">
        <GeoItemComp
          label={'Location'}
          value={props.geo.location.region + ', ' + props.geo.location.city + ' test 1 t2'}/>
      </div>

      <div className="self-stretch py-2 md:hidden">
        <div className="w-px h-full bg-gray-200"></div>
      </div>

      <div className="md:flex-40 md:mt-8 lg:mt-0 lg:flex-1">
        <GeoItemComp
          label={'Timezone'}
          value={'UTC ' + props.geo.location.timezone}/>
      </div>

      <div className="self-stretch py-2">
        <div className="w-px h-full bg-gray-200"></div>
      </div>

      <div className="md:ml-8 md:flex-40 md:mt-8 lg:ml-0 lg:mt-0 lg:flex-1">
        <GeoItemComp
          label={'Isp'}
          value={props.geo.isp}/>
      </div>
    </div>
  )
}

export default GeoDetailComp;
