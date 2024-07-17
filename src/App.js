import Header from "./Component/Header/Header";
import Input from "./Component/Input/Input";
import Main from "./Component/Main/Main";
import Footer from "./Component/Footer/Footer";
import { useState } from "react";
function App() {
  const [Unpacked,setUnpacked]=useState([]);
  const [form,setForm]=useState({quantity:1,item:"",id:Date.now(),checkedvalue:false})
console.log(Unpacked)
  
  return (
    <div className="app">
        <Header />
         <Input setUnpacked={setUnpacked} form={form} setForm={setForm} Unpacked={Unpacked} />
         <Main Unpacked={Unpacked} setUnpacked={setUnpacked} form={form} setForm={setForm} />
         <Footer Unpacked={Unpacked} />
    </div>

  );
}

export default App;
