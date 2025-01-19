import { useState, useMemo } from "react";

export function useEmployeeFilter(employees) {
  const [filterActive, setFilterActive] = useState(false);

  const filteredEmployees = useMemo(() => {
    if (!filterActive) return employees;
    return employees.filter((employee) => employee.isActive);
  }, [employees, filterActive]);

  return {
    filteredEmployees,
    filterActive,
    toggleFilter: () => setFilterActive(!filterActive),
  };
}
