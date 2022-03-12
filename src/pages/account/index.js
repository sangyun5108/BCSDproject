import React from "react";
import ShowList from "../../components/showList";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";

const AccountBook = () => {
  const navigate = useNavigate();

  const onClickAdd = () => {
    navigate("/addhistory");
  };

  return (
    <>
      <ShowList />
      <s.AddHistoryBtn onClick={onClickAdd}>Add History</s.AddHistoryBtn>
    </>
  );
};

export default AccountBook;
