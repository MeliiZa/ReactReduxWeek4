import{ DELETE_USER} from  './actionTypes';

export function deleteUser(id){
    
    return function(dispatch){
        dispatch({
            type: DELETE_USER,
            payload: id,

        })
    }
}