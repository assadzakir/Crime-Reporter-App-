const INITIAL_CRIME_STATE ={
    isloaded:false,
    isProcessing:false,
    CrimeList:[]
};

const INITIAL_COMPLAIN_STATE ={
    isloaded:false,
    isProcessing:false,
    ComplainList:[]
};

const INITIAL_MISSING_STATE ={
    isloaded:false,
    isProcessing:false,
    MissingList:[]
};

const CURRENT_COMPLAIN_DETAILS = {
    complainDetails:{}
}

const CURRENT_CRIME_DETAILS = {
    crimeDetails:{}
}
const CURRENT_MISSING_PERSON_DETAILS = {
    missingDetails:{}
}
export var crimeReducer = function (state= INITIAL_CRIME_STATE,action) {
    switch (action.type) {
        case "FETCH_CRIME":
            return Object.assign({}, state, { isloaded: true, CrimeList: action.payload });
        default:
            return state
    }
}
export var complainReducer = function (state= INITIAL_COMPLAIN_STATE,action) {
    switch (action.type) {
        case "FETCH_COMPLAIN":
            return Object.assign({}, state, { isloaded: true, ComplainList: action.payload });
        default:
            return state
    }
}
export var missingReducer = function (state= INITIAL_MISSING_STATE,action) {
    switch (action.type) {
        case "FETCH_MISSING":
            return Object.assign({}, state, { isloaded: true, MissingList: action.payload });
        default:
            return state
    }
}


export var complainDetailsReducer = function (state= CURRENT_COMPLAIN_DETAILS,action) {
    switch (action.type) {
        case "COMPLAIN_DETAILS":
            return Object.assign({}, state, {complainDetails: action.payload });
        default:
            return state
    }
}
export var crimeDetailsReducer = function (state= CURRENT_CRIME_DETAILS,action) {
    switch (action.type) {
        case "CRIME_DETAILS":
            return Object.assign({}, state, {crimeDetails: action.payload });
        default:
            return state
    }
}
export var missingPersonDetailsReducer = function (state= CURRENT_MISSING_PERSON_DETAILS,action) {
    switch (action.type) {
        case "MISSING_PERSON_DETAILS":
            return Object.assign({}, state, {missingDetails: action.payload });
        default:
            return state
    }
}