import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getEmployees,
  setActiveEmployee,
} from "../store/actions/employeesAction";

const EmployeeList = ({ getEmployees, EmployeesData }) => {
  const { employees } = EmployeesData;

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const showEmployee = (id) => {
    console.log(id);
    setActiveEmployee(id);
  };

  return (
    <div className="list-group">
      {employees &&
        employees.map((employee, id) => (
          <button
            key={id}
            className="list-group-item list-group-item-action"
            onClick={() => showEmployee(id)}
          >
            {employee.name}
          </button>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  EmployeesData: state.employees,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { getEmployees: getEmployees, setActiveEmployee: setActiveEmployee },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
