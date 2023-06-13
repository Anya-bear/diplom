import { writable } from "svelte/store";
import {browser} from "$app/environment";

export const menu = writable(0)
export const posts = writable()

const toUnixTime = (date: Date) => Math.floor(date.getTime() / 1000)
const version = 5.131
const apiUrl = 'https://4cdde7f4ce7b.hosting.myjino.ru/'

export async function getLastUpdate(): Promise<string> {
    const last = await fetch(apiUrl + 'last', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    const result = await last.json()
    return result.last
}


export async function getComments(owner: string, post: string): Promise<any> {
    const key = browser && localStorage ? localStorage?.getItem('token') : 'err'
    if (key === 'err') return 
    const t = await fetch(apiUrl + 'comments', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            owner,
            post,
            token: key
        })
    })
    
    const r = await t.json()
    return r
}

export async function getGraphics(dateTo: string, dateFrom: string, info: any | undefined): Promise<string> {
    if (info === undefined) return
    const unixFrom = Math.floor(Date.parse(dateFrom) / 1000)
    const unixTo = Math.floor( Date.parse(dateTo) / 1000)
    const last = await fetch(apiUrl + 'graph', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            unixFrom,
            unixTo,
            info
        })
    })
    const result = await last.text()
    // const image = new Image()
    // image.src = 'data:image/png;base64,' + result
    return result
}


export async function getPostsForDates(domain: string, dateFrom: string, dateTo: string): Promise<any> {
    // const result = await fetch(apiUrl)
    const key = browser && localStorage ? localStorage?.getItem('token') : 'err'
    if (key === 'err') return
    const result = await fetch(apiUrl + 'get/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            token: key,
            domain,
            force_new: false,
            count: 1
        })
    })
    const r = await result.json()
    const unixFrom = Math.floor(Date.parse(dateFrom) / 1000)
    const unixTo = Math.floor(new Date(dateTo).setHours(23, 59, 59, 999) / 1000)
    const filtered = r.filter(x => x.date >= unixFrom && x.date <= unixTo)
    return filtered
}