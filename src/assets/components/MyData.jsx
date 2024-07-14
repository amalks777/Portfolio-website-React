import Button from './Buttons.jsx';
import { Data } from '../../data.js';
import { useState } from 'react';

export default function MyData(){
  const [selected, setSelected] = useState('About');
  function handleSelect(selectedButton) {
    setSelected(selectedButton);
  }
    return(
        <section id='examples'>
        <menu>
         <Button isSelected={selected === 'About'} onSelect={() => handleSelect('About')}>About Me</Button>
         <Button isSelected={selected === 'Skills'} onSelect={() => handleSelect('Skills')}>Skills</Button>
         <Button isSelected={selected === 'Contact'} onSelect={() => handleSelect('Contact')}>Contact</Button>
        </menu>
        <div id="tab-content" className='bg-sky-500'>
           <h3>{Data[selected].title} <image src={Data[selected].image}></image></h3>
           <p>{Data[selected].description}</p>
           <h3>{Data[selected].Secondtitle}</h3>
           <h5>{Data[selected].education}</h5>
           <p>{Data[selected].college}</p>
           <p>{Data[selected].email}</p>
           <p>{Data[selected].github}</p> 
           <p>{Data[selected].framework}</p>
           <p>{Data[selected].version}</p> 
           <p>{Data[selected].basic}</p> 
           </div>
       </section>
    );
}