const appReducer = (state, action) =>{

    switch (action.type) {
        case 'CHANGE_LANGUAGE' :{
            return {
                ...state,
                language:action.payload,
            }
        }

       case 'DARK_THEME':{

        return {
            ...state,
            darkMode:action.payload,
        }
       } 
       case 'CHANGE_THEME':{

        return {
            ...state,
            theme: action.payload,
        }
       }
    }
}

export default appReducer;