
export const getMyLists =() => (
    $.ajax({
        url: '/api/mylists',
        method: 'GET'
    })
)

export const addList = (videoId) => (
    $.ajax({
        url: '/api/mylists',
        method: 'post',
        data: {videoId}
    })
)

export const deleteFromList = (videoId) => (
    $.ajax({
        url: `/api/mylists/${videoId}`,
        method: 'post',
        data: { videoId }
    })
)