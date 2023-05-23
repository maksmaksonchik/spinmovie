export const getRandomList = (list: any[]) => {
  const set = new Set();
  return new Array(10).fill(0).map(() => {
    let random: number;
    do {
      random = Math.floor(Math.random() * list.length);
    } while (set.has(random));
    set.add(random);
    return list[random];
  });
}
