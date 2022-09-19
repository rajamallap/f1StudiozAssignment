import React from 'react'
import Form from 'react-bootstrap/Form';
function Category() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem', marginLeft: '30%', width: '100%' }}>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                <p style={{ width: 'inherit', marginTop: '0.5rem', color: '#34495E', fontSize: '14px', lineHeight: '16.41px' }}>Select Category</p>
                <Form.Select aria-label="Default select example">
                    <option>Residential Door</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                <p style={{ width: 'inherit', marginTop: '0.5rem', color: '#34495E', fontSize: '14px', lineHeight: '16.41px' }}>Select Series</p>
                <Form.Select aria-label="Default select example">
                    <option>Canyon Ridge® Collection</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                <p style={{ width: 'inherit', marginTop: '0.5rem', color: '#34495E', fontSize: '14px', lineHeight: '16.41px' }}>Door Type</p>
                <Form.Select aria-label="Default select example">
                    <option>CAN212</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
        </div>
    );
}

export default Category