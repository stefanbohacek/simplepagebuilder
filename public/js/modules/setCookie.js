const setCookie = (name, value, expiresDays) => {
    const dt = new Date();
    dt.setTime(dt.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
    let expires = "expires="+ dt.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export default setCookie;
