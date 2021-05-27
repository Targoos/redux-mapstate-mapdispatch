import { getData } from "../../helpers";
import { types } from "../types/types";

export const employeesDownloaded = (users) => ({
  type: types.employeesDownloaded,
  payload: {
    users,
    loading: false,
  },
});

export const startDownload = () => ({
  type: types.initDownloadEmployees,
});

export const getEmployees = () => async (dispatch) => {
  dispatch(startDownload());

  try {
    const users = await getData();

    dispatch(employeesDownloaded(users));
  } catch (err) {
    console.log(err);
  }
};

export const activeEmployee = () => {

};

export const setActiveEmployee = (id) => (dispatch, getState) => {
  duspa
};
