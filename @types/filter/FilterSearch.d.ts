import React from 'react';
interface SearchProps {
    getLength: () => string;
    searchValue: string;
    onChange: (e: any) => void;
}
declare function FilterSearch({ getLength, searchValue, onChange }: SearchProps): React.JSX.Element;
export default FilterSearch;
