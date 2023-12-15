export const setLastDate = (name: string) => {
    if (typeof localStorage != "undefined"){
        const ls = localStorage.getItem(name);
        if (!ls){
            const obj = {
                date: Date.now(),
                tries: 1,
            }
            localStorage.setItem(name, JSON.stringify(obj))
            return;
        }
        const dateObj = JSON.parse(ls);
        const obj = {
            date: Date.now(),
            tries: dateObj.tries + 1,
        }
        localStorage.setItem(name, JSON.stringify(obj))
        return;
    }
}

export const compareLstDate = (name: string) => {
    if (typeof localStorage != "undefined"){
        const lastSubmitDateObj = localStorage.getItem(name);
        if (!lastSubmitDateObj) {
            return true;
        }
        const lastSubmitDateStr = JSON.parse(lastSubmitDateObj);
        if (lastSubmitDateStr.tries < 3){
            return true;
        }
        const lastSubmitDate = new Date(lastSubmitDateStr.date);
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - lastSubmitDate.getTime();
        const hoursDifference = timeDifference / (1000 * 3600);
        return hoursDifference >= 24;
    }
}