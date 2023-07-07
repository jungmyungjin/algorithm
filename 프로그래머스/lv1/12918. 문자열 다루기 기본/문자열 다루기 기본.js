function solution(s) {
    const regex = /^\d{4}$|^\d{6}$/
    return regex.test(s);
}