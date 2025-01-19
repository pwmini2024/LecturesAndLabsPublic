import { renderHook, act } from "@testing-library/react";
import { useEmployeeFilter } from "./useEmployeeFilter";

describe("useEmployeeFilter Hook", () => {
  const mockEmployees = [
    { id: 1, name: "John", isActive: true },
    { id: 2, name: "Jane", isActive: false },
    { id: 3, name: "Bob", isActive: true },
  ];

  // Basic hook functionality test
  it("returns all employees when filter is off", () => {
    const { result } = renderHook(() => useEmployeeFilter(mockEmployees));

    expect(result.current.filteredEmployees).toEqual(mockEmployees);
    expect(result.current.filterActive).toBe(false);
  });

  // State change test
  it("filters active employees when filter is toggled", () => {
    const { result } = renderHook(() => useEmployeeFilter(mockEmployees));

    act(() => {
      result.current.toggleFilter();
    });

    expect(result.current.filterActive).toBe(true);
    expect(result.current.filteredEmployees).toEqual([
      { id: 1, name: "John", isActive: true },
      { id: 3, name: "Bob", isActive: true },
    ]);
  });

  // Props update test
  it("updates filtered results when employees prop changes", () => {
    const { result, rerender } = renderHook(
      (props) => useEmployeeFilter(props),
      { initialProps: mockEmployees }
    );

    const newEmployees = [{ id: 4, name: "Alice", isActive: true }];

    rerender(newEmployees);

    expect(result.current.filteredEmployees).toEqual(newEmployees);
  });
});
