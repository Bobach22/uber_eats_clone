import React from "react";
import Modal from "react-modal";
// import {useTranslation} from 'react-i18next';
import axios from 'axios'

const styles = {
  content: {
    top: "80px",
    bottom: "80px",
    left: "50%",
    right: "50%",
    transform: "translate(-50%)",
    borderRadius: 0,
    padding: 0,
    border:0,
    width: "600px",
    height: "fit-content",
    overflowY: "auto",
    marginBottom:'80px'
  },
};

Modal.setAppElement("#root");

const ModalDialog = ({meal,handleOpen,isOpen}) => {

// const {t} = useTranslation();

    const [quantity,setQuantity]=React.useState(1);
    // localStorage.clear()
    
    const addToCart=()=>{
      console.log(meal);
       const mealData={
            id:meal.id,
            quantity:quantity,
            name:meal.name,
            subtotal:quantity*meal.price
                      }
            
                      axios.post('http://localhost:8000/orders',mealData).then(
                        response=>{
                          console.log(response);
                        }
                      ).catch(err=>console.log(err));
     
    }

    return (
    
      <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestOpen={handleOpen}
        onRequestClose={handleOpen}
        style={styles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
      >
        <div className="">
          <div className="flex flex-col">
            <div className="relative pb-2/3">
              <img
                className="absolute w-full h-full object-cover"
                src={`/images/${meal.image}`}
              />
              <button onClick={handleOpen} className="flex items-center shadow-sm justify-center absolute z-50 bg-white left-4 top-4 w-12 h-12 rounded-full"><svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg></button>
            </div>
            <h1 className="text-gray-900 text-xl my-4 px-4">{meal.name} </h1>
            <span className="text-sm text-gray-700 p-4">
              {meal.description}
            </span>
            <div className="flex border-t border-gray-300 p-4">
              <div className="flex mr-4 ites-center ">
                <button onClick={()=>{quantity>1?setQuantity(quantity-1):setQuantity(1)}} className="flex w-12 h-12 focus:outline-none items-center justify-center text-xl bg-gray-300 p-3 rounded-full">
                  -
                </button>
                <span className="w-8 flex items-center justify-center">{quantity}</span>
                <button onClick={()=>{setQuantity(quantity+1)}} className="flex w-12 h-12 focus:outline-none items-center justify-center text-xl bg-gray-300 p-3 rounded-full">
                  +
                </button>
              </div>
              <button onClick={addToCart}

                className="flex-1 items-center justify-center text-xl focus:outline-none font-semibold  py-3 text-white bg-gray-900">
                Add {quantity} to cart
              </button>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default ModalDialog
