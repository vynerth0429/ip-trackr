import React from 'react';

interface ComponentProps {
  label: string,
  value: number | string,
}

function GeoItemComp(props: ComponentProps) {
  return (
    <div className="h-full flex flex-col space-y-2 items-center md:items-start">
      <div>
        <span className="uppercase font-bold text-sm text-dark-gray tracking-widest">
          { props.label }
        </span>
      </div>
      <div className="text-center md:text-left">
        <span className="font-medium text-2xl text-darker-gray">
          { props.value }
        </span>
      </div>
    </div>
  )
}

export default GeoItemComp;
