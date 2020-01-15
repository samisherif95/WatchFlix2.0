export const fetchAllVideos =()=>(
    $.ajax({
        url: '/api/videos',
        method: 'GET'
    })
)

export const fetchAVideo = (videoId) => (
    $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'GET'
    })
)