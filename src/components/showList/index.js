import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getId } from "../../utils/getId";
import { deletelist } from "../../store/incomeExpeditureReducer";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import transformation from "../../utils/transformation";
import * as s from "./styles";

const ShowList = () => {
  let listdate = 0;

  const { list: lists } = useSelector((state) => state.incomeExpeditureReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showList, setShowList] = useState([]);

  const checkDate = (date) => {
    if (date !== listdate) {
      listdate = date;
      return true;
    } else {
      return false;
    }
  };

  const deleteList = (id) => {
    const deleteId = id;
    const list = lists
      .filter((list) => {
        return list.id !== deleteId;
      })
      .sort((a, b) => {
        return a.id - b.id;
      });
    localStorage.setItem("lists", JSON.stringify(list));
    let incomeId = getId("INCOME", 0);
    let expeditureId = getId("EXPEDITURE", 100);
    dispatch(deletelist({ list, incomeId, expeditureId }));
  };

  const onClickEditBtn = useCallback(
    (list) => {
      navigate("/addhistory", { state: list });
    },
    [navigate]
  );

  useEffect(() => {
    console.log(lists[0]);
    setShowList(lists[0]);
  }, [lists]);

  return (
    <>
      <s.UlWrapper>
        {showList &&
          showList.map((item) => {
            return (
              <Fragment key={item.id}>
                {checkDate(item.list.date) ? (
                  <s.Datelist>
                    {item.list.day}, {item.list.date}
                  </s.Datelist>
                ) : (
                  ""
                )}
                <s.ListWrapper>
                  <s.List>
                    <s.MoneyTypeAndLabel>
                      <s.MoneyType>{item.list.moneyType}</s.MoneyType>
                      <s.Label>{item.list.label}</s.Label>
                    </s.MoneyTypeAndLabel>
                    <s.Amount active={item.list.amount}>
                      {item.list.amount > 0
                        ? `+${transformation(item.list.amount)}`
                        : transformation(item.list.amount)}
                    </s.Amount>
                  </s.List>
                  <s.DeleteAndEditBox>
                    <s.DeleteBtn
                      onClick={() => deleteList(item.list.id, item.list)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </s.DeleteBtn>
                    <s.EditBtn onClick={() => onClickEditBtn(item.list)}>
                      <i className="far fa-edit"></i>
                    </s.EditBtn>
                  </s.DeleteAndEditBox>
                </s.ListWrapper>
              </Fragment>
            );
          })}
      </s.UlWrapper>
    </>
  );
};

export default ShowList;
