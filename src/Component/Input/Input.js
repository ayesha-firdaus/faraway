import React from 'react'
import styles from "./Input.module.css"

export default function Input({setUnpacked,form,setForm,Unpacked}) {


 function unpackedHandler(e){
  e.preventDefault();
  const exists = Unpacked.find(el => el.item === form.item);
  console.log("length",form.item.length)
  if (!exists&&!form?.item?.length===0) {
    
  setUnpacked(prev=>[...prev,form])
 
  }
  else{
    setUnpacked((prev)=>prev.map((el)=>{
      if(el.item===form.item)
      {
        return {...el,quantity:+el.quantity+(+form.quantity)};
      }
      else{
        return el;
      }
    }))
  }
setForm({quantity:1,item:""})


  
}


function formDataHandler(e) {
  const { name, value } = e.target;


  // If the item doesn't exist in Unpacked, update the form state
   if(name==="item"||name==="quantity")
   {
    setForm(prevForm => ({ ...prevForm, [name]: value }));
   }
  }

  return (
    <div className={styles.input}>
    <div className={styles.header}>
      <div>
        <p className={styles.text}>What do you need for your 😍 trip?</p>
      </div>
      <div className={styles.output}>
      <select name='quantity' onChange={formDataHandler} className={styles.div} value={form?.quantity} >
     {Array.from({length:20},(_,i)=>{
     return <option value={i+1}>{i+1}</option>
     })}
     </select>
     <input type='text' placeholder='Item..' name='item' className={styles.item} value={form?.item}   onChange={formDataHandler}    />
      <button className={styles.btn} onClick={unpackedHandler}>Add</button>
      </div>
    </div>
    </div>
  )
}
