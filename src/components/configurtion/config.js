import React from 'react'
import Card from 'react-bootstrap/Card';
import icn from './Icons/rightArrow.png';
import './style.css';
function Config() {
    const datas = [{ title: 'Configure your door from scratch', desc: 'Residential, Commerical, Entry doors' }, { title: 'Parts / Openers', desc: 'Order Parts and Openers' }, { title: 'Direct Item Entry', desc: 'Order Parts / Openers using a Product ID' }, { title: 'Choose from favourites', desc: 'Re-order door from your favourites ' }]

    return (

        datas.map((itm) => {
            return <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Card className='crd'>
                    <Card.Body>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '70%', marginTop: '0.3rem' }}>
                                <b className='titles'>{itm.title}</b>
                                <p style={{ color: '#8894A0' }}>{itm.desc}</p>
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                <img src={icn} />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        })
    )
}

export default Config