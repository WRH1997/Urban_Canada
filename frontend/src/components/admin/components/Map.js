// author: Nandkumar Kadivar

import React from 'react'
import {ComposableMap,Geographies,Geography,Marker} from "react-simple-maps";

const Map = (props) => {
  const geolocation_url = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json"
  const cityData = props.city_list

  return (
    <ComposableMap projectionConfig={{ rotate: [95, -45, 8],scale: 900 }} style={{backgroundColor: "rgb(117, 194, 246)"}}>
      <Geographies geography={geolocation_url}>
        {
          ({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#1F2937" />
            )
          )
        }
      </Geographies>
      {
        cityData.map((data)=>
          <Marker coordinates={data.coordinates}>
            <circle fill="#F53" stroke="#FFF" r='10' />
            <text textAnchor="middle" y="-20" style={{ fontFamily: "system-ui", fill: "#fff" }}>{data.name}</text>
          </Marker>
        )
      }
    </ComposableMap>
  )
}

export default Map