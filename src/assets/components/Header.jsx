import { useRef } from 'react';
import ResumeModal from './ResumeModal.jsx';
 
 export function Header(){
  const dialog = useRef();

function DownloadResume(){
dialog.current.open();

}
    return(
      <>
      <ResumeModal ref={dialog}/>
        <header className="font-sans font-bold">
        <h2 className='text-2xl'>Hello I'm</h2>
        <h1 className="bg-gradient-to-r from-sky-500 to-indigo-500">AMAL K S</h1>
        {/* <h1>AMAL K S</h1> */}
        <h2 className='mb-3 text-2xl'>A Web Developer</h2>
        <button onClick={DownloadResume} className='hover:bg-sky-500'>RESUME</button>
      </header>
      </>
    )
 }

