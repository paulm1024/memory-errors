function categories_vulns() {
canvas = document.getElementById("categories_vulns");
ctx = canvas.getContext("2d");
// Reinitialize mouse tracking and zoom for this particular plot
if ((typeof(gnuplot.active_plot) == "undefined" || gnuplot.active_plot != categories_vulns)  &&  typeof(gnuplot.mouse_update) != "undefined") {
  gnuplot.active_plot_name = "categories_vulns";
  gnuplot.active_plot = categories_vulns;
  canvas.onmousemove = gnuplot.mouse_update;
  canvas.onmouseup = gnuplot.zoom_in;
  canvas.onmousedown = gnuplot.saveclick;
  canvas.onkeypress = gnuplot.do_hotkey;
  if (canvas.attachEvent) {canvas.attachEvent('mouseover', categories_vulns);}
  else if (canvas.addEventListener) {canvas.addEventListener('mouseover', categories_vulns, false);} 
  gnuplot.zoomed = false;
  gnuplot.zoom_axis_width = 0;
  gnuplot.zoom_in_progress = false;
  gnuplot.polar_mode = false;
  ctx.clearRect(0,0,1000,500);
}
// Gnuplot version 4.6.0
// short forms of commands provided by gnuplot_common.js
function DT  (dt)  {gnuplot.dashtype(dt);};
function DS  (x,y) {gnuplot.dashstart(x,y);};
function DL  (x,y) {gnuplot.dashstep(x,y);};
function M   (x,y) {if (gnuplot.pattern.length > 0) DS(x,y); else gnuplot.M(x,y);};
function L   (x,y) {if (gnuplot.pattern.length > 0) DL(x,y); else gnuplot.L(x,y);};
function Dot (x,y) {gnuplot.Dot(x,y);};
function Pt  (N,x,y,w) {gnuplot.Pt(N,x,y,w);};
function R   (x,y,w,h) {gnuplot.R(x,y,w,h);};
function T   (x,y,fontsize,justify,string) {gnuplot.T(x,y,fontsize,justify,string);};
function TR  (x,y,angle,fontsize,justify,string) {gnuplot.TR(x,y,angle,fontsize,justify,string);};
function bp  (x,y) {gnuplot.bp(x,y);};
function cfp () {gnuplot.cfp();};
function cfsp() {gnuplot.cfsp();};

ctx.lineCap = "butt"; ctx.lineJoin = "miter";
CanvasTextFunctions.enable(ctx);
ctx.strokeStyle = "rgb(215,215,215)";
ctx.lineWidth = 2;

ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,4580);
L(9759,4580);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,4580);
L(720,4580);
ctx.stroke();
ctx.closePath();
T(540,4630,10.0,"Right"," 0");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,3510);
L(9759,3510);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,3510);
L(720,3510);
ctx.stroke();
ctx.closePath();
T(540,3560,10.0,"Right"," 50");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,2441);
L(9759,2441);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,2441);
L(720,2441);
ctx.stroke();
ctx.closePath();
T(540,2491,10.0,"Right"," 100");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,1371);
L(9759,1371);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,1371);
L(720,1371);
ctx.stroke();
ctx.closePath();
T(540,1421,10.0,"Right"," 150");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,301);
L(9759,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,301);
L(720,301);
ctx.stroke();
ctx.closePath();
T(540,351,10.0,"Right"," 200");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,4580);
L(620,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(620,4580);
L(620,4680);
ctx.stroke();
ctx.closePath();
T(620,4830,10.0,"Center","2000");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(792,4580);
L(792,4630);
M(965,4580);
L(965,4630);
M(1139,4580);
L(1139,4630);
M(1312,4580);
L(1312,4630);
M(1482,4580);
L(1482,4630);
M(1655,4580);
L(1655,4630);
M(1827,4580);
L(1827,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2002,4580);
L(2002,1158);
M(2002,408);
L(2002,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(2002,4580);
L(2002,4680);
ctx.stroke();
ctx.closePath();
T(2002,4830,10.0,"Center","2002");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2172,4580);
L(2172,4630);
M(2343,4580);
L(2343,4630);
M(2517,4580);
L(2517,4630);
M(2691,4580);
L(2691,4630);
M(2860,4580);
L(2860,4630);
M(3032,4580);
L(3032,4630);
M(3207,4580);
L(3207,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3379,4580);
L(3379,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(3379,4580);
L(3379,4680);
ctx.stroke();
ctx.closePath();
T(3379,4830,10.0,"Center","2004");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3552,4580);
L(3552,4630);
M(3724,4580);
L(3724,4630);
M(3898,4580);
L(3898,4630);
M(4071,4580);
L(4071,4630);
M(4241,4580);
L(4241,4630);
M(4414,4580);
L(4414,4630);
M(4586,4580);
L(4586,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4761,4580);
L(4761,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(4761,4580);
L(4761,4680);
ctx.stroke();
ctx.closePath();
T(4761,4830,10.0,"Center","2006");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4931,4580);
L(4931,4630);
M(5102,4580);
L(5102,4630);
M(5276,4580);
L(5276,4630);
M(5451,4580);
L(5451,4630);
M(5619,4580);
L(5619,4630);
M(5792,4580);
L(5792,4630);
M(5966,4580);
L(5966,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6139,4580);
L(6139,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(6139,4580);
L(6139,4680);
ctx.stroke();
ctx.closePath();
T(6139,4830,10.0,"Center","2008");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6311,4580);
L(6311,4630);
M(6483,4580);
L(6483,4630);
M(6658,4580);
L(6658,4630);
M(6830,4580);
L(6830,4630);
M(7001,4580);
L(7001,4630);
M(7173,4580);
L(7173,4630);
M(7346,4580);
L(7346,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(7520,4580);
L(7520,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(7520,4580);
L(7520,4680);
ctx.stroke();
ctx.closePath();
T(7520,4830,10.0,"Center","2010");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(7691,4580);
L(7691,4630);
M(7861,4580);
L(7861,4630);
M(8035,4580);
L(8035,4630);
M(8210,4580);
L(8210,4630);
M(8379,4580);
L(8379,4630);
M(8551,4580);
L(8551,4630);
M(8725,4580);
L(8725,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(8898,4580);
L(8898,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(8898,4580);
L(8898,4680);
ctx.stroke();
ctx.closePath();
T(8898,4830,10.0,"Center","2012");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9070,4580);
L(9070,4630);
M(9243,4580);
L(9243,4630);
M(9417,4580);
L(9417,4630);
M(9589,4580);
L(9589,4630);
M(9760,4580);
L(9760,4630);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(620,301);
L(620,4580);
L(9759,4580);
M(9759,301);
M(620,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(000,000,000)";
TR(90,2491,270,10.0,"Center","#Vulnerabilities");
T(5189,4980,10.0,"Center","Date");
T(5189,201,10.0,"Center","Memory error vulnerabilities categorized");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (typeof(gnuplot.hide_categories_vulns_plot_1) == "undefined"|| !gnuplot.hide_categories_vulns_plot_1) {
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(255,204,051)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2162,1146,10.0,"Right","Stack");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(255,204,051)";
ctx.fillStyle = "rgba(255,204,051,0.80)";
R(1102,1065,420,62);
bp(620, 4580);
L(679, 4580);
L(792, 4580);
L(907, 4580);
L(1022, 4580);
L(1137, 4580);
L(1253, 4580);
L(1370, 4580);
L(1481, 4580);
L(1596, 4580);
L(1712, 4580);
L(1827, 4580);
L(1942, 4580);
L(2059, 4580);
L(2171, 4580);
L(2286, 4580);
L(2401, 4580);
L(2516, 4580);
L(2631, 4516);
L(2748, 4559);
L(2860, 4559);
L(2975, 4559);
L(3090, 4516);
L(3206, 4559);
L(3321, 4195);
L(3438, 4516);
L(3551, 4409);
L(3666, 4516);
L(3782, 4323);
L(3897, 4494);
L(4012, 3917);
L(4129, 4323);
L(4240, 4516);
L(4356, 4045);
L(4471, 4302);
L(4586, 4024);
L(4701, 4002);
L(4818, 4345);
L(4930, 4323);
L(5045, 4109);
L(5160, 3938);
L(5275, 4238);
L(5391, 3617);
L(5508, 3895);
L(5619, 3254);
L(5734, 3403);
L(5850, 3660);
L(5965, 3639);
L(6080, 3532);
L(6197, 3746);
L(6310, 3553);
L(6426, 3681);
L(6541, 3981);
L(6656, 3703);
L(6771, 3960);
L(6888, 3938);
L(7000, 3596);
L(7115, 3532);
L(7230, 3831);
L(7345, 3960);
L(7461, 3724);
L(7578, 4088);
L(7689, 3895);
L(7804, 3895);
L(7919, 4152);
L(8035, 4216);
L(8150, 4152);
L(8267, 3724);
L(8378, 4323);
L(8494, 4045);
L(8609, 4259);
L(8724, 4238);
L(8839, 4195);
L(8956, 4280);
L(9070, 4387);
L(9185, 4323);
L(9300, 4067);
L(9415, 4152);
L(9530, 4345);
L(9648, 3981);
L(9759, 4323);
L(9759, 4580);
L(620, 4580);
cfp();
} // End categories_vulns_plot_1 
if (typeof(gnuplot.hide_categories_vulns_plot_2) == "undefined"|| !gnuplot.hide_categories_vulns_plot_2) {
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(000,171,000)";
ctx.strokeStyle = "rgb(080,096,208)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2162,1021,10.0,"Right","Heap");
ctx.strokeStyle = "rgb(000,171,000)";
ctx.strokeStyle = "rgb(080,096,208)";
ctx.fillStyle = "rgba(080,096,208,0.80)";
R(1102,940,420,62);
bp(620, 4580);
L(620, 4580);
L(678, 4580);
L(678, 4580);
cfp();
bp(679, 4580);
L(679, 4580);
L(791, 4580);
L(791, 4580);
cfp();
bp(792, 4580);
L(792, 4580);
L(906, 4580);
L(906, 4580);
cfp();
bp(907, 4580);
L(907, 4580);
L(1021, 4580);
L(1021, 4580);
cfp();
bp(1022, 4580);
L(1022, 4580);
L(1136, 4580);
L(1136, 4580);
cfp();
bp(1137, 4580);
L(1137, 4580);
L(1252, 4516);
L(1252, 4580);
cfp();
bp(1253, 4580);
L(1253, 4516);
L(1369, 4580);
L(1369, 4580);
cfp();
bp(1370, 4580);
L(1370, 4580);
L(1480, 4580);
L(1480, 4580);
cfp();
bp(1481, 4580);
L(1481, 4580);
L(1595, 4559);
L(1595, 4580);
cfp();
bp(1596, 4580);
L(1596, 4559);
L(1711, 4580);
L(1711, 4580);
cfp();
bp(1712, 4580);
L(1712, 4580);
L(1826, 4559);
L(1826, 4580);
cfp();
bp(1827, 4580);
L(1827, 4559);
L(1941, 4580);
L(1941, 4580);
cfp();
bp(1942, 4580);
L(1942, 4580);
L(2058, 4580);
L(2058, 4580);
cfp();
bp(2059, 4580);
L(2059, 4580);
L(2170, 4537);
L(2170, 4580);
cfp();
bp(2171, 4580);
L(2171, 4537);
L(2285, 4516);
L(2285, 4580);
cfp();
bp(2286, 4580);
L(2286, 4516);
L(2400, 4537);
L(2400, 4580);
cfp();
bp(2401, 4580);
L(2401, 4537);
L(2515, 4580);
L(2515, 4580);
cfp();
bp(2516, 4580);
L(2516, 4580);
L(2630, 4323);
L(2630, 4516);
cfp();
bp(2631, 4516);
L(2631, 4323);
L(2747, 4516);
L(2747, 4559);
cfp();
bp(2748, 4559);
L(2748, 4516);
L(2859, 4452);
L(2859, 4559);
cfp();
bp(2860, 4559);
L(2860, 4452);
L(2974, 4494);
L(2974, 4559);
cfp();
bp(2975, 4559);
L(2975, 4494);
L(3089, 4452);
L(3089, 4516);
cfp();
bp(3090, 4516);
L(3090, 4452);
L(3205, 4430);
L(3205, 4559);
cfp();
bp(3206, 4559);
L(3206, 4430);
L(3320, 3960);
L(3320, 4195);
cfp();
bp(3321, 4195);
L(3321, 3960);
L(3437, 4516);
L(3437, 4516);
cfp();
bp(3438, 4516);
L(3438, 4516);
L(3550, 4302);
L(3550, 4409);
cfp();
bp(3551, 4409);
L(3551, 4302);
L(3665, 4430);
L(3665, 4516);
cfp();
bp(3666, 4516);
L(3666, 4430);
L(3781, 4024);
L(3781, 4323);
cfp();
bp(3782, 4323);
L(3782, 4024);
L(3896, 4302);
L(3896, 4494);
cfp();
bp(3897, 4494);
L(3897, 4302);
L(4011, 3532);
L(4011, 3917);
cfp();
bp(4012, 3917);
L(4012, 3532);
L(4128, 4024);
L(4128, 4323);
cfp();
bp(4129, 4323);
L(4129, 4024);
L(4239, 4366);
L(4239, 4516);
cfp();
bp(4240, 4516);
L(4240, 4366);
L(4355, 3446);
L(4355, 4045);
cfp();
bp(4356, 4045);
L(4356, 3446);
L(4470, 4195);
L(4470, 4302);
cfp();
bp(4471, 4302);
L(4471, 4195);
L(4585, 3853);
L(4585, 4024);
cfp();
bp(4586, 4024);
L(4586, 3853);
L(4700, 3318);
L(4700, 4002);
cfp();
bp(4701, 4002);
L(4701, 3318);
L(4817, 4109);
L(4817, 4345);
cfp();
bp(4818, 4345);
L(4818, 4109);
L(4929, 4067);
L(4929, 4323);
cfp();
bp(4930, 4323);
L(4930, 4067);
L(5044, 3767);
L(5044, 4109);
cfp();
bp(5045, 4109);
L(5045, 3767);
L(5159, 3489);
L(5159, 3938);
cfp();
bp(5160, 3938);
L(5160, 3489);
L(5274, 3831);
L(5274, 4238);
cfp();
bp(5275, 4238);
L(5275, 3831);
L(5390, 2868);
L(5390, 3617);
cfp();
bp(5391, 3617);
L(5391, 2868);
L(5507, 3510);
L(5507, 3895);
cfp();
bp(5508, 3895);
L(5508, 3510);
L(5618, 2633);
L(5618, 3254);
cfp();
bp(5619, 3254);
L(5619, 2633);
L(5733, 2868);
L(5733, 3403);
cfp();
bp(5734, 3403);
L(5734, 2868);
L(5849, 3082);
L(5849, 3660);
cfp();
bp(5850, 3660);
L(5850, 3082);
L(5964, 2847);
L(5964, 3639);
cfp();
bp(5965, 3639);
L(5965, 2847);
L(6079, 2804);
L(6079, 3532);
cfp();
bp(6080, 3532);
L(6080, 2804);
L(6196, 3104);
L(6196, 3746);
cfp();
bp(6197, 3746);
L(6197, 3104);
L(6309, 2911);
L(6309, 3553);
cfp();
bp(6310, 3553);
L(6310, 2911);
L(6425, 3147);
L(6425, 3681);
cfp();
bp(6426, 3681);
L(6426, 3147);
L(6540, 3596);
L(6540, 3981);
cfp();
bp(6541, 3981);
L(6541, 3596);
L(6655, 2911);
L(6655, 3703);
cfp();
bp(6656, 3703);
L(6656, 2911);
L(6770, 3061);
L(6770, 3960);
cfp();
bp(6771, 3960);
L(6771, 3061);
L(6887, 3425);
L(6887, 3938);
cfp();
bp(6888, 3938);
L(6888, 3425);
L(6999, 2783);
L(6999, 3596);
cfp();
bp(7000, 3596);
L(7000, 2783);
L(7114, 2526);
L(7114, 3532);
cfp();
bp(7115, 3532);
L(7115, 2526);
L(7229, 3147);
L(7229, 3831);
cfp();
bp(7230, 3831);
L(7230, 3147);
L(7344, 3018);
L(7344, 3960);
cfp();
bp(7345, 3960);
L(7345, 3018);
L(7460, 3147);
L(7460, 3724);
cfp();
bp(7461, 3724);
L(7461, 3147);
L(7577, 3489);
L(7577, 4088);
cfp();
bp(7578, 4088);
L(7578, 3489);
L(7688, 2911);
L(7688, 3895);
cfp();
bp(7689, 3895);
L(7689, 2911);
L(7803, 2997);
L(7803, 3895);
cfp();
bp(7804, 3895);
L(7804, 2997);
L(7918, 3425);
L(7918, 4152);
cfp();
bp(7919, 4152);
L(7919, 3425);
L(8034, 3639);
L(8034, 4216);
cfp();
bp(8035, 4216);
L(8035, 3639);
L(8149, 2911);
L(8149, 4152);
cfp();
bp(8150, 4152);
L(8150, 2911);
L(8266, 2890);
L(8266, 3724);
cfp();
bp(8267, 3724);
L(8267, 2890);
L(8377, 3232);
L(8377, 4323);
cfp();
bp(8378, 4323);
L(8378, 3232);
L(8493, 3147);
L(8493, 4045);
cfp();
bp(8494, 4045);
L(8494, 3147);
L(8608, 3168);
L(8608, 4259);
cfp();
bp(8609, 4259);
L(8609, 3168);
L(8723, 3467);
L(8723, 4238);
cfp();
bp(8724, 4238);
L(8724, 3467);
L(8838, 3724);
L(8838, 4195);
cfp();
bp(8839, 4195);
L(8839, 3724);
L(8955, 3467);
L(8955, 4280);
cfp();
bp(8956, 4280);
L(8956, 3467);
L(9069, 3403);
L(9069, 4387);
cfp();
bp(9070, 4387);
L(9070, 3403);
L(9184, 3211);
L(9184, 4323);
cfp();
bp(9185, 4323);
L(9185, 3211);
L(9299, 2547);
L(9299, 4067);
cfp();
bp(9300, 4067);
L(9300, 2547);
L(9414, 3147);
L(9414, 4152);
cfp();
bp(9415, 4152);
L(9415, 3147);
L(9529, 3168);
L(9529, 4345);
cfp();
bp(9530, 4345);
L(9530, 3168);
L(9647, 2911);
L(9647, 3981);
cfp();
bp(9648, 3981);
L(9648, 2911);
L(9758, 3660);
L(9758, 4323);
cfp();
} // End categories_vulns_plot_2 
if (typeof(gnuplot.hide_categories_vulns_plot_3) == "undefined"|| !gnuplot.hide_categories_vulns_plot_3) {
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(000,000,225)";
ctx.strokeStyle = "rgb(153,051,051)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2162,896,10.0,"Right","Integer");
ctx.strokeStyle = "rgb(000,000,225)";
ctx.strokeStyle = "rgb(153,051,051)";
ctx.fillStyle = "rgba(153,051,051,0.80)";
R(1102,815,420,62);
bp(620, 4580);
L(620, 4580);
L(678, 4580);
L(678, 4580);
cfp();
bp(679, 4580);
L(679, 4580);
L(791, 4580);
L(791, 4580);
cfp();
bp(792, 4580);
L(792, 4580);
L(906, 4580);
L(906, 4580);
cfp();
bp(907, 4580);
L(907, 4580);
L(1021, 4580);
L(1021, 4580);
cfp();
bp(1022, 4580);
L(1022, 4580);
L(1136, 4580);
L(1136, 4580);
cfp();
bp(1137, 4580);
L(1137, 4580);
L(1252, 4494);
L(1252, 4516);
cfp();
bp(1253, 4516);
L(1253, 4494);
L(1369, 4580);
L(1369, 4580);
cfp();
bp(1370, 4580);
L(1370, 4580);
L(1480, 4516);
L(1480, 4580);
cfp();
bp(1481, 4580);
L(1481, 4516);
L(1595, 4559);
L(1595, 4559);
cfp();
bp(1596, 4559);
L(1596, 4559);
L(1711, 4559);
L(1711, 4580);
cfp();
bp(1712, 4580);
L(1712, 4559);
L(1826, 4559);
L(1826, 4559);
cfp();
bp(1827, 4559);
L(1827, 4559);
L(1941, 4537);
L(1941, 4580);
cfp();
bp(1942, 4580);
L(1942, 4537);
L(2058, 4559);
L(2058, 4580);
cfp();
bp(2059, 4580);
L(2059, 4559);
L(2170, 4516);
L(2170, 4537);
cfp();
bp(2171, 4537);
L(2171, 4516);
L(2285, 4516);
L(2285, 4516);
cfp();
bp(2286, 4516);
L(2286, 4516);
L(2400, 4409);
L(2400, 4537);
cfp();
bp(2401, 4537);
L(2401, 4409);
L(2515, 4516);
L(2515, 4580);
cfp();
bp(2516, 4580);
L(2516, 4516);
L(2630, 3981);
L(2630, 4323);
cfp();
bp(2631, 4323);
L(2631, 3981);
L(2747, 4387);
L(2747, 4516);
cfp();
bp(2748, 4516);
L(2748, 4387);
L(2859, 4302);
L(2859, 4452);
cfp();
bp(2860, 4452);
L(2860, 4302);
L(2974, 4216);
L(2974, 4494);
cfp();
bp(2975, 4494);
L(2975, 4216);
L(3089, 4302);
L(3089, 4452);
cfp();
bp(3090, 4452);
L(3090, 4302);
L(3205, 4409);
L(3205, 4430);
cfp();
bp(3206, 4430);
L(3206, 4409);
L(3320, 3767);
L(3320, 3960);
cfp();
bp(3321, 3960);
L(3321, 3767);
L(3437, 4494);
L(3437, 4516);
cfp();
bp(3438, 4516);
L(3438, 4494);
L(3550, 4259);
L(3550, 4302);
cfp();
bp(3551, 4302);
L(3551, 4259);
L(3665, 4366);
L(3665, 4430);
cfp();
bp(3666, 4430);
L(3666, 4366);
L(3781, 3810);
L(3781, 4024);
cfp();
bp(3782, 4024);
L(3782, 3810);
L(3896, 4195);
L(3896, 4302);
cfp();
bp(3897, 4302);
L(3897, 4195);
L(4011, 2997);
L(4011, 3532);
cfp();
bp(4012, 3532);
L(4012, 2997);
L(4128, 3639);
L(4128, 4024);
cfp();
bp(4129, 4024);
L(4129, 3639);
L(4239, 4152);
L(4239, 4366);
cfp();
bp(4240, 4366);
L(4240, 4152);
L(4355, 3061);
L(4355, 3446);
cfp();
bp(4356, 3446);
L(4356, 3061);
L(4470, 4088);
L(4470, 4195);
cfp();
bp(4471, 4195);
L(4471, 4088);
L(4585, 3703);
L(4585, 3853);
cfp();
bp(4586, 3853);
L(4586, 3703);
L(4700, 2997);
L(4700, 3318);
cfp();
bp(4701, 3318);
L(4701, 2997);
L(4817, 3938);
L(4817, 4109);
cfp();
bp(4818, 4109);
L(4818, 3938);
L(4929, 3767);
L(4929, 4067);
cfp();
bp(4930, 4067);
L(4930, 3767);
L(5044, 3296);
L(5044, 3767);
cfp();
bp(5045, 3767);
L(5045, 3296);
L(5159, 3061);
L(5159, 3489);
cfp();
bp(5160, 3489);
L(5160, 3061);
L(5274, 3467);
L(5274, 3831);
cfp();
bp(5275, 3831);
L(5275, 3467);
L(5390, 2547);
L(5390, 2868);
cfp();
bp(5391, 2868);
L(5391, 2547);
L(5507, 3275);
L(5507, 3510);
cfp();
bp(5508, 3510);
L(5508, 3275);
L(5618, 1948);
L(5618, 2633);
cfp();
bp(5619, 2633);
L(5619, 1948);
L(5733, 2547);
L(5733, 2868);
cfp();
bp(5734, 2868);
L(5734, 2547);
L(5849, 2526);
L(5849, 3082);
cfp();
bp(5850, 3082);
L(5850, 2526);
L(5964, 2462);
L(5964, 2847);
cfp();
bp(5965, 2847);
L(5965, 2462);
L(6079, 2398);
L(6079, 2804);
cfp();
bp(6080, 2804);
L(6080, 2398);
L(6196, 2847);
L(6196, 3104);
cfp();
bp(6197, 3104);
L(6197, 2847);
L(6309, 2419);
L(6309, 2911);
cfp();
bp(6310, 2911);
L(6310, 2419);
L(6425, 2804);
L(6425, 3147);
cfp();
bp(6426, 3147);
L(6426, 2804);
L(6540, 3275);
L(6540, 3596);
cfp();
bp(6541, 3596);
L(6541, 3275);
L(6655, 2483);
L(6655, 2911);
cfp();
bp(6656, 2911);
L(6656, 2483);
L(6770, 2612);
L(6770, 3061);
cfp();
bp(6771, 3061);
L(6771, 2612);
L(6887, 3082);
L(6887, 3425);
cfp();
bp(6888, 3425);
L(6888, 3082);
L(6999, 2248);
L(6999, 2783);
cfp();
bp(7000, 2783);
L(7000, 2248);
L(7114, 2312);
L(7114, 2526);
cfp();
bp(7115, 2526);
L(7115, 2312);
L(7229, 2697);
L(7229, 3147);
cfp();
bp(7230, 3147);
L(7230, 2697);
L(7344, 2612);
L(7344, 3018);
cfp();
bp(7345, 3018);
L(7345, 2612);
L(7460, 2911);
L(7460, 3147);
cfp();
bp(7461, 3147);
L(7461, 2911);
L(7577, 3061);
L(7577, 3489);
cfp();
bp(7578, 3489);
L(7578, 3061);
L(7688, 2569);
L(7688, 2911);
cfp();
bp(7689, 2911);
L(7689, 2569);
L(7803, 2462);
L(7803, 2997);
cfp();
bp(7804, 2997);
L(7804, 2462);
L(7918, 2954);
L(7918, 3425);
cfp();
bp(7919, 3425);
L(7919, 2954);
L(8034, 3147);
L(8034, 3639);
cfp();
bp(8035, 3639);
L(8035, 3147);
L(8149, 2441);
L(8149, 2911);
cfp();
bp(8150, 2911);
L(8150, 2441);
L(8266, 2269);
L(8266, 2890);
cfp();
bp(8267, 2890);
L(8267, 2269);
L(8377, 2826);
L(8377, 3232);
cfp();
bp(8378, 3232);
L(8378, 2826);
L(8493, 2590);
L(8493, 3147);
cfp();
bp(8494, 3147);
L(8494, 2590);
L(8608, 2783);
L(8608, 3168);
cfp();
bp(8609, 3168);
L(8609, 2783);
L(8723, 3232);
L(8723, 3467);
cfp();
bp(8724, 3467);
L(8724, 3232);
L(8838, 3617);
L(8838, 3724);
cfp();
bp(8839, 3724);
L(8839, 3617);
L(8955, 3339);
L(8955, 3467);
cfp();
bp(8956, 3467);
L(8956, 3339);
L(9069, 3211);
L(9069, 3403);
cfp();
bp(9070, 3403);
L(9070, 3211);
L(9184, 2355);
L(9184, 3211);
cfp();
bp(9185, 3211);
L(9185, 2355);
L(9299, 1991);
L(9299, 2547);
cfp();
bp(9300, 2547);
L(9300, 1991);
L(9414, 2997);
L(9414, 3147);
cfp();
bp(9415, 3147);
L(9415, 2997);
L(9529, 2804);
L(9529, 3168);
cfp();
bp(9530, 3168);
L(9530, 2804);
L(9647, 2590);
L(9647, 2911);
cfp();
bp(9648, 2911);
L(9648, 2590);
L(9758, 3360);
L(9758, 3660);
cfp();
} // End categories_vulns_plot_3 
if (typeof(gnuplot.hide_categories_vulns_plot_4) == "undefined"|| !gnuplot.hide_categories_vulns_plot_4) {
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(190,000,190)";
ctx.strokeStyle = "rgb(102,153,051)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2162,771,10.0,"Right","Pointer");
ctx.strokeStyle = "rgb(190,000,190)";
ctx.strokeStyle = "rgb(102,153,051)";
ctx.fillStyle = "rgba(102,153,051,0.80)";
R(1102,690,420,62);
bp(620, 4580);
L(620, 4580);
L(678, 4580);
L(678, 4580);
cfp();
bp(679, 4580);
L(679, 4580);
L(791, 4580);
L(791, 4580);
cfp();
bp(792, 4580);
L(792, 4580);
L(906, 4580);
L(906, 4580);
cfp();
bp(907, 4580);
L(907, 4580);
L(1021, 4580);
L(1021, 4580);
cfp();
bp(1022, 4580);
L(1022, 4580);
L(1136, 4580);
L(1136, 4580);
cfp();
bp(1137, 4580);
L(1137, 4580);
L(1252, 4494);
L(1252, 4494);
cfp();
bp(1253, 4494);
L(1253, 4494);
L(1369, 4580);
L(1369, 4580);
cfp();
bp(1370, 4580);
L(1370, 4580);
L(1480, 4516);
L(1480, 4516);
cfp();
bp(1481, 4516);
L(1481, 4516);
L(1595, 4537);
L(1595, 4559);
cfp();
bp(1596, 4559);
L(1596, 4537);
L(1711, 4559);
L(1711, 4559);
cfp();
bp(1712, 4559);
L(1712, 4559);
L(1826, 4559);
L(1826, 4559);
cfp();
bp(1827, 4559);
L(1827, 4559);
L(1941, 4516);
L(1941, 4537);
cfp();
bp(1942, 4537);
L(1942, 4516);
L(2058, 4559);
L(2058, 4559);
cfp();
bp(2059, 4559);
L(2059, 4559);
L(2170, 4516);
L(2170, 4516);
cfp();
bp(2171, 4516);
L(2171, 4516);
L(2285, 4473);
L(2285, 4516);
cfp();
bp(2286, 4516);
L(2286, 4473);
L(2400, 4409);
L(2400, 4409);
cfp();
bp(2401, 4409);
L(2401, 4409);
L(2515, 4473);
L(2515, 4516);
cfp();
bp(2516, 4516);
L(2516, 4473);
L(2630, 3895);
L(2630, 3981);
cfp();
bp(2631, 3981);
L(2631, 3895);
L(2747, 4366);
L(2747, 4387);
cfp();
bp(2748, 4387);
L(2748, 4366);
L(2859, 4259);
L(2859, 4302);
cfp();
bp(2860, 4302);
L(2860, 4259);
L(2974, 4216);
L(2974, 4216);
cfp();
bp(2975, 4216);
L(2975, 4216);
L(3089, 4302);
L(3089, 4302);
cfp();
bp(3090, 4302);
L(3090, 4302);
L(3205, 4366);
L(3205, 4409);
cfp();
bp(3206, 4409);
L(3206, 4366);
L(3320, 3724);
L(3320, 3767);
cfp();
bp(3321, 3767);
L(3321, 3724);
L(3437, 4452);
L(3437, 4494);
cfp();
bp(3438, 4494);
L(3438, 4452);
L(3550, 4216);
L(3550, 4259);
cfp();
bp(3551, 4259);
L(3551, 4216);
L(3665, 4302);
L(3665, 4366);
cfp();
bp(3666, 4366);
L(3666, 4302);
L(3781, 3703);
L(3781, 3810);
cfp();
bp(3782, 3810);
L(3782, 3703);
L(3896, 4109);
L(3896, 4195);
cfp();
bp(3897, 4195);
L(3897, 4109);
L(4011, 2719);
L(4011, 2997);
cfp();
bp(4012, 2997);
L(4012, 2719);
L(4128, 3553);
L(4128, 3639);
cfp();
bp(4129, 3639);
L(4129, 3553);
L(4239, 4109);
L(4239, 4152);
cfp();
bp(4240, 4152);
L(4240, 4109);
L(4355, 2847);
L(4355, 3061);
cfp();
bp(4356, 3061);
L(4356, 2847);
L(4470, 3981);
L(4470, 4088);
cfp();
bp(4471, 4088);
L(4471, 3981);
L(4585, 3617);
L(4585, 3703);
cfp();
bp(4586, 3703);
L(4586, 3617);
L(4700, 2633);
L(4700, 2997);
cfp();
bp(4701, 2997);
L(4701, 2633);
L(4817, 3831);
L(4817, 3938);
cfp();
bp(4818, 3938);
L(4818, 3831);
L(4929, 3467);
L(4929, 3767);
cfp();
bp(4930, 3767);
L(4930, 3467);
L(5044, 3168);
L(5044, 3296);
cfp();
bp(5045, 3296);
L(5045, 3168);
L(5159, 2676);
L(5159, 3061);
cfp();
bp(5160, 3061);
L(5160, 2676);
L(5274, 3232);
L(5274, 3467);
cfp();
bp(5275, 3467);
L(5275, 3232);
L(5390, 2248);
L(5390, 2547);
cfp();
bp(5391, 2547);
L(5391, 2248);
L(5507, 2954);
L(5507, 3275);
cfp();
bp(5508, 3275);
L(5508, 2954);
L(5618, 1521);
L(5618, 1948);
cfp();
bp(5619, 1948);
L(5619, 1521);
L(5733, 2291);
L(5733, 2547);
cfp();
bp(5734, 2547);
L(5734, 2291);
L(5849, 2227);
L(5849, 2526);
cfp();
bp(5850, 2526);
L(5850, 2227);
L(5964, 2291);
L(5964, 2462);
cfp();
bp(5965, 2462);
L(5965, 2291);
L(6079, 2205);
L(6079, 2398);
cfp();
bp(6080, 2398);
L(6080, 2205);
L(6196, 2398);
L(6196, 2847);
cfp();
bp(6197, 2847);
L(6197, 2398);
L(6309, 2098);
L(6309, 2419);
cfp();
bp(6310, 2419);
L(6310, 2098);
L(6425, 2676);
L(6425, 2804);
cfp();
bp(6426, 2804);
L(6426, 2676);
L(6540, 2975);
L(6540, 3275);
cfp();
bp(6541, 3275);
L(6541, 2975);
L(6655, 2248);
L(6655, 2483);
cfp();
bp(6656, 2483);
L(6656, 2248);
L(6770, 2441);
L(6770, 2612);
cfp();
bp(6771, 2612);
L(6771, 2441);
L(6887, 2911);
L(6887, 3082);
cfp();
bp(6888, 3082);
L(6888, 2911);
L(6999, 1991);
L(6999, 2248);
cfp();
bp(7000, 2248);
L(7000, 1991);
L(7114, 2120);
L(7114, 2312);
cfp();
bp(7115, 2312);
L(7115, 2120);
L(7229, 2248);
L(7229, 2697);
cfp();
bp(7230, 2697);
L(7230, 2248);
L(7344, 2227);
L(7344, 2612);
cfp();
bp(7345, 2612);
L(7345, 2227);
L(7460, 2569);
L(7460, 2911);
cfp();
bp(7461, 2911);
L(7461, 2569);
L(7577, 2847);
L(7577, 3061);
cfp();
bp(7578, 3061);
L(7578, 2847);
L(7688, 2312);
L(7688, 2569);
cfp();
bp(7689, 2569);
L(7689, 2312);
L(7803, 2120);
L(7803, 2462);
cfp();
bp(7804, 2462);
L(7804, 2120);
L(7918, 2761);
L(7918, 2954);
cfp();
bp(7919, 2954);
L(7919, 2761);
L(8034, 2676);
L(8034, 3147);
cfp();
bp(8035, 3147);
L(8035, 2676);
L(8149, 2055);
L(8149, 2441);
cfp();
bp(8150, 2441);
L(8150, 2055);
L(8266, 1991);
L(8266, 2269);
cfp();
bp(8267, 2269);
L(8267, 1991);
L(8377, 2312);
L(8377, 2826);
cfp();
bp(8378, 2826);
L(8378, 2312);
L(8493, 2291);
L(8493, 2590);
cfp();
bp(8494, 2590);
L(8494, 2291);
L(8608, 2483);
L(8608, 2783);
cfp();
bp(8609, 2783);
L(8609, 2483);
L(8723, 2997);
L(8723, 3232);
cfp();
bp(8724, 3232);
L(8724, 2997);
L(8838, 3446);
L(8838, 3617);
cfp();
bp(8839, 3617);
L(8839, 3446);
L(8955, 3082);
L(8955, 3339);
cfp();
bp(8956, 3339);
L(8956, 3082);
L(9069, 2997);
L(9069, 3211);
cfp();
bp(9070, 3211);
L(9070, 2997);
L(9184, 2034);
L(9184, 2355);
cfp();
bp(9185, 2355);
L(9185, 2034);
L(9299, 1841);
L(9299, 1991);
cfp();
bp(9300, 1991);
L(9300, 1841);
L(9414, 2826);
L(9414, 2997);
cfp();
bp(9415, 2997);
L(9415, 2826);
L(9529, 2547);
L(9529, 2804);
cfp();
bp(9530, 2804);
L(9530, 2547);
L(9647, 2334);
L(9647, 2590);
cfp();
bp(9648, 2590);
L(9648, 2334);
L(9758, 3061);
L(9758, 3360);
cfp();
} // End categories_vulns_plot_4 
if (typeof(gnuplot.hide_categories_vulns_plot_5) == "undefined"|| !gnuplot.hide_categories_vulns_plot_5) {
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(000,255,255)";
ctx.strokeStyle = "rgb(048,048,048)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2162,646,10.0,"Right","Format");
ctx.strokeStyle = "rgb(000,255,255)";
ctx.strokeStyle = "rgb(048,048,048)";
ctx.fillStyle = "rgba(048,048,048,0.80)";
R(1102,565,420,62);
bp(620, 4580);
L(620, 4580);
L(678, 4580);
L(678, 4580);
cfp();
bp(679, 4580);
L(679, 4580);
L(791, 4580);
L(791, 4580);
cfp();
bp(792, 4580);
L(792, 4580);
L(906, 4559);
L(906, 4580);
cfp();
bp(907, 4580);
L(907, 4559);
L(1021, 4494);
L(1021, 4580);
cfp();
bp(1022, 4580);
L(1022, 4494);
L(1136, 4430);
L(1136, 4580);
cfp();
bp(1137, 4580);
L(1137, 4430);
L(1252, 3981);
L(1252, 4494);
cfp();
bp(1253, 4494);
L(1253, 3981);
L(1369, 4516);
L(1369, 4580);
cfp();
bp(1370, 4580);
L(1370, 4516);
L(1480, 4430);
L(1480, 4516);
cfp();
bp(1481, 4516);
L(1481, 4430);
L(1595, 4345);
L(1595, 4537);
cfp();
bp(1596, 4537);
L(1596, 4345);
L(1711, 4345);
L(1711, 4559);
cfp();
bp(1712, 4559);
L(1712, 4345);
L(1826, 4430);
L(1826, 4559);
cfp();
bp(1827, 4559);
L(1827, 4430);
L(1941, 4216);
L(1941, 4516);
cfp();
bp(1942, 4516);
L(1942, 4216);
L(2058, 4516);
L(2058, 4559);
cfp();
bp(2059, 4559);
L(2059, 4516);
L(2170, 4473);
L(2170, 4516);
cfp();
bp(2171, 4516);
L(2171, 4473);
L(2285, 4345);
L(2285, 4473);
cfp();
bp(2286, 4473);
L(2286, 4345);
L(2400, 4173);
L(2400, 4409);
cfp();
bp(2401, 4409);
L(2401, 4173);
L(2515, 4259);
L(2515, 4473);
cfp();
bp(2516, 4473);
L(2516, 4259);
L(2630, 3660);
L(2630, 3895);
cfp();
bp(2631, 3895);
L(2631, 3660);
L(2747, 4323);
L(2747, 4366);
cfp();
bp(2748, 4366);
L(2748, 4323);
L(2859, 4088);
L(2859, 4259);
cfp();
bp(2860, 4259);
L(2860, 4088);
L(2974, 4152);
L(2974, 4216);
cfp();
bp(2975, 4216);
L(2975, 4152);
L(3089, 4131);
L(3089, 4302);
cfp();
bp(3090, 4302);
L(3090, 4131);
L(3205, 4302);
L(3205, 4366);
cfp();
bp(3206, 4366);
L(3206, 4302);
L(3320, 3532);
L(3320, 3724);
cfp();
bp(3321, 3724);
L(3321, 3532);
L(3437, 4387);
L(3437, 4452);
cfp();
bp(3438, 4452);
L(3438, 4387);
L(3550, 4002);
L(3550, 4216);
cfp();
bp(3551, 4216);
L(3551, 4002);
L(3665, 4259);
L(3665, 4302);
cfp();
bp(3666, 4302);
L(3666, 4259);
L(3781, 3489);
L(3781, 3703);
cfp();
bp(3782, 3703);
L(3782, 3489);
L(3896, 4024);
L(3896, 4109);
cfp();
bp(3897, 4109);
L(3897, 4024);
L(4011, 2013);
L(4011, 2719);
cfp();
bp(4012, 2719);
L(4012, 2013);
L(4128, 3360);
L(4128, 3553);
cfp();
bp(4129, 3553);
L(4129, 3360);
L(4239, 3917);
L(4239, 4109);
cfp();
bp(4240, 4109);
L(4240, 3917);
L(4355, 2248);
L(4355, 2847);
cfp();
bp(4356, 2847);
L(4356, 2248);
L(4470, 3767);
L(4470, 3981);
cfp();
bp(4471, 3981);
L(4471, 3767);
L(4585, 3360);
L(4585, 3617);
cfp();
bp(4586, 3617);
L(4586, 3360);
L(4700, 2291);
L(4700, 2633);
cfp();
bp(4701, 2633);
L(4701, 2291);
L(4817, 3532);
L(4817, 3831);
cfp();
bp(4818, 3831);
L(4818, 3532);
L(4929, 3211);
L(4929, 3467);
cfp();
bp(4930, 3467);
L(4930, 3211);
L(5044, 2975);
L(5044, 3168);
cfp();
bp(5045, 3168);
L(5045, 2975);
L(5159, 2505);
L(5159, 2676);
cfp();
bp(5160, 2676);
L(5160, 2505);
L(5274, 3061);
L(5274, 3232);
cfp();
bp(5275, 3232);
L(5275, 3061);
L(5390, 1991);
L(5390, 2248);
cfp();
bp(5391, 2248);
L(5391, 1991);
L(5507, 2547);
L(5507, 2954);
cfp();
bp(5508, 2954);
L(5508, 2547);
L(5618, 1264);
L(5618, 1521);
cfp();
bp(5619, 1521);
L(5619, 1264);
L(5733, 2141);
L(5733, 2291);
cfp();
bp(5734, 2291);
L(5734, 2141);
L(5849, 1970);
L(5849, 2227);
cfp();
bp(5850, 2227);
L(5850, 1970);
L(5964, 2055);
L(5964, 2291);
cfp();
bp(5965, 2291);
L(5965, 2055);
L(6079, 2077);
L(6079, 2205);
cfp();
bp(6080, 2205);
L(6080, 2077);
L(6196, 2184);
L(6196, 2398);
cfp();
bp(6197, 2398);
L(6197, 2184);
L(6309, 1863);
L(6309, 2098);
cfp();
bp(6310, 2098);
L(6310, 1863);
L(6425, 2676);
L(6425, 2676);
cfp();
bp(6426, 2676);
L(6426, 2676);
L(6540, 2868);
L(6540, 2975);
cfp();
bp(6541, 2975);
L(6541, 2868);
L(6655, 2205);
L(6655, 2248);
cfp();
bp(6656, 2248);
L(6656, 2205);
L(6770, 2419);
L(6770, 2441);
cfp();
bp(6771, 2441);
L(6771, 2419);
L(6887, 2804);
L(6887, 2911);
cfp();
bp(6888, 2911);
L(6888, 2804);
L(6999, 1777);
L(6999, 1991);
cfp();
bp(7000, 1991);
L(7000, 1777);
L(7114, 2098);
L(7114, 2120);
cfp();
bp(7115, 2120);
L(7115, 2098);
L(7229, 2141);
L(7229, 2248);
cfp();
bp(7230, 2248);
L(7230, 2141);
L(7344, 2055);
L(7344, 2227);
cfp();
bp(7345, 2227);
L(7345, 2055);
L(7460, 2569);
L(7460, 2569);
cfp();
bp(7461, 2569);
L(7461, 2569);
L(7577, 2804);
L(7577, 2847);
cfp();
bp(7578, 2847);
L(7578, 2804);
L(7688, 2184);
L(7688, 2312);
cfp();
bp(7689, 2312);
L(7689, 2184);
L(7803, 1991);
L(7803, 2120);
cfp();
bp(7804, 2120);
L(7804, 1991);
L(7918, 2761);
L(7918, 2761);
cfp();
bp(7919, 2761);
L(7919, 2761);
L(8034, 2633);
L(8034, 2676);
cfp();
bp(8035, 2676);
L(8035, 2633);
L(8149, 2055);
L(8149, 2055);
cfp();
bp(8150, 2055);
L(8150, 2055);
L(8266, 1948);
L(8266, 1991);
cfp();
bp(8267, 1991);
L(8267, 1948);
L(8377, 2227);
L(8377, 2312);
cfp();
bp(8378, 2312);
L(8378, 2227);
L(8493, 2269);
L(8493, 2291);
cfp();
bp(8494, 2291);
L(8494, 2269);
L(8608, 2483);
L(8608, 2483);
cfp();
bp(8609, 2483);
L(8609, 2483);
L(8723, 2954);
L(8723, 2997);
cfp();
bp(8724, 2997);
L(8724, 2954);
L(8838, 3425);
L(8838, 3446);
cfp();
bp(8839, 3446);
L(8839, 3425);
L(8955, 3018);
L(8955, 3082);
cfp();
bp(8956, 3082);
L(8956, 3018);
L(9069, 2975);
L(9069, 2997);
cfp();
bp(9070, 2997);
L(9070, 2975);
L(9184, 1970);
L(9184, 2034);
cfp();
bp(9185, 2034);
L(9185, 1970);
L(9299, 1820);
L(9299, 1841);
cfp();
bp(9300, 1841);
L(9300, 1820);
L(9414, 2761);
L(9414, 2826);
cfp();
bp(9415, 2826);
L(9415, 2761);
L(9529, 2505);
L(9529, 2547);
cfp();
bp(9530, 2547);
L(9530, 2505);
L(9647, 2312);
L(9647, 2334);
cfp();
bp(9648, 2334);
L(9648, 2312);
L(9758, 3061);
L(9758, 3061);
cfp();
} // End categories_vulns_plot_5 
if (typeof(gnuplot.hide_categories_vulns_plot_6) == "undefined"|| !gnuplot.hide_categories_vulns_plot_6) {
ctx.lineWidth = 1;
ctx.strokeStyle = "rgb(021,117,069)";
ctx.strokeStyle = "rgb(192,192,192)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2162,521,10.0,"Right","Other");
ctx.strokeStyle = "rgb(021,117,069)";
ctx.strokeStyle = "rgb(192,192,192)";
ctx.beginPath();
M(1102,471);
L(1522,471);
M(620,3585);
L(679,4067);
L(792,3960);
L(907,3425);
L(1022,4195);
L(1137,3874);
L(1253,2783);
L(1370,3553);
L(1481,3981);
L(1596,2783);
L(1712,3211);
L(1827,3360);
L(1942,3189);
L(2059,4387);
L(2171,3596);
L(2286,3339);
L(2401,2590);
L(2516,2120);
L(2631,879);
L(2748,3960);
L(2860,3061);
L(2975,3189);
L(3090,2997);
L(3206,3681);
L(3321,1670);
L(3438,3938);
L(3551,3339);
L(3666,3895);
L(3782,2633);
L(3897,3553);
L(3983,301);
M(4068,301);
L(4129,1521);
L(4240,3339);
L(4334,301);
M(4381,301);
L(4471,2761);
L(4586,2569);
L(4701,686);
L(4818,2590);
L(4930,1884);
L(5045,1692);
L(5160,1200);
L(5275,2184);
L(5391,772);
L(5508,1392);
L(5573,301);
M(5720,301);
L(5734,408);
L(5850,494);
L(5965,622);
L(6080,1242);
L(6197,1007);
L(6310,1028);
L(6426,2120);
L(6541,2334);
L(6656,1756);
L(6771,1799);
L(6888,2227);
L(7000,1242);
L(7115,1713);
L(7230,1713);
L(7345,1456);
L(7461,1863);
L(7578,2334);
L(7689,1670);
L(7804,1349);
L(7919,2162);
L(8035,2269);
L(8150,1756);
L(8267,986);
L(8378,1884);
L(8494,1777);
L(8609,2077);
L(8724,2419);
L(8839,3040);
L(8956,2633);
L(9070,2462);
L(9185,1242);
L(9300,1200);
L(9415,1799);
L(9530,2013);
L(9648,1414);
L(9759,2505);
ctx.stroke();
ctx.closePath();
} // End categories_vulns_plot_6 
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";

// plot boundaries and axis scaling information for mousing 
gnuplot.plot_term_xmax = 1000;
gnuplot.plot_term_ymax = 500;
gnuplot.plot_xmin = 62.0;
gnuplot.plot_xmax = 975.9;
gnuplot.plot_ybot = 458.0;
gnuplot.plot_ytop = 30.1;
gnuplot.plot_width = 913.9;
gnuplot.plot_height = 427.9;
gnuplot.plot_axis_xmin = 0;
gnuplot.plot_axis_xmax = 4.1809e+08;
gnuplot.plot_axis_ymin = 0;
gnuplot.plot_axis_ymax = 200;
gnuplot.plot_axis_x2min = "none"
gnuplot.plot_axis_y2min = "none"
gnuplot.plot_logaxis_x = 0;
gnuplot.plot_logaxis_y = 0;
gnuplot.plot_axis_width = gnuplot.plot_axis_xmax - gnuplot.plot_axis_xmin;
gnuplot.plot_axis_height = gnuplot.plot_axis_ymax - gnuplot.plot_axis_ymin;
gnuplot.plot_timeaxis_x = "DateTime";
}
