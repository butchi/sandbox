var base65536 = require("base65536");

var buf = new Buffer(`
plot[arr_] := ArrayPlot[arr, PixelConstrained -> False, Frame -> False]
x = RandomInteger[1024]
y = RandomInteger[1024]
tbl0 = RandomInteger[1, {2, 2}]
tbl1 = RandomInteger[1, {2, 2}]
iterate[x_] := ArrayFlatten[x /. {0 -> tbl0, 1 -> tbl1}]
carpet6 = Nest[iterate, 1, 6];
shift6 = BitXor[carpet6, RotateLeft[carpet6, {x, y}]];
Grid[{{plot[carpet6], plot[shift6]}}]

carpet10 = Nest[iterate, 1, 10];
shift10 = BitXor[carpet10, RotateLeft[carpet10, {x, y}]];
ListPlay[Flatten[shift10], SampleRate -> 8000]
`); // 11 bytes

var str = base65536.encode(buf); 
console.log(str); // 6 code points, "驨ꍬ啯𒁷ꍲᕤ"

var buf2 = base65536.decode(str);
console.log(buf.equals(buf2)); // true
