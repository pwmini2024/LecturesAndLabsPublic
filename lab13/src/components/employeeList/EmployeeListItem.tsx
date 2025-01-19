import React from 'react';
import {Employee} from "../../model/Employee";

export interface EmployeeListItemProps {
    employee: Employee;
    updateList: () => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = (props: EmployeeListItemProps) => {
    return (
        <></>
    );
}

export default EmployeeListItem;
