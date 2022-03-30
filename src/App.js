import './App.css';
import { motion } from "framer-motion";
import { useState } from 'react';
function App() {

  const [open, setOpen] = useState(false);
  return (

    <div className="App">

      <motion.div transition={{layout:{duration:1,type:"spring"}}} style={{borderRadius:'1rem',boxShadow:'0px 10px 30px rgba(0,0,0,0.5)'}} layout onClick={() => setOpen(!open)} className='card'>
        <motion.h2 layout="position">Framer Motion</motion.h2>
        {open && (<motion.div className='expand' initial={{opacity:0}}
        animate={{opacity:1}} transition={{duration:1}}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni maxime molestias explicabo similique iste harum voluptatum perspiciatis asperiores aut. Eos.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, temporibus.</p>
          <button>Hello</button>
        </motion.div>
        )
        }
      </motion.div>
    </div>
  );
}

export default App;
