type ForeignFilteredData = (Role | Department
    | Tag | [number, Task] | [number, Project] | [number, People] | People | Project | Task);

enum ForeignData {
    Tasks = 'tasks',
    Projects = 'projects',
    People = 'people',
    Roles = 'roles',
    Department = 'department',
    Tags = 'tags',
    ProjectOwner = 'projectOwner',
    Managers = 'managers',
}

// Use ForeignData as an array
const foreignDataArray: ForeignData[] = [
    ForeignData.Tasks,
    ForeignData.Projects,
    ForeignData.People,
    ForeignData.Roles,
    ForeignData.Department,
    ForeignData.Tags,
    ForeignData.ProjectOwner,
    ForeignData.Managers,
];

type FilterDataMap = {
    [K in ForeignData]:ForeignFilteredData[];
};

const initialFilterData:FilterDataMap = {
    [ForeignData.Tasks]: [],
    [ForeignData.Projects]: [],
    [ForeignData.People]: [],
    [ForeignData.Roles]: [],
    [ForeignData.Department]: [],
    [ForeignData.Tags]: [],
    [ForeignData.ProjectOwner]: [],
    [ForeignData.Managers]: [],
};

interface FilterOption {
    name: string;
    foreignData: ForeignData,
    localData:string;
    localKey: string,
    foreignKey: string,
    isSpecialCase?:boolean;
    onBoth:'both' | 'Schedule' | 'Project Plan',
    onFilter?:
    (people: PeopleTasks[], selected: ForeignFilteredData,
    included:boolean, project:ProjectTask[],
    view:'Schedule' | 'Project Plan') => PeopleTasks[] | ProjectTask[]
}
interface FilterType {
    name: string;
    icon: (size?: number) => JSX.Element;
    color: string;
    filters: FilterOption[];
}

interface SelectedFilter {
    mainFilter:FilterType;
    filter:FilterOption,
    included:boolean
}

enum FilterOperation {
    And = 'and',
    Or = 'or',
  }

interface SelectedFilterType extends SelectedFilter {
    selectedItem: ForeignFilteredData,
    operation:FilterOperation
  }

  interface FilterSlice {
    filters:FilterType[];
    selectedFilter:SelectedFilterType[];
  }

