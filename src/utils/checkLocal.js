export const checkLocal  = () => {
    try {
        if(localStorage.getItem('lists')){
            return true;
        }else {
            return false;
        }
    } catch (err) {
        localStorage.clear();
        console.log(err.name);
    }
}