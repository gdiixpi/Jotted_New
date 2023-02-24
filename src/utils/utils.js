export const GetQueryString = (queryObject) => {
    // let queryString = '';
    Object.entries(queryObject).reduce((prev, [key, value]) => {
        if (!value)
            return prev
        else {
            return `${!prev ? '?' : '&'}${key} = ${value}`
        }
    }, '')
}

export const isAuthenticated = () => {
    let authToken = localStorage.getItem('accessToken')
    let user = localStorage.getItem('user')
    user = JSON.parse(user)

    return (authToken && user) ? { authToken: authToken, user: user } : false
}

export const getLocalStorageData = (key) => {
    let data = localStorage.getItem(key) || ""
    if (data.indexOf(',')) {
        data = data.split(',')
        return data
    }
    if (typeof data === "string") {
        return data
    }
    else {
        return JSON.parse(data)
    }
}