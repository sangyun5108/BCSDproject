import {useSelector} from 'react-redux';

const useFilterList = (type,month,year) => {
    console.log('useFilterList');
    let {list:lists} = useSelector((state)=>state.incomeExpeditureReducer);
    if(type==='INCOME'||type==='EXPEDITURE'){
        lists = lists.filter((list)=>list.type===type&&list.month===month&&Number(list.year)===year)

    }else{
        lists = lists.filter((list)=>list.month===month&&Number(list.year)===year)
    }
    lists.sort((a,b)=>{
        return a.date-b.date;
    })
    return lists;
}

export default useFilterList;