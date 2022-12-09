import axios from 'axios';

import {api} from './api'

export const getMovies = async (movieName:string) => {
    return axios({
            method: 'get',
            url: `${api}`,
            params: {s:movieName,type:'movie'}
        }).then(function (response) {
            return response
        })
}
export const getSeries = async (seriesName:string) => {
    return axios({
            method: 'get',
            url: `${api}`,
            params: {s:seriesName,type:'series'}
        }).then(function (response) {
            return response
        })
}

export const getRandom = async (seriesName:string) => {
    return axios({
            method: 'get',
            url: `${api}`,
            params: {t:'abc'}
        }).then(function (response) {
            return response
        })
}

export const searchGeneral = async(title:string)=>{
    return axios({
        method: 'get',
        url: `${api}`,
        params: {s:title}
    }).then(function (response) {
        return response
    })
}