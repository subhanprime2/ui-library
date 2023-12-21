import React from 'react';
interface Data {
    tasks: TaskMap | null;
    projects: ProjectsAllMap | null;
    people: PeopleMap | null;
    peopleTasks: PeopleTasks[] | null;
    projectTasks: ProjectTask[] | null;
    roles: Role[] | null;
    department: Department[] | null;
    tags: Tag[] | null;
    projectOwner: People[] | null;
    managers: People[] | null;
}
interface FilterProps {
    sheduler: Data;
    filters: FilterType[];
    selectedFilter: SelectedFilterType[];
    resetFilters: () => void;
    clearSelectedFilters: () => void;
    addSelectedFilter: (data: SelectedFilterType) => void;
    updateSelectedFilter: (index: number, data: SelectedFilterType) => void;
    deleteSelectedFilter: (index: number) => void;
}
declare function Filter({ sheduler, filters, selectedFilter, resetFilters, clearSelectedFilters, addSelectedFilter, updateSelectedFilter, deleteSelectedFilter, }: FilterProps): React.JSX.Element;
export default Filter;
