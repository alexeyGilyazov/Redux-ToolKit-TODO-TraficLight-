import IconButton from '@mui/material/IconButton';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import React from 'react'


function InputButton({ onClick }) {
    return (
        <>
            <IconButton
                aria-label="fingerprint"
                color="success"
                onClick={onClick}>
                <span style={{ color: '#6c6c6c', marginLeft: 5 }}><AddCircleOutlineTwoToneIcon /></span>
            </IconButton>
            {/* <button onClick={onClick} type='submit'>{text}</button> */}
        </>
    )
}

export default InputButton