import React from 'react'
import "./button.scss"

const Button : React.FC<{text: string, isOutlined?: boolean, onClick: Function}> = ({text, isOutlined, onClick}) => {
  return (
    // <div className='app__button fill'>{text}</div>
    <div className={`app__button ${isOutlined ? `outlined` : `fill`}`}  onClick={() => onClick()}>{text}</div>
    
  )
}

export default Button

//`{${}}`
//if(beo > tan)  {beo gioi hon tan}
//{(beo > tan) ? beo gioi hon tan : beo kem hon tan}
//{isOutlined ? outlined : fill}