import React from 'react';
import styles from "./Main.module.css"
import List from '../Footer/List/List';
import { useState } from 'react';
export default function Main({Unpacked,setUnpacked,form,setForm}) {
  const [sortby,setsortBy]=useState("input");
  let sorteditem;
  if (sortby === "input") sorteditem = Unpacked;

  if (sortby === "description")
  sorteditem = Unpacked?.slice()
      .sort((a, b) => a.item.localeCompare(b.item));

  if (sortby === "packed")
  sorteditem = Unpacked?.slice()
      .sort((a, b) => Number(a.checkedvalue) - Number(b.checkedvalue));
  function clearHnadler(){
    const confirmed=window.confirm("do you really want to delete all items");
    if(confirmed)setUnpacked([])
  }
  return (

    <div className={styles.div}>
    <div className={styles.main}>
    <ul className={styles.list}>
     {sorteditem?.map((el,i)=><List item={el} index={el.id} setUnpacked={setUnpacked} form={form} setForm={setForm} Unpacked={Unpacked} />)}
     </ul>
     <div className={styles.sorting}>
    <select className={styles.btn} value={sortby} onChange={(e)=>setsortBy(e.target.value)}>
      <option value="input">Sort on input order</option>
      <option value="description">Sort on description </option>
      <option value="packed">Sort by packed status</option>
    </select>
    <button className={styles.btn} onClick={clearHnadler}>Clear List</button>
    </div>
    </div>
    </div>
  )
}
