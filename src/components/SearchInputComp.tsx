import React from 'react';

import { ReactComponent as IconArrowRight } from "./../assets/images/icon-arrow.svg";

import { TGeoReqParams } from '../types/geo-types';

const regexIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const regexDomain = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

interface ComponentProps {
  onSubmit: (value: TGeoReqParams) => void;
  error?: string;
  fetching?: boolean;
}

function SearchInputComp(props: ComponentProps) {
  const [value, setValue] = React.useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      validate();
    }
  }

  const validate = () => {
    if (!props.fetching) {
      if (regexIP.test(value)) {
        props.onSubmit({
          ipAddress: value,
          domain: null,
        });
      } else if (regexDomain.test(value)) {
        props.onSubmit({
          ipAddress: null,
          domain: value,
        });
      } else {
        props.onSubmit({
          ipAddress: null,
          domain: null,
        });
      }
    }
  }

  return (
    <div className="w-full">
      <div className="shadow-sm h-14 w-full flex items-center">
        <input
          type="search"
          placeholder="Search for any IP address or domain"
          aria-label="Search for any IP address or domain"
          title="Search for any IP address or domain"
          className="h-full w-full text-item px-6 bg-white rounded-tl-xl rounded-bl-xl focus:outline-none"
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          onKeyDown={handleKeyDown}
          disabled={props.fetching}
        />

        <div className={`h-full w-16 flex items-center justify-center bg-darker-gray rounded-tr-xl rounded-br-xl hover:opacity-80 cursor-pointer ${props.fetching && 'opacity-80 cursor-not-allowed'}`}
          onClick={() => validate() }>
          <IconArrowRight className=""/>
        </div>
      </div>

      <div className="h-8 mt-2">
        {
          props.error &&
          <span className="text-sm font-bold text-white italic">❌🚫 { props.error } ❌🚫 </span>
        }
      </div>
    </div>
  )
}

export default React.memo(SearchInputComp);
