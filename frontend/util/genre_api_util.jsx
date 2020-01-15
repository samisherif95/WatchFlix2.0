
export const fetchAllGenre = () => {
    return $.ajax({
        method: "get",
        url: `api/genres/`,
    })
}