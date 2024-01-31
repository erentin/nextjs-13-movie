import React from 'react'

import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

import { FeaturedMovie } from '@/components/featured-movie'
import { Categories } from '@/components/categories'
import { MoviesSection } from '@/components/movies-section'

export default function HomeContainer({ selectedCategory }) {
  const {genres} = Genres;

  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {
        selectedCategory.movies.lenght > 0 && (
          <MoviesSection title={genres.find( (genre) => genre.id.toString() === selectedCategory.id ).name} movies={selectedCategory.movies} />
        )
      }
      <MoviesSection title='MOST POPULARS' movies={Movies.results.slice(1, 7)} />
      <MoviesSection title='YOUR FAVORITE' movies={Movies.results.slice(7, 13)} />
    </div>
  )
}
