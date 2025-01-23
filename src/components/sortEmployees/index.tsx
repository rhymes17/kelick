export type Employee = {
  id: string;
  profile: string;
  email: string;
  role: string;
  status: string;
};

export const sortEmployees = (
  employeeListInUI: Employee[],
  selectedSortProperty: string,
  selectedSortDirection: string,
) => {
  switch (selectedSortProperty) {
    case 'id':
      return employeeListInUI.sort((a, b) =>
        selectedSortDirection === 'desc'
          ? b.id.toLocaleLowerCase().localeCompare(a.id.toLocaleLowerCase())
          : a.id
              .toLocaleLowerCase()
              .localeCompare(b.id.toLocaleLowerCase()),
      );

    case 'profile':
      return employeeListInUI.sort((a, b) =>
        selectedSortDirection === 'desc'
          ? (b?.profile?.toLocaleLowerCase() || '').localeCompare(
              a?.profile?.toLocaleLowerCase() || '',
            )
          : (a?.profile?.toLocaleLowerCase() || '').localeCompare(
              b?.profile?.toLocaleLowerCase() || '',
            ),
      );

    case 'email':
      return employeeListInUI.sort((a, b) =>
        selectedSortDirection === 'desc'
          ? (b?.email?.toLocaleLowerCase() || '').localeCompare(
              a?.email?.toLocaleLowerCase() || '',
            )
          : (a?.email?.toLocaleLowerCase() || '').localeCompare(
              b?.email?.toLocaleLowerCase() || '',
            ),
      );

    case 'role':
      return employeeListInUI.sort((a, b) =>
        selectedSortDirection === 'desc'
          ? (b?.role?.toLocaleLowerCase() || '').localeCompare(
              a?.role?.toLocaleLowerCase() || '',
            )
          : (a?.role?.toLocaleLowerCase() || '').localeCompare(
              b?.role?.toLocaleLowerCase() || '',
            ),
      );

    case 'status':
      return employeeListInUI.sort((a, b) =>
        selectedSortDirection === 'desc'
          ? (b?.status?.toLocaleLowerCase() || '').localeCompare(
              a?.status?.toLocaleLowerCase() || '',
            )
          : (a?.status?.toLocaleLowerCase() || '').localeCompare(
              b?.status?.toLocaleLowerCase() || '',
            ),
      );

    default:
      return [
        {
          id: 'FDS23',
          profile: 'asa',
          email: 'svsd',
          role: 'head',
          status: 'bv sdv',
        },
      ];
  }
};
