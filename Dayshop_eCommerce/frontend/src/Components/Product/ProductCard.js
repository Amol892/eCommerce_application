import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

function ProductCard({items}) {

    const navigate = useNavigate();
    
    console.log(items)

    function saveData(){
        
    }
    

  return (
    <>
        
        {   
            
            items.map(obj=>{
                
                return(
                    
                    <div className='col-lg-4' style={{backgroundColor:'springgreen',borderRadius:20,width:500,marginRight:30,marginTop:10,}}>
                        <center>
                        <img src={obj["Image Src"]} width={400} height={400} alt='not found'></img>
                        <div style={{textAlign:'left',marginLeft:'10px',padding:5}}>
                        <center>
                        <h5 style={{alignItems: 'center',fontSize:25, backgroundColor:'lightcyan',borderRadius:10}}>{obj.Handle}</h5>

                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{width:330,fontSize:25, backgroundColor:'lightcyan',borderRadius:10}}>Price : {obj['Variant Price']}</div>
                            <button onClick={(e)=>{saveData(e.target.value)}} value={obj} style={{marginLeft:20,borderRadius:10,backgroundColor:'royalblue', padding:5, fontWeight:500}}>Add to cart</button>
                        </div>
                        </center>
                        </div>
                        
                        </center>      
                        
                    </div> 
                    
                )
                 
            })
        }
    
    
    
    
    </>
  )
}

export default ProductCard