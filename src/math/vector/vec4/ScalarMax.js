let vec4 = Float32Array;

export default function (a, b, dst = new vec4(4)) {

    dst[0] = Math.max(a[0], b);
    dst[1] = Math.max(a[1], b);
    dst[2] = Math.max(a[2], b);
    dst[3] = Math.max(a[3], b);

    return dst;

}
