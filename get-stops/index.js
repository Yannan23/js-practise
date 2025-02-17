const pluralize = (number, word) => {
    if (number <= 1) {
        return word;
    }
    return `${word}s`;
}

const SPECIAL_STOPS_MAPPING = {
    '0': 'Direct'
}

const getStops = (flights) => {

    const { length } = flights
    const stop = length - 1

    const specialStops = SPECIAL_STOPS_MAPPING[stop];

    return specialStops || `${stop} ${pluralize(stop, 'stop')}`
}

console.log(getStops([{}]));
console.log(getStops([{}, {}]));
console.log(getStops([{}, {}, {}]))

