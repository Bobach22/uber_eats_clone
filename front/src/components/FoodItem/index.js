import React from "react";
import ModalDialog from "./ModalDialog";

const FoodItem = React.forwardRef(({ data },ref) => {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <li>
      {open&&<ModalDialog handleOpen={handleOpen} isOpen={open} meal={data} />}
      <div className="cursor-pointer" onClick={handleOpen}>
        <div className="bg-white md:h-36">
          <div className="sm:hover:border-black sm:border border-b border-gray-400">
            <div className="flex flex-row">
              <div className="flex flex-1 flex-col sm:p-3 p-3 pl-0">
                <h2 className="font-normal text-base leading-6 mb-2">
                  <div
                    style={{
                      display: "-webkit-box",
                      "-webkit-line-clamp": "3",
                      "-webkit-box-orient": "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {data.name}
                  </div>
                </h2>
                <div
                  style={{
                    display: "-webkit-box",
                    "-webkit-line-clamp": "2",
                    "-webkit-box-orient": "vertical",
                    overflow: "hidden",
                  }}
                  className="h-8 text-sm leading-4 text-gray-800"
                >
                  {data.description}
                </div>

                <div className="flex mt-2 text-sm sm:text-base leading-4 font-light sm:font-normal flex-row">
                  <div>${data.price}</div>
                  <span>&nbsp; • &nbsp;</span>
                  <div>450 Cal</div>
                </div>
              </div>

              <div className="flex-shrink sm:p-0 py-3 relative">
                <img
                  className="flex-1 xs:w-40 xs:h-40 h-24  w-24 border border-gray-200 object-cover"
                  src={`/images/${data.image}`}
                  alt={data.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
});

export default FoodItem;
