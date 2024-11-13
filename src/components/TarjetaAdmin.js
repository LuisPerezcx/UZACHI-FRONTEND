import React from 'react'

export const TarjetaAdmin = ({ imgSrc, title, description, buttons }) => {
    return (
        <div className='col-12 col-sm-6 col-md-3' style={{ paddingRight: '1em', paddingLeft: '1em' }}>
            <div className='tarjeta-border'>
                <img src={imgSrc} style={{ width: '90px' }} alt={title} />
                <h2 className='size-font-subtitle mt-2' style={{ color: 'black' }}>{title}</h2>
                <p className='size-font-subsubtitle'>{description}</p>
                <div>
                    {buttons.map((button, index) => (
                        <button key={index} className='btn btn-success' onClick={button.onClick}>
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
