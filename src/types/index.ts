export enum SearchParamKeys {
  ForRent = 'ForRent',
  Mans = 'Mans',
  Cats = 'Cats',
  PriceFrom = 'PriceFrom',
  PriceTo = 'PriceTo',
  Period = 'Period',
  SortOrder = 'SortOrder',
  Page = 'Page'
}

export type SortValues = '1' | '2' | '3' | '4' | '5' | '6'

export type PeriodValues = '1h' | '2h' | '3h' | '1d' | '2d' | '3d' | '1w' | '2w' | '3w'

export type ForRentValues = '-1' | '0' | '1'

export interface SearchParams {
  [SearchParamKeys.ForRent]: ForRentValues,
  [SearchParamKeys.Mans]: string,
  [SearchParamKeys.Cats]: string,
  [SearchParamKeys.PriceFrom]: string,
  [SearchParamKeys.PriceTo]: string,
  [SearchParamKeys.Period]: PeriodValues
  [SearchParamKeys.SortOrder]: SortValues
  [SearchParamKeys.Page]: string
}