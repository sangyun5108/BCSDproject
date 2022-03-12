import { createSlice } from "@reduxjs/toolkit";

export const incomeExpeditureReducer = createSlice({
  name: "incomeExpediture",
  initialState: {
    list: [],
  },
  reducers: {
    init: (state, action) => {
      const { list } = action.payload;
      state.list.push(list);
    },

    income: (state, action) => {
      const { amount, label, year, month, date, day, moneyType, incomeId } =
        action.payload;
      state.list.push({
        type: "income",
        amount: Number(amount),
        label,
        year,
        month,
        date,
        day,
        moneyType,
        incomeId,
      });
    },
    expediture: (state, action) => {
      const { amount, label, year, month, date, day, moneyType, expeditureId } =
        action.payload;
      state.list.push({
        type: "expediture",
        amount: -1 * Number(amount),
        label,
        year,
        month,
        date,
        day,
        moneyType,
        expeditureId,
      });
    },
    deletelist: (action) => {
      const { list, incomeId, expeditureId } = action.payload;
      return {
        list,
        incomeId,
        expeditureId,
      };
    },
    editlist: (action) => {
      const { list } = action.payload;
      return {
        list,
      };
    },
  },
});

export const { init, income, expediture, deletelist, editlist } =
  incomeExpeditureReducer.actions;
