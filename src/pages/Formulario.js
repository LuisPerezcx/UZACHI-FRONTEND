import React from 'react'
import NavAdmin from '../components/NavAdmin'
import { Footer } from '../components/Footer'
import { InformacionDocumento } from '../components/InformacionDocumento'

export const Formulario = () => {
  return (
    <div>
        <NavAdmin></NavAdmin>
            <div style={{marginInline: '10%'}}>
                <div className='row'>
                  <div className='col-sm-6'>
                    <h2 className='size-font-title' > <span style={{color: 'var(--color-gris)', fontWeight:'bold' }}>FOLIO NUMERO:</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>27</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>/</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>38</span></h2>
                  </div>
                  <div className='col-sm-6 text-end'>
                    <h2 className='size-font-title' > <span style={{color: 'var(--color-gris)', fontWeight:'bold' }}>FOLIO PROGRESIVO:</span> <span className='size-font-subsubtitle' style={{color: 'var(--color-gris)'}}>3821353</span></h2>
                  </div>
                </div>
                <InformacionDocumento></InformacionDocumento>
            </div>
        <Footer></Footer>
    </div>
  )
}
