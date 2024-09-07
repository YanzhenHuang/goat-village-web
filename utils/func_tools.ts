/**
 * 随机shuffle数组。
 * @param {any[]} arr 任意类型的数组
 * @returns shuffle过的数组
 */
export const shuffle = (arr: any[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}