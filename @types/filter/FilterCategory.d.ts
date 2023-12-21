import React from 'react';
interface FilterCatProp {
    filter: FilterType;
    filteredData: FilterDataMap;
    flag: boolean;
    setSelectedFilterType: React.Dispatch<React.SetStateAction<SelectedFilter | null>>;
    isSearch: boolean;
    selectedIndex: null | number;
    addSelectedFilter: (data: SelectedFilterType) => void;
    updateSelectedFilter: (index: number, data: SelectedFilterType) => void;
}
declare function FilterCategory({ filter, setSelectedFilterType, isSearch, selectedIndex, addSelectedFilter, updateSelectedFilter, filteredData, flag, }: FilterCatProp): React.JSX.Element;
export default FilterCategory;
