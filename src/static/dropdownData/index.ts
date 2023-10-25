import { SortValues, PeriodValues, ForRentValues } from "../../types"


export const negotiations: Array<{id: ForRentValues; value: string}> = [
  {
    'id': '-1',
    'value': 'ყველა'
  },
  {
    'id': '0',
    'value': 'იყიდება'
  },
  {
    'id': '1',
    'value': 'ქირავდება'
  }
]

export const sorts: Array<{id: SortValues, value: string}> = [
  {
    id: '1',
    value: 'თარიღი კლებადი'
  },
  {
    id: '2',
    value: 'თარიღი ზრდადი',
  },
  {
    id: '3',
    value: 'ფასი კლებადი',
  },
  {
    id: '4',
    value: 'ფასი ზრდადი',
  },
  {
    id: '5',
    value: 'გარბენი კლებადი'
  },
  {
    id: '6',
    value: 'გარბენი ზრდადი'
  }
]

export const periods: Array<{id: PeriodValues, value: string}> = [
  {
    id: '1h',
    value: '1 საათი'
  },
  {
    id: '2h',
    value: '2 საათი',
  },
  {
    id: '3h',
    value: '3 საათი',
  },
  {
    id: '1d',
    value: '1 დღე',
  },
  {
    id: '2d',
    value: '2 დღე'
  },
  {
    id: '3d',
    value: '3 დღე'
  },
  {
    id: '1w',
    value: '1 კვირა',
  },
  {
    id: '2w',
    value: '2 კვირა'
  },
  {
    id: '3w',
    value: '3 კვირა'
  }
]