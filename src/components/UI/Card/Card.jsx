import React from 'react'

export const Card = ({character}) => {

  const { name, URL, quote } = character;

  return (
    <div key={name+1} className="card">
      <div className="header-card">
        <h2>{name}</h2>
      </div>
      <div className="main-card">
        <img src={URL} alt={name} />
      </div>
      <div className="footer-card">
        <p>{quote}</p>
      </div>
    </div>
  )
}
