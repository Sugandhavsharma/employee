import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    error: "",
    getData: [],
    employeeListLoading: false,
    data: null,
    updateData: false
}

const employeeListStart2 = (state , action ) => {
    return updateObject ( state, { employeeListLoading: true });
}

const employeeListSuccess2 = (state, action ) => {
    return updateObject ( state, { employeeListLoading: false, getData:action.list });
}

const employeeListFail2 = (state, action ) => {
    return updateObject ( state, { employeeListLoading: false, error: action.error });
}

const addEmployeeStart2 = ( state, action ) => {
    return updateObject ( state, { employeeListLoading: true });
}

const addEmployeeSuccess2 = (state, action ) => {
    return updateObject ( state, { employeeListLoading: false });
}

const addEmployeeFail2 = (state, action ) => {
    return updateObject ( state, { employeeListLoading: false, error: action.error });
}

const updateEmployeeStart2 = ( state, action ) => {
    return updateObject ( state, { updateData: true });
}

const updateEmployeeSuccess2 = (state, action ) => {
    return updateObject ( state, { updateData: false});
}

const updateEmployeeFail2 = (state, action ) => {
    return updateObject ( state, { updateData: false, error: action.error });
}

const deleteEmployeeStart2 = ( state, action ) => {
    return updateObject ( state, { updateData1: true });
}

const deleteEmployeeSuccess2 = (state, action ) => {
    return updateObject ( state, { updateData1: false, data:action.list });
}

const deleteEmployeeFail2 = (state, action ) => {
    return updateObject ( state, { updateData1: false, error: action.error });
}



const reducer = ( state = initialState, action) => {
    switch (action.type){
        case actionTypes.EMPLOYEE_LIST_START: return employeeListStart2 ( state, action )
        case actionTypes.EMPLOYEE_LIST_SUCCESS: return employeeListSuccess2 ( state, action )
        case actionTypes.EMPLOYEE_LIST_FAIL: return employeeListFail2 ( state, action )

        case actionTypes.ADD_EMPLOYEE_START: return addEmployeeStart2 ( state, action )
        case actionTypes.ADD_EMPLOYEE_SUCCESS: return addEmployeeSuccess2 ( state, action )
        case actionTypes.ADD_EMPLOYEE_FAIL: return addEmployeeFail2 ( state, action )

        case actionTypes.UPDATE_EMPLOYEE_START: return updateEmployeeStart2 ( state, action )
        case actionTypes.UPDATE_EMPLOYEE_SUCCESS: return updateEmployeeSuccess2 ( state, action )
        case actionTypes.UPDATE_EMPLOYEE_FAIL: return updateEmployeeFail2 ( state, action )

        case actionTypes.DELETE_EMPLOYEE_START: return deleteEmployeeStart2 ( state, action )
        case actionTypes.DELETE_EMPLOYEE_SUCCESS: return deleteEmployeeSuccess2 ( state, action )
        case actionTypes.DELETE_EMPLOYEE_FAIL: return deleteEmployeeFail2 ( state, action )

        default: return state;
    }
}

export default reducer;
