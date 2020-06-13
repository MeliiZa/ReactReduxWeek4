import { DELETE_USER } from '../actions/actionTypes';

const initialState={
    users:[
        {
          name: "Aaron",
          id: 1,
        },
        {
          name: "Jamie",
          id: 2,
        },
      ],
    };

    export default function (state = initialState, action){
        switch(action.type){
            case DELETE_USER:


                let filteredArray = state.users.filter((user) => {
                    if(user.id !== action.payload){
                        return user;

                    }

                });
                
                return{
                    ...state,
                    users: filteredArray,
                };


                
            //map,filter,reduce(Use in an existent array, after is  done its going to give you a new array)
            //we passed in an ID
            //we need to take the current state array
            //we need to filter out the ID that was passed in
            default:
                return state;

        }

    }

