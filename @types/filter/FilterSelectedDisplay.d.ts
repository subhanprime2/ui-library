import React from 'react';
interface SelectedDisplayProps {
    filter: SelectedFilterType;
    index: number;
    handleOpen: (type: 'full' | 'selected' | 'new', ind?: number) => void;
    updateSelectedFilter: (index: number, data: SelectedFilterType) => void;
    deleteSelectedFilter: (index: number) => void;
}
declare function FilterSelectedDisplay({ filter, index, handleOpen, updateSelectedFilter, deleteSelectedFilter, }: SelectedDisplayProps): React.JSX.Element;
export default FilterSelectedDisplay;
