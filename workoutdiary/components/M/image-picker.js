import React, { useRef, useState } from 'react'
import "./image.css"
import Image from 'next/image';
function ImagePicker({label,name}) {
    const [pickImage,setPickImage] = useState();
    const imageinput = useRef();
    function handlePickClick (){
     imageinput.current.click();
    }
    function handleImageChange(event){
  const file = event.target.files[0];
  if (!file ) {
    setPickImage(null);
    return;
  }
  const filereader = new FileReader();
  filereader.onload = ()=>{
  setPickImage(filereader.result);
  };
  filereader.readAsDataURL(file)
    }
  return (
    <div className="picker">
        <label htmlFor={name}>{label}</label>
        <div className="controls">
            <div className="preview">
            {!pickImage && <p>no image pick</p> }
            {pickImage && <Image src={pickImage} alt="image user" fill/>}
            </div>
            <input 
            className="input"
             type="file"
             id={name}
             accept='image/png , image/jpeg'
             name={name}
             ref={imageinput}
             
             onChange={handleImageChange}
             required
             />
             <button className="button" style={{color:"black"}}type="button" onClick={handlePickClick}>
              Pick an Image
             </button>
        </div>
    </div>
  )
}

export default ImagePicker