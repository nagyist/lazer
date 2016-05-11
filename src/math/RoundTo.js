export default function RoundTo (value, place = 0, base = 10) {

    var p = Math.pow(base, -place);

    return Math.round(value * p) / p;

}
