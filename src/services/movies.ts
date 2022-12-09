import axios from 'axios';

import {api} from './api'

export const getMovies = async (movieName:string) => {
    return axios({
            method: 'get',
            url: `${api}`,
            params: {s:movieName}
        }).then(function (response) {
            return response
        })
}
export const getSeries = async (seriesName:string) => {
    return axios({
            method: 'get',
            url: `${api}`,
            params: {s:seriesName}
        }).then(function (response) {
            return response
        })
}