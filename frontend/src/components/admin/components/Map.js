import React from 'react'
import {ComposableMap,Geographies,Geography,Marker} from "react-simple-maps";

const Map = () => {
  const geolocation_url = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json"

  const cityData = [
    {
      name: 'Toronto',
      code: 1234,
      coordinates: [19.4273,-99.1419]
    }
  ]

  return (
    <ComposableMap projectionConfig={{ rotate: [0, 0, 5],scale: 200 }}>
      <Geographies geography={geolocation_url}>
        {
          ({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="rgb(56, 152, 245)" />
            )
          )
        }
      </Geographies>
      {
        cityData.map((data)=>{
          <Marker coordinates={data.coordinates}>
            <circle fill="#F53" stroke="#FFF" r='10' />
            <text textAnchor="middle" style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>{data.name}</text>
          </Marker>
        })
      }
      <Marker coordinates={[-44.660731, 63.591931]}>
        <circle fill="#F53" stroke="#FFF" r='10' />
        <text textAnchor="middle" y="-20" style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>Halifax</text>
      </Marker>
    </ComposableMap>
  )
}

export default Map