const MakeList = ({type,lists,month}) => {
    let newLists;
    if(type==='INCOME'||type==='EXPEDITURE'){
        newLists = lists.filter((list)=>list.type===type&&list.month===month)
    }else{
        newLists = lists.filter((list)=>list.month===month)
    }
    return (
          <>
            <h2>{month}</h2>
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