import React from 'react'
import seriesData from '../api/seriesData.json';

const NetflixSeries = () => {
    return (
        <ul>
    {
        seriesData.map((data)=>{
  return (    
            <li  key={data.id}>
                <div>
                    <img src={data.img_url} alt="data" width="40%" height="40%" />
                </div>
                <h2>Name: {data.name}</h2>
                <h3>Rating: {data.rating}</h3>
                <p>Summary: {data.description}</p>
                <p>Grnre: {data.genre}</p>
                <p>Cast: {data.watch_url}</p>
                <a href={data.watch_url}><button>Watch Now</button></a>
            </li>
              )
        })
      }
    </ul>
    )}

export default NetflixSeries
