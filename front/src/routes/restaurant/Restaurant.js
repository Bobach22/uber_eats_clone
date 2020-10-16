import React from "react";
import Header from "../../components/Header";
import FoodItem from "../../components/FoodItem";
import SearchInput from "../../components/Input/SearchInput";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Cart from '../../components/Cart'
import {
  RestaurantContext,
  RestaurantContextProvider,
} from "../../context/RestaurantContext";
import { GlobalContext } from "../../context/GlobalContext";
import {Shimmer} from 'react-shimmer'




const Restaurant = (route) => {
  // const [width, setWidth] = React.useState(window.innerWidth);
  const [top, setTop] = React.useState(window.pageYOffset);

  const ref = React.createRef();
  const [fixed, setMenuVisibility] = React.useState(false);
  const handleScroll = () => setTop(window.pageYOffset);

  const [bottom, setBottom] = React.useState(0);
  const handleMenuVisibility = () => {
    setMenuVisibility(top > bottom);
  };

  const id = route.match.params.id;

  React.useLayoutEffect(() => {
    if (ref.current) {
      setBottom(ref.current.getBoundingClientRect().bottom);
    }
  }, [ref]);

  // React.useEffect(() => {
  //   const w = window.innerWidth;

  //   const handleResize = () => setWidth(w);
  //   window.addEventListener("resize", handleResize);

  //   return (_) => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });

  React.useEffect(() => {
    handleMenuVisibility();
    window.addEventListener("scroll", handleScroll);

    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);

  const { restaurants } = React.useContext(GlobalContext);
  const meta = restaurants.find(item => item.id ==id);
  console.log(restaurants);
  console.log(meta);
  console.log(id);

  
  // const [sectionId,setSectionId]=React.useState(0);
  const sectionRef=React.useRef();

  const handleNavigate=(ref)=>{
  window.scrollTo({
    behavior:"smooth",
    left:0,
    top:ref.current.offsetTop
  })
  

  }
 

  return (
    <RestaurantContextProvider restaurantId={id}>
      <Header />

      {/* {width < 1024 && <AddressBar />} */}

      <RestaurantBanner meta={meta} ref={ref} />

      <div className="px-4 lg:px-20">
        {
          <Menu
            className={`${
              fixed ? "fixed z-50 inset-0" : ""
            } h-20`}
            handleNavigate={()=>handleNavigate(sectionRef)}
          />
        }
        <FoodGrid ref={sectionRef}/>
       
      </div>
    </RestaurantContextProvider>
  );
};

export default Restaurant;

const RestaurantBanner = React.forwardRef((props, ref) => {
  let data = props.meta;
  console.log(data)
  if (!data) {
    let { meta } = React.useContext(RestaurantContext);
    console.log("meta from restaurant context");
    data = meta;
  } else {
    console.log("meta from Global Context");
  }
  let meta = data;

  if (meta) {
    return (
      <div>
        <div className="relative w-full">
          <div
            ref={ref}
            className="relative md:absolute pb-1/2 md:p-0 w-full md:h-full"
          >
            <ProgressiveImage
              src={`/images/${meta.image}`}
              placeholder="https://via.placeholder.com/550x480/e7e7e7"
            >
              {(src) => (
                <img
                  src={src}
                  className="absolute md:static w-full h-full object-cover"
                  alt={meta.name}
                />
              )}
            </ProgressiveImage>
            {/* <LazyLoadImage alt={meta.name} src={`/images/${meta.logo}`} className="absolute md:static w-full h-full object-cover"/> */}
          </div>

          <div className="relative flex-1 flex-col md:h-96">
            <div className="flex-1  md:h-20"></div>
            <div className="flex flex-row md:relative">
              <div className="flex flex-row items-center  bg-white py-5 sm:shadow-infobox w-full px-4 md:px-0">
                <div className="flex-shrink-0 lg:w-20 sm:h-0 md:w-4"></div>
                <div className="w-full">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl sm:leading-8 md:leading-10 font-normal">
                    {meta.name}
                  </h1>
                  <div className="text-sm leading-5 pt-2">
                    $ • {meta.category}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center pt-2">
                    <div className="flex flex-row pb-2 sm:pb-0">
                      <div className="text-sm leading-5">{meta.rating}</div>

                      <div className="ml-px text-sm leading-5 text-gray-600">
                        ({meta.review_count})
                      </div>

                      <div className="hidden sm:block">
                        &nbsp;&nbsp;•&nbsp;&nbsp;
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row text-sm leading-4 sm:items-center">
                      <div class="mt-1 sm:mt-0 sm:w-1/2">
                        View delivery time and booking fee.
                      </div>
                      <div className="h-1 sm:w-1 flex-shrink-0"></div>
                      <button className="flex font-medium text-sm text-green-500 focus:outline-none sm:inline-block">
                        Enter your delivery address
                      </button>
                    </div>
                  </div>
                  <div className="hidden"></div>
                  <div className="mt-4 leading-5 text-sm font-normal flex flex-row whitespace-no-wrap">
                    <div className="truncate ...">{meta.address}</div>
                    <span>&nbsp;•&nbsp;</span>{" "}
                    <Link
                      rel="nofollow"
                      to="/id"
                      className="text-sm leading-4 font-medium text-green-500"
                    >
                      More info
                    </Link>
                  </div>
                </div>
                <div className="flex-shrink-0 w-4  lg:w-10"></div>
              </div>
              <div className="flex-shrink-0 sm:flex-shrink sm:w-1/2 md:flex-shrink-0"></div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    );
  } else return <div>Loading</div>;
});


const Menu = (props) => {
  const { menu } = React.useContext(RestaurantContext);

   
  return (
    <div className={props.className}>
      <div className="flex h-20 overflow-x-scroll bg-white">
        <div className="flex">
          <nav role="navigation" class="flex">
            {menu.length>0 ?(<>{
              menu.slice(0, 6).map((item) => (
                <div key={item.id} className="flex">
                  <button className="text-sm font-normal pb-auto focus:outline-none" onClick={props.handleNavigate}>
                    {item.name}
                  </button>
                  <div className="flex w-10"></div>
                </div>
              ))}</>):(<div className="flex">{[0,1,2,3,4,5].map((val,idx)=>(
                <div key={idx} className="flex items-center mr-10"><Shimmer height={20} width={80} /></div>
              ))}</div>)}
          </nav>
          <div className="w-5"></div>
          <div className="flex relative">
           {menu.length>6&& 
            <div className="flex">
              <div className="flex items-center cursor-pointer">
                <button className="text-sm font-normal focus:outline-none">
                  More
                </button>
                <div className="w-2"></div>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="chevron-down w-6 h-6 pt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              
              <div className="absolute hidden">
                {menu.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer text-sm font-normal px-2"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>}
            {props.className.includes("fixed")&&<Cart />}
          </div>
        </div>
      </div>
    </div>

    );
};

const Grid=React.memo(({menu})=>{
  return (
    <div>
      <div className="flex">
        <ul className="w-full">
          {menu &&
            menu.map((item) => (
              <li key={item.id}>
                <div className="leading-6 font-medium pb-8 pt-12 text-xl">
                  {item.name}
                </div>
                <ul className="grid gap-0 sm:grid-cols-2 sm:col-gap-6 sm:row-gap-8   lg:grid-cols-3">
                  {item.meals.map((meal) => (
                    <FoodItem key={meal.id} data={meal} />
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
})

const FoodGrid = React.forwardRef((props,ref) => {
  const { menu } = React.useContext(RestaurantContext);
  return (
  <Grid menu={menu} />
  )
});

//   const AddressBar = () => {
//   const [inView, setInView] = React.useState(false);
//   const [address, setAddress] = React.useState("");

//   const handleAddress = (e) => setAddress(e.target.value);
//   const handleClick = () => setInView(!inView);
//   return (
//     <div>
//       <hr />
//       <div className="bg-white h-18 flex items-center py-auto px-4">
//         <div className="shadow-input bg-bg-input h-12 w-full flex items-center ">
//           <button
//             onClick={handleClick}
//             className="flex items-center w-full focus:outline-none"
//           >
//             <svg
//               className="flex-none location-marker w-6 h-6   m-2 ml-4"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//             <div className="text-gray-600 font-normal">
//               Enter your delivery address
//             </div>
//           </button>
//         </div>
//       </div>
//       {inView && (
//         <div className="fixed w-full h-full inset-0 z-50 bg-white">
//           <div className="p-2 w-full h-full  flex flex-col ">
//             <button
//               className="w-6 h-6 focus:outline-none"
//               onClick={handleClick}
//             >
//               <svg
//                 className="h-6 w-6 -ml-1"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//             <div className="text-2xl font-normal my-3">Deliver to</div>
//             <div className="bg-bg-input h-12 flex items-center px-3 shadow-input focus-within:shadow-input-focus">
//               <SearchInput
//                 name="address"
//                 value={address}
//                 handleChange={handleAddress}
//                 placeholder="Enter Delivery address"
//                 className="outline-none bg-transparent w-full "
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full mt-auto mb-4 bg-gray-400 h-12 focus:outline-none flex items-center justify-center text-gray-500"
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
