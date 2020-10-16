import React from "react";
import Slider from "react-slick";
// import { GlobalContext } from "../../context/GlobalContext";
import Card from "../Grid/Card";



export const Slick = React.forwardRef(({data},ref) => {


  // const {restaurants}=React.useContext(GlobalContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    swipetoSlide:false,
    // afterChange:function(currentIndex){
    //        const slides2show=settings.slidesToShow
    //       //  setIndex(currentIndex);
    //       console.log(props.foodData)
    //        switch(currentIndex){
    //         case 0: setBgLight(prevState=>({...prevState,left:!prevState.left}))
    //        break;
           
    //        case Math.ceil(props.foodData.length/slides2show)+1:
    //          setBgLight(prevState=>({...prevState,right:!prevState.right}))
    //        break;

    //        default:
    //         setBgLight(prevState=>({...prevState,right:false,left:false}))
    //        }
          
    // },
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        },
      },
    ],
  };
  return (
    <div className="relative mt-5 sm:-px-3" >
      {data&&
      <Slider {...settings} className="-mr-6" ref={ref} > 
       {data.map((item)=>(
         <Card key={item.id} data={item}/>
       ))}
       
      </Slider>}
    </div>
  );
});
export default Slick;
