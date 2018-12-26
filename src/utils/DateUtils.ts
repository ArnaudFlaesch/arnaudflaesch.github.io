export function formatDateEndFromExperience(date? : Date) : string {
    if (!date) {
        return ("Aujourd'hui");
    } else {
        return (formatDateFromExperience(date));
    }
}

export function formatDateFromExperience(date : Date) : string {
    return (date.getMonth() + " " + date.getFullYear());
}