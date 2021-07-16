import React from 'react';

const SkillCard = (props) => {
  return (
    <div className='skill'>
      <img src={props.logo} alt={props.name} />
      <p>{props.name}</p>
    </div>
  )
}

export default SkillCard;
