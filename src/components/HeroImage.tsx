import React from "react";
import imageOmile from '../assets/image-omelette.jpeg';


const HeroImage: React.FC = () => {
    return (
        <>
         <img className="h-full" src={imageOmile} alt="" />
        </>
    ) 
}

export default HeroImage;
