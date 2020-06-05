import React from 'react'
import useMagicColor from '../Hook/useMagicColor'
import './MagicBox.scss'

export default function MagicBox(props) {
    const color = useMagicColor()
    console.log(color)
    return (
        <div className="magic-box" style={{backgroundColor: color}}></div>
    )
}