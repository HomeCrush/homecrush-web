import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Crush() {
 
  const showToast = () => {
    toast("🔥You have a Crush!")
  }

  return (
    <div className="crush">
      <div>
        <button onClick={showToast}> Show Toast !</button>
        <ToastContainer limit={1}/>
      </div>
    </div>
  );
}








