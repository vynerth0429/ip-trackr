export type TGeoPosition = {
  lat: number,
  lng: number,
}

export type TGeo = {
  "ip": string,
  "location": {
      "country": string,
      "region": string,
      "city": string,
      "lat": number,
      "lng": number,
      "postalCode": string,
      "timezone": string,
      "geonameId": number
  },
  "domains": string[],
  "as": {
      "asn": number,
      "name": string,
      "route": string,
      "domain": string,
      "type": string
  },
  "isp": string,
  "proxy": {
      "proxy": boolean,
      "vpn": boolean,
      "tor": boolean
  }
}

export type TGeoReqParams = {
  ipAddress: string | null,
  domain: string | null,
}