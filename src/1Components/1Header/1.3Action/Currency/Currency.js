import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./Currency.module.scss";
import ArrowIcon from "../../../../icons/Vector.svg";
import { CartHeader } from "../Cart/CartHeader";
import { useDispatch, useSelector } from "react-redux";
import { currentCurrency, setCurrentVallue } from "../../../../2Redux/Product/reducer";

export const Currency = () => {
  const symbol = useSelector(currentCurrency)
  const dispatch = useDispatch()
  const [isOpenSelectList, setIsOpenSelectList] = useState(false);

  const listRef = useRef(null);

  const items = [
    { id: "dollar", currencySymbol: "$", shortName: "USD" },
    { id: "euro", currencySymbol: "€", shortName: "EUR" },
    { id: "uan", currencySymbol: "¥", shortName: "JPY" },
  ];

  const itemOnClick = (item) => {
    dispatch(setCurrentVallue(item))
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
          {symbol.currencySymbol}
          <img
            className={isOpenSelectList ? style.Open : style.Arrow}
            src={ArrowIcon} alt='img'
          />
        </div>
        {isOpenSelectList && (
          <div ref={listRef} className={style.List}>
            {items.map(
              (item) => {
                const { currencySymbol, shortName} = item;
                return (
                  <div
                    className={style.ItemList}
                    onClick={() => {
                      itemOnClick(item);
                    }}
                  >
                    {`${currencySymbol} ${shortName} `}
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
      <div className={style.Empty}>
        <CartHeader />
      </div>
    </div>
  );
};

