export const checkLocal  = () => {
    try {
        if(localStorage.getItem('lists')){
            return true;
        }else {
            return false;
        }
    } catch (err) {
        console.log(err.name);
    }
}