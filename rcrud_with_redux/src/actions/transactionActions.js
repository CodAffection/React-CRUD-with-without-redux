export const insert = data => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const update = data => {
    return {
        type: 'UPDATE',
        payload: data
    }

}

export const Delete = id => {
    return {
        type: 'DELETE',
        payload: id
    }

}

export const updateIndex = index => {
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }

}