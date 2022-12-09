import axios from 'axios';

import {api} from './api'

export const getMovies = async (movieName:string) => {
    return axios({
            method: 'get',
            url: `${api}`,
            params: {s:movieName,page:1}
        }).then(function (response) {
            return response
        })
}
export const getSeries = async (seriesName:string) => {
    return axios({
            method: 'get',
            url: `${api}`,
            params: {s:seriesName,page:1}
        }).then(function (response) {
            return response
        })
}