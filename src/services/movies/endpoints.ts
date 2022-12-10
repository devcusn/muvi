import axios from 'axios';

import {api} from '../api'

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
export const getById = async (id:string |null) => {
    return axios({
            method: 'get',
            url: `${api}`,
            params: {i:id,plot:'full'}
        }).then(function (response) {
            return response
        })
}

export const searchGeneral = async(title:string | null,page:number=1)=>{
    return axios({
        method: 'get',
        url: `${api}`,
        params: {s:title,page:page}
    }).then(function (response) {
        return response
    })
}