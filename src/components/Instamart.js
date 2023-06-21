import { useState } from "react";
import { render } from "react-dom";

const Instamart = function () {
  const [currentAccordian, setCurrentAccordian] = useState("accord1");
  const [isVisibleAcc1, setIsVisibleAcc1] = useState(true);
  const [isVisibleAcc2, setIsVisibleAcc2] = useState(false);

  console.log("render");

  const accordian = function (name) {
    setCurrentAccordian(name);
  };

  return (
    <div className="m-3 border-2 border-solid rounded-sm border-gray-200">
      <div className="mb-2">
        <h1
          className="font-bold text-xl border-2 border-solid rounded-sm border-gray-200 py-1 cursor-pointer"
          onClick={() => {
            accordian("accord1");
            setIsVisibleAcc2(false);
            setIsVisibleAcc1(!isVisibleAcc1);
          }}
        >
          Welcome to Accordian1
        </h1>
        {currentAccordian == "accord1" && isVisibleAcc1 && (
          <p className="p-1">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        )}
      </div>
      <div className="mb-2">
        <h1
          className="font-bold text-xl border-2 border-solid rounded-sm border-gray-200 py-1 cursor-pointer"
          onClick={() => {
            accordian("accord2");
            setIsVisibleAcc1(false);
            setIsVisibleAcc2(!isVisibleAcc2);
          }}
        >
          Welcome to Accordian2
        </h1>
        {currentAccordian == "accord2" && isVisibleAcc2 && (
          <p className="p-1">
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Where does it come from?
          </p>
        )}
      </div>
      <div>
        <h1
          className="font-bold text-xl border-2 border-solid rounded-sm border-gray-200 py-1"
          onClick={() => {
            accordian("accord3");
            setIsVisible(!isVisible);
          }}
        >
          Welcome to Accordian3
        </h1>
        {currentAccordian == "accord3" && isVisible && (
          <p className="p-1">
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). Where does it come from?
          </p>
        )}
      </div>
    </div>
  );
};

export default Instamart;
