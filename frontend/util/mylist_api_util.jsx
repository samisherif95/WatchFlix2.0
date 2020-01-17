
export const getMyLists =() => (
    $.ajax({
        url: '/api/mylists',
        method: 'GET'
    })
)

export const addList = (video_id) => (
    $.ajax({
        url: '/api/mylists',
        method: 'POST',
        data: {mylist: {video_id}}
    })
)

export const deleteFromList = (video_id) => (
    $.ajax({
        url: `/api/mylists/${video_id}`,
        method: 'DELETE',
        data: {mylist: { video_id } }
    })
)