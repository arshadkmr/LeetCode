const sortPeople = (name, height) => {
    let map = {}
    for (let i = 0; i < height.length; i++) {
        if (!map[height[i]]) {
            map[height[i]] = name[i];
        }
    }
    return Object.values(map).reverse()
}
names = ["IEO", "Sgizfdfrims", "QTASHKQ", "Vk", "RPJOFYZUBFSIYp", "EPCFFt", "VOYGWWNCf", "WSpmqvb"]
heights = [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]

console.log(sortPeople(names, heights));