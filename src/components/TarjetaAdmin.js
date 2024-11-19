import React from 'react';
import { Link } from 'react-router-dom';

export const TarjetaAdmin = ({ imgSrc, title, description, buttons }) => {
    return (
        <div className='col-12 col-sm-6 col-md-3' style={{ paddingRight: '1em', paddingLeft: '1em' }}>
            <div className='tarjeta-border' style={{ height: '100%' }}>
                <img src={imgSrc} style={{ width: '90px' }} alt={title} />
                <h2 className='size-font-subtitle mt-2' style={{ color: 'black' }}>{title}</h2>
                <p className='size-font-subsubtitle'>{description}</p>
                <div>
                    {buttons.map((button, index) => (
                        button.link ? (
                            <Link key={index} to={button.link}>
                                <button className='btn btn-success'>{button.label}</button>
                            </Link>
                        ) : (
                            <button 
                                key={index} 
                                className='btn btn-success' 
                                onClick={button.onClick}
                            >
                                {button.label}
                            </button>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};
