export const getParamsFromUrl = (url, params) => {
    try {
        const result = {}
        const url_obj = new URL(url)

        params.forEach(param => {
            const value = url_obj.searchParams.get(param)

            if (value) result[param] = value
        })

        return result
    } catch (e) {
        return false
    }
}
