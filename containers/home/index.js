import React from 'react'

import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

import { FeaturedMovie } from '@/components/featured-movie'
import { Categories } from '@/components/categories'
import { MoviesSection } from '@/components/movies-section'

export default function HomeContainer({categories = [], topRatedMovies = [] , popularMovies = [], selectedCategory }) {
 
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {
        selectedCategory.movies.length && (
          
          <MoviesSection title={categories.find( (genre) => genre.id.toString() === selectedCategory.id ).name} movies={selectedCategory.movies} />
        )
      } 
      
      <MoviesSection title='MOST POPULARS' movies={popularMovies.slice(1, 7)} />
      <MoviesSection title='TOP RATED MOVIES' movies={topRatedMovies.slice(7, 13)} />
    </div>
  )
}
