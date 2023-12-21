import React from 'react';
interface FilterScreenProps {
    filters: FilterType[];
    filteredData: FilterDataMap;
    flag: boolean;
    setSelectedFilterType: React.Dispatch<React.SetStateAction<SelectedFilter | null>>;
    search: string;
    selectedIndex: null | number;
    addSelectedFilter: (data: SelectedFilterType) => void;
    updateSelectedFilter: (index: number, data: SelectedFilterType) => void;
}
declare function FilterScreen({ filters, setSelectedFilterType, search, filteredData, flag, selectedIndex, addSelectedFilter, updateSelectedFilter, }: FilterScreenProps): React.JSX.Element;
export default FilterScreen;
