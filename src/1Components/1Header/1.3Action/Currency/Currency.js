import React, { useCallback, useEffect, useRef, useState } from "react";
// import CartModal from "../../1.1CartModal/CartModal";
import style from "./Currency.module.scss";
import ArrowIcon from "../../../../icons/Vector.svg";
import EmptyCart from "../../../../icons/CircleIcon.svg";
import { CartHeader } from "../Cart/CartHeader";

export const Currency = () => {
  // const [activeModal, setActiveModal]=useState(false)
  const [currentValue, setCurrentValue] = useState({
    id: "dollar",
    currencySymbol: "$",
    shortName: "USD",
  });
  const [isOpenSelectList, setIsOpenSelectList] = useState(false);

  const listRef = useRef(null);

  const items = [
    { id: "dollar", currencySymbol: "$", shortName: "USD" },
    { id: "euro", currencySymbol: "€", shortName: "EUR" },
    { id: "uan", currencySymbol: "¥", shortName: "JPY" },
  ];

  const itemOnClick = (item) => {
    setCurrentValue(item);
    setIsOpenSelectList(false);
  };

  const outsideHandler = useCallback(
    (e) => {
      if (
        isOpenSelectList &&
        !(listRef && listRef.current && listRef.current.contains(e.target))
      ) {
        setIsOpenSelectList(true);
      }
    },
    [isOpenSelectList]
  );

  useEffect(() => {
    window.addEventListener("click", outsideHandler);
    return () => {
      window.removeEventListener("click", outsideHandler);
    };
  }, [outsideHandler]);


  return (
    <div className={style.page}>
      <div
        className={style.Wrapper}
        onClick={() => {
          setIsOpenSelectList(!isOpenSelectList);
        }}
      >
        <div className={style.Text}>
          {""}
          {currentValue.currencySymbol}
          <img
            className={isOpenSelectList ? style.Open : style.Arrow}
            src={ArrowIcon}
          />
        </div>
        {isOpenSelectList && (
          <div ref={listRef} className={style.List}>
            {items.map(
              (item) => {
                const { currencySymbol, shortName } = item;
                return (
                  <div
                    className={style.ItemList}
                    onClick={() => {
                      itemOnClick(item);
                    }}
                  >
                    {`${currencySymbol} ${shortName}`}
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
      <div className={style.Empty}>
      {/* <img src={EmptyCart} onClick={()=>{setActiveModal(!activeModal)}}/> */}
      {/* <CartModal trigger={activeModal}/> */}
      <CartHeader/>
      </div>
    </div>
  );
};

