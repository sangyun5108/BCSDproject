const months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];

const MakeList = ({type,lists,month,year}) => {
    let newLists;
    if(type==='INCOME'||type==='EXPEDITURE'){
        newLists = lists.filter((list)=>list.type===type&&list.month===month&&Number(list.year)===year)
    }else{
        newLists = lists.filter((list)=>list.month===month&&Number(list.year)===year)
    }
    return (
          <>
            <h2>{months[month]}</h2>
            <h3>{type}</h3>
            {newLists.map((list)=>{
                return(
                    <li key={list.id}>{list.label} {list.amount}</li>
                )
            })}
          </>
       );
}//종류에따른 다른 리스트를 return해주는 함수

export default MakeList;