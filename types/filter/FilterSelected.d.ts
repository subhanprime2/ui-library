import React from 'react';
interface SelectedProps {
    selectedFilterType: SelectedFilter;
    handleSelectNone: () => void;
    getElements: () => ForeignFilteredData[];
    selectedIndex: null | number;
    addSelectedFilter: (data: SelectedFilterType) => void;
    updateSelectedFilter: (index: number, data: SelectedFilterType) => void;
}
declare function FilterSelected({ selectedFilterType, handleSelectNone, getElements, selectedIndex, addSelectedFilter, updateSelectedFilter, }: SelectedProps): React.JSX.Element;
export default FilterSelected;
