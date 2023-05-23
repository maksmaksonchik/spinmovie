export type TFilterRange = {
  from?: string,
  to?: string
}

export type TFilters = {
  genres?: string[],
  countries?: string[],
  staff?: string[],
  year?: TFilterRange,
  rating?: TFilterRange,
  length?: TFilterRange,
}
