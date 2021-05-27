import { types } from "../types/types";

const initialState = {
  employees: [],
  loading: false,
  active: null,
};

export const EmployeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.initDownloadEmployees:
      return {
        loading: true,
      };
    case types.employeesDownloaded:
      return {
        employees: [...action.payload?.users],
        loading: false,
      };
    default:
      return state;
  }
};
