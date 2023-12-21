import React from 'react';
interface FilterDropdownProps {
    selectedFilter: SelectedFilterType[];
    handleOpen: (type: 'full' | 'selected' | 'new', ind?: number) => void;
    updateSelectedFilter: (index: number, data: SelectedFilterType) => void;
    deleteSelectedFilter: (index: number) => void;
}
declare function FilterDropdown({ selectedFilter, handleOpen, updateSelectedFilter, deleteSelectedFilter, }: FilterDropdownProps): React.JSX.Element;
export default FilterDropdown;
