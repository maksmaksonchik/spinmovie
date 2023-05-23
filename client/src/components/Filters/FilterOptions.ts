export const filtersWithTags = [
  {
    id: 'genres',
    name: 'Жанры',
    placeholder: 'комедия'
  },
  {
    id: 'countries',
    name: 'Страна',
    placeholder: 'США'
  },
  {
    id: 'staff',
    name: 'Состав',
    placeholder: 'Брюс Ли'
  }
]

export const filtersWithRange = [
  {
    id: 'year',
    name: 'Год выхода',
    placeholders: {
      from: '2013',
      to: '2023'
    },
    mask: '1111'
  },
  {
    id: 'reting',
    name: 'Рейтинг Кинопоиска',
    placeholders: {
      from: '6.5',
      to: '7.1'
    },
    mask: '1.1'
  },
  {
    id: 'length',
    name: 'Продолжительность',
    placeholders: {
      from: '1:30',
      to: '2:00'
    },
    mask: '1:11'
  }
]
