import React from 'react'
import { notFound } from 'next/navigation';

import { MovieContainer } from '@/containers/movie'
import { getMovie } from "@/services/movie";

export default async function MoviePage( { params, searchParams } ) {


  const movieDetail = await getMovie(params.id);

  if(searchParams.error === "true"){
    throw new Error("Error happened.")
  }

  if (!movieDetail){
    notFound()
  }

  return (
    <MovieContainer movie={movieDetail} />
  )
}
