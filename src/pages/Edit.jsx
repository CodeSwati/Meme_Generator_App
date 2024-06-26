import React, { useState , createRef} from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

function Edit() {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    console.log(params.get('url'));

    const memeRef = createRef();

    const addText = ()=>{
        setCount(count + 1)
    }
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div style={{width:'600px', border:'1px solid', padding:'30px'}} ref={memeRef} className='meme mt-5 mb-5'>
            <img src={params.get('url')} width='250px' />
            {
                Array(count).fill(0)
                .map(e=> <Text/>
                )
            }
        </div>

        <div>
            <button onClick={addText} 
            style={{border:'none', padding:"10px 15px", borderRadius:'10px',
                backgroundColor:"goldenrod", color:'white', marginRight:'20px'}}
            >
                Add Text
            </button>

            <button variant="success" onClick={e=> exportComponentAsJPEG(memeRef)}
            style={{border:'none', padding:"10px 15px", borderRadius:'10px',
                backgroundColor:"goldenrod", color:'white'}}
            >Save
            </button>
        </div>
        
    </div>
  )
}

export default Edit