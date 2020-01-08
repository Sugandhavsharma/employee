import Axios from 'axios';
import * as actionType from './actionTypes';


//EmployeeList
 export const employeeListStart = () => {
     const action = {
        type: actionType.EMPLOYEE_LIST_START
     }
    return action;
}
    
    
export const employeeListSuccess = ( list ) => {
    const action = {
    type: actionType.EMPLOYEE_LIST_SUCCESS,
            list
        }
        return action;
}
    
    
export const employeeListFail = ( error ) => {
    const action = {
            type: actionType.EMPLOYEE_LIST_FAIL,
            error
        }
        return action;
    }

export const getData = () => {
    return dispatch =>{
        dispatch(employeeListStart())
        return Axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => {
            console.log(res);
            return dispatch(employeeListSuccess(res.data))
        })
        .catch(error => {
            return dispatch(employeeListFail(error))
        })
    }
}


//AddEmployee
export const addEmployeeStart = () => {
    return {
        type: actionType.ADD_EMPLOYEE_START
    }
}

export const addEmployeeSuccess = ( data ) => {
    return {
        type: actionType.ADD_EMPLOYEE_SUCCESS,
        data
    }
}

export const addEmployeeFail = ( error ) => {
    return{
        type: actionType.ADD_EMPLOYEE_FAIL,
        error
    }
}

export const addData = (data) => {
    return dispatch =>{
        dispatch(addEmployeeStart())
        return Axios.post('http://dummy.restapiexample.com/api/v1/create',JSON.stringify(data))
        .then(res => {
            console.log(res);
            return dispatch(addEmployeeSuccess())
        })
        .catch(error => {
            return dispatch(addEmployeeFail(error))
        })
    }
}


//UpdateEmployee
export const updateEmployeeStart = () => {
        return{
            type: actionType.UPDATE_EMPLOYEE_START
        }
    }
    
    export const updateEmployeeSuccess =  () => {
        return{
            type: actionType.UPDATE_EMPLOYEE_SUCCESS,
        }
    }
    
    export const updateEmployeeFail = ( error ) => {
        return{
            type: actionType.UPDATE_EMPLOYEE_FAIL,
            error
        }
    }
    
    export const updateData = (id, user) => {
        return dispatch =>{
            dispatch(updateEmployeeStart())
            return Axios.put(`http://dummy.restapiexample.com/api/v1/update/${id}`,JSON.stringify(user))
            .then(res => {
                console.log(res);
                return dispatch(updateEmployeeSuccess())
            })
            .catch(error => {
                return dispatch(updateEmployeeFail(error))
            })
        }
    }


    //DeleteEmployee
export const deleteEmployeeStart = () => {
    return{
        type: actionType.DELETE_EMPLOYEE_START
    }
}

export const deleteEmployeeSuccess = ( id ) => {
    return{
        id
    }
}

export const deleteEmployeeFail = ( error ) => {
    return{
        type: actionType.DELETE_EMPLOYEE_FAIL,
        error
    }
}

export const deleteData = (id) => {
    return dispatch =>{
        dispatch(deleteEmployeeStart())
        return Axios.delete('http://dummy.restapiexample.com/api/v1/delete/2',{id})
        .then(res => {
            console.log(res);
            return dispatch(deleteEmployeeSuccess(res.id))
        })
        .catch(error => {
            return dispatch(deleteEmployeeFail(error))
        })
    }
}
 