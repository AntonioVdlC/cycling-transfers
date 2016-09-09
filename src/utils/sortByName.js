export default function byName (a, b) {
    return (a.lastname + a.firstname > b.lastname + b.firstname) ? 1 : (a.lastname + a.firstname < b.lastname + b.firstname) ? -1 : 0
}
