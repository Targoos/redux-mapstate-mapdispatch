import React from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeList from "./EmployeeList";

const EmployeesSection = () => {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-sm-8">
          <EmployeeList />
        </div>
        <div class="col-sm-4">
          <EmployeeCard />
        </div>
      </div>
    </div>
  );
};

export default EmployeesSection;
