export const tokenSetters = (access: string, refresh: string) => {
    const dateForAccess = new Date();
    dateForAccess.setHours(dateForAccess.getHours() + 20);
    const dateForRefresh = new Date();
    dateForRefresh.setHours(dateForRefresh.getHours() + 120);

    const accessToken = {
        token: access,
        exp: dateForAccess
    }
    const refreshToken = {
        token: refresh,
        exp: dateForRefresh
    }
    localStorage.setItem("accessIcap", JSON.stringify(accessToken));
    localStorage.setItem("refreshIcap", JSON.stringify(refreshToken));
}