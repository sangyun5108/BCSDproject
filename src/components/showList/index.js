import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import transformation from "../../utils/transformation";
import useFilterList from "../../hooks/useFilterList";
import { getId } from "../../utils/getId";
import { deletelist } from "../../store/incomeExpeditureReducer";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";

const ShowList = () => {
  let newLists;
  let listdate = 0;

  const { list: lists } = useSelector((state) => state.incomeExpeditureReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { type, month, year } = useSelector((state) => state.showListReducer);

  newLists = useFilterList(type, month, year);

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

  return (
    <>
      <s.UlWrapper>
        {newLists.map((list, index) => {
          return (
            <Fragment key={index}>
              {checkDate(list.date) ? (
                <s.Datelist>
                  {list.day}, {list.date}
                </s.Datelist>
              ) : (
                ""
              )}
              <s.ListWrapper>
                <s.List>
                  <s.MoneyTypeAndLabel>
                    <s.MoneyType>{list.moneyType}</s.MoneyType>
                    <s.Label>{list.label}</s.Label>
                  </s.MoneyTypeAndLabel>
                  <s.Amount active={list.amount}>
                    {list.amount > 0
                      ? `+${transformation(list.amount)}`
                      : transformation(list.amount)}
                  </s.Amount>
                </s.List>
                <s.DeleteAndEditBox>
                  <s.DeleteBtn onClick={() => deleteList(list.id, list)}>
                    <i className="fas fa-trash-alt"></i>
                  </s.DeleteBtn>
                  <s.EditBtn onClick={() => onClickEditBtn(list)}>
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
