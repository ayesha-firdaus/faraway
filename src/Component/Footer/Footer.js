import React from 'react'
import styles from "./Footer.module.css"
export default function Footer({Unpacked}) {
  
 const countvalue= Unpacked.reduce((acc,el)=>
  {
   console.log(el)
    if(el.checkedvalue===true)
    {
     return acc+=1;
      } 
    else{
      return acc;
    } 
  }
  ,0);
  console.log(countvalue,Unpacked.length);
  let percentage=0
 percentage=countvalue*100/Unpacked.length;
  console.log(percentage)
  return (
    <div className={styles.footer}>
 <p className={styles.text}>{percentage===100?"you have packed all the items for trips ✈️":` 💼 You have ${Unpacked.length} items on your list, and you already packed ${countvalue} (${Math.round(percentage?percentage:0)}%)`}</p>
    </div>
  )
}
