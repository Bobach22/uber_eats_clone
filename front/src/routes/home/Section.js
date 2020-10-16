import React from "react";
// import CardList from "../../components/List/CardList";
import Slick from "../../components/Slider";

const Section = ({ title, className,data }) => {
  const [width, setWidth] = React.useState(window.outerWidth);

  const handleResize = () => {
    setWidth(window);
  };

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  React.useEffect(() => {
    const debounceHandleResize = debounce(handleResize, 1000);
    window.addEventListener("resize", debounceHandleResize, { passive: true });

    return (_) => {
      window.removeEventListener("resize", debounceHandleResize, {
        passive: true,
      });
    };
  });

  const ref = React.createRef();
  const nextSlide = () => ref.current.slickNext();
  const prevSlide = () => ref.current.slickPrev();
  const [bg, setBg] = React.useState("");

  return (
    <section className={className}>
      <Heading
        bg={bg}
        nextSlide={nextSlide}
        title={title}
        prevSlide={prevSlide}
      />
      <Slick data={data} ref={ref} />
    </section>
  );
};

const PrevArrow = ({ onClick, bg }) => (
  <button
    onClick={onClick}
    className={`${
      bg.left ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200"
    } flex items-center rounded-1/2 focus:outline-none justify-center h-10  w-10`}
  >
    <div className="inline-block">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`${bg.left ? "text-gray-400" : ""} arrow-left w-6 h-6`}
      >
        <path
          fill-rule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </button>
);
const NextArrow = ({ onClick, bg }) => (
  <button
    onClick={onClick}
    className={`${
      bg.right ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200"
    } flex items-center rounded-1/2 focus:outline-none justify-center h-10 w-10`}
  >
    <div className="inline-block">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`${bg.right ? "text-gray-400" : ""} arrow-right w-6 h-6`}
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  </button>
);

export const Heading = ({ nextSlide, prevSlide, bg, title }) => (
  <div className="flex items-center flex-row mt-10 mb-6">
    <div className="flex-grow w-1/2">
      <div className="antialiased">
        <h2 className="leading-10 font-bold sm:text-4xl">{title}</h2>
      </div>
    </div>

    <div className="flex justify-end w-1/2">
      <div className="flex items-center flex-row">
        <PrevArrow bg={bg} onClick={prevSlide} />
        <div className="w-1"></div>
        <NextArrow bg={bg} onClick={nextSlide} />
      </div>
    </div>
  </div>
);

export default Section;
