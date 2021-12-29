export const date = new Date();
export const nowyear = date.getFullYear();
export const nowmonth = date.getMonth()<10?`0${date.getMonth()+1}`:`${date.getMonth()+1}`;
export const nowdate = date.getDate()<10?`0${date.getDate()}`:`${date.getDate()}`;
export const WEEK = ['SUN','MON','TUE','WEN','THU','FRI','SAT'];
export const MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
export const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];