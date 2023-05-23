import { TFilters } from "../../../models/TFilters";

const lengthToMinutes = (length: string):number => {
  const [hours, minutes] = length.split(':');
  return  (Number(minutes) ?? 0) + ((Number(hours) ?? 0) * 60)
}

export const getFilterQueryParams = ({
  genres, 
  countries, 
  staff, 
  year, 
  rating, 
  length
}: TFilters) => {
  const params = [];
  if (genres) {
    genres.forEach((genre) => {
      params.push(`genres.name=${encodeURI(genre)}`)
    })
  }
  if (countries) {
    countries.forEach((country) => {
      params.push(`countries.name=${encodeURI(country)}`)
    })
  }
  if (staff) {
    staff.forEach((person) => {
      params.push(`persons.name=${encodeURI(person)}`)
    })
  }
  if (year) {
    const yearFrom = year.from ? year.from : 1000;
    const yearTo = year.to ? year.to : 3000;

    (year.from || year.to) && params.push(`year=${yearFrom}-${yearTo}`)
  }
  if (rating) {
    const ratingFrom = rating.from ? rating.from : 0;
    const ratingTo = rating.to ? rating.to : 10;

    (rating.from || rating.to) && params.push(`rating.kp=${ratingFrom}-${ratingTo}`)
  }
  if (length) {
    const lengthFrom = length.from ? lengthToMinutes(length.from) : 0;
    const lengthTo = length.to ? lengthToMinutes(length.to) : 100;

    (length.from || length.to) && params.push(`movieLength=${lengthFrom}-${lengthTo}`)
  }

  return params.join('&')
}
