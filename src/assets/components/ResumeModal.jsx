import resume from './Resume.jpeg';
import { forwardRef, useImperativeHandle,useRef } from "react";

const ResumeModal = forwardRef(function ResumeModal({},ref){
    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();  
            }
        }
    })
    return(
        <dialog ref={dialog} className="resume-modal">
        <h2>Resume</h2>
            <div className="resume">
            <img src={resume}/>
            </div>
            <form method="dialog">
                <button>
                    Close
                </button>
            </form>
        </dialog>
    )
});
export default ResumeModal;