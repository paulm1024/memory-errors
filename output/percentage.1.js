function percentage() {
canvas = document.getElementById("percentage");
ctx = canvas.getContext("2d");
// Reinitialize mouse tracking and zoom for this particular plot
if ((typeof(gnuplot.active_plot) == "undefined" || gnuplot.active_plot != percentage)  &&  typeof(gnuplot.mouse_update) != "undefined") {
  gnuplot.active_plot_name = "percentage";
  gnuplot.active_plot = percentage;
  canvas.onmousemove = gnuplot.mouse_update;
  canvas.onmouseup = gnuplot.zoom_in;
  canvas.onmousedown = gnuplot.saveclick;
  canvas.onkeypress = gnuplot.do_hotkey;
  if (canvas.attachEvent) {canvas.attachEvent('mouseover', percentage);}
  else if (canvas.addEventListener) {canvas.addEventListener('mouseover', percentage, false);} 
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
M(440,4680);
L(9759,4680);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(440,4680);
L(540,4680);
ctx.stroke();
ctx.closePath();
T(360,4730,10.0,"Right","0%");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(440,3804);
L(9759,3804);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(440,3804);
L(540,3804);
ctx.stroke();
ctx.closePath();
T(360,3854,10.0,"Right","10%");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(440,2928);
L(9759,2928);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(440,2928);
L(540,2928);
ctx.stroke();
ctx.closePath();
T(360,2978,10.0,"Right","20%");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(440,2053);
L(9759,2053);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(440,2053);
L(540,2053);
ctx.stroke();
ctx.closePath();
T(360,2103,10.0,"Right","30%");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(440,1177);
L(9759,1177);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(440,1177);
L(540,1177);
ctx.stroke();
ctx.closePath();
T(360,1227,10.0,"Right","40%");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(440,301);
L(9759,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(440,301);
L(540,301);
ctx.stroke();
ctx.closePath();
T(360,351,10.0,"Right","50%");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(440,4680);
L(440,4630);
M(582,4680);
L(582,4630);
M(726,4680);
L(726,4630);
M(869,4680);
L(869,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1014,4680);
L(1014,726);
M(1014,476);
L(1014,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(1014,4680);
L(1014,4580);
ctx.stroke();
ctx.closePath();
T(1014,4830,10.0,"Center","1998");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(1156,4680);
L(1156,4630);
M(1298,4680);
L(1298,4630);
M(1443,4680);
L(1443,4630);
M(1588,4680);
L(1588,4630);
M(1728,4680);
L(1728,4630);
M(1871,4680);
L(1871,4630);
M(2016,4680);
L(2016,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2160,4680);
L(2160,726);
M(2160,476);
L(2160,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(2160,4680);
L(2160,4580);
ctx.stroke();
ctx.closePath();
T(2160,4830,10.0,"Center","2000");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(2303,4680);
L(2303,4630);
M(2446,4680);
L(2446,4630);
M(2591,4680);
L(2591,4630);
M(2735,4680);
L(2735,4630);
M(2877,4680);
L(2877,4630);
M(3020,4680);
L(3020,4630);
M(3163,4680);
L(3163,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3308,4680);
L(3308,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(3308,4680);
L(3308,4580);
ctx.stroke();
ctx.closePath();
T(3308,4830,10.0,"Center","2002");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(3450,4680);
L(3450,4630);
M(3592,4680);
L(3592,4630);
M(3737,4680);
L(3737,4630);
M(3882,4680);
L(3882,4630);
M(4022,4680);
L(4022,4630);
M(4166,4680);
L(4166,4630);
M(4311,4680);
L(4311,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4454,4680);
L(4454,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(4454,4680);
L(4454,4580);
ctx.stroke();
ctx.closePath();
T(4454,4830,10.0,"Center","2004");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(4597,4680);
L(4597,4630);
M(4741,4680);
L(4741,4630);
M(4886,4680);
L(4886,4630);
M(5029,4680);
L(5029,4630);
M(5171,4680);
L(5171,4630);
M(5314,4680);
L(5314,4630);
M(5458,4680);
L(5458,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(5603,4680);
L(5603,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(5603,4680);
L(5603,4580);
ctx.stroke();
ctx.closePath();
T(5603,4830,10.0,"Center","2006");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(5745,4680);
L(5745,4630);
M(5886,4680);
L(5886,4630);
M(6031,4680);
L(6031,4630);
M(6176,4680);
L(6176,4630);
M(6317,4680);
L(6317,4630);
M(6460,4680);
L(6460,4630);
M(6605,4680);
L(6605,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6748,4680);
L(6748,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(6748,4680);
L(6748,4580);
ctx.stroke();
ctx.closePath();
T(6748,4830,10.0,"Center","2008");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(6892,4680);
L(6892,4630);
M(7035,4680);
L(7035,4630);
M(7180,4680);
L(7180,4630);
M(7324,4680);
L(7324,4630);
M(7465,4680);
L(7465,4630);
M(7609,4680);
L(7609,4630);
M(7752,4680);
L(7752,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(7897,4680);
L(7897,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(7897,4680);
L(7897,4580);
ctx.stroke();
ctx.closePath();
T(7897,4830,10.0,"Center","2010");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(8039,4680);
L(8039,4630);
M(8181,4680);
L(8181,4630);
M(8326,4680);
L(8326,4630);
M(8471,4680);
L(8471,4630);
M(8611,4680);
L(8611,4630);
M(8755,4680);
L(8755,4630);
M(8899,4680);
L(8899,4630);
if (gnuplot.grid_lines) {
var saveWidth = ctx.lineWidth;
ctx.lineWidth = ctx.lineWidth * 0.5;
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(160,160,160)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9043,4680);
L(9043,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.lineWidth = saveWidth;
} // grid_lines
ctx.beginPath();
M(9043,4680);
L(9043,4580);
ctx.stroke();
ctx.closePath();
T(9043,4830,10.0,"Center","2012");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(9186,4680);
L(9186,4630);
M(9330,4680);
L(9330,4630);
M(9475,4680);
L(9475,4630);
M(9618,4680);
L(9618,4630);
M(9760,4680);
L(9760,4630);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
ctx.beginPath();
M(440,301);
L(440,4680);
L(9759,4680);
M(9759,301);
M(440,301);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = "rgb(000,000,000)";
T(5099,4980,10.0,"Center","Date");
T(5099,201,10.0,"Center","Memory errors as a percentage of total reported");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";
if (typeof(gnuplot.hide_percentage_plot_1) == "undefined"|| !gnuplot.hide_percentage_plot_1) {
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(139,026,014)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2602,588,10.0,"Right","Vulnerabilities");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(139,026,014)";
ctx.beginPath();
M(902,538);
L(1322,538);
M(440,2399);
L(504,2285);
L(607,2238);
L(709,2291);
L(812,2390);
L(915,2495);
L(1018,2594);
L(1121,2694);
L(1223,2797);
L(1326,2900);
L(1429,2988);
L(1532,3045);
L(1634,3058);
L(1737,3025);
L(1840,2953);
L(1943,2857);
L(2046,2750);
L(2149,2642);
L(2252,2541);
L(2355,2456);
L(2458,2401);
L(2561,2382);
L(2664,2401);
L(2766,2448);
L(2869,2505);
L(2972,2552);
L(3075,2574);
L(3178,2565);
L(3280,2525);
L(3383,2463);
L(3486,2389);
L(3589,2313);
L(3691,2245);
L(3794,2191);
L(3897,2157);
L(4000,2143);
L(4103,2153);
L(4206,2183);
L(4308,2230);
L(4411,2291);
L(4514,2358);
L(4617,2432);
L(4720,2511);
L(4823,2600);
L(4926,2702);
L(5029,2818);
L(5132,2945);
L(5235,3076);
L(5337,3201);
L(5440,3312);
L(5543,3400);
L(5646,3462);
L(5748,3496);
L(5851,3503);
L(5954,3487);
L(6057,3451);
L(6160,3404);
L(6262,3353);
L(6365,3308);
L(6468,3275);
L(6571,3261);
L(6674,3267);
L(6777,3292);
L(6880,3330);
L(6983,3373);
L(7086,3411);
L(7189,3437);
L(7292,3446);
L(7394,3437);
L(7497,3414);
L(7600,3383);
L(7703,3351);
L(7805,3324);
L(7908,3300);
L(8011,3273);
L(8114,3236);
L(8217,3183);
L(8319,3121);
L(8422,3065);
L(8525,3040);
L(8628,3063);
L(8730,3141);
L(8833,3252);
L(8936,3348);
L(9039,3382);
L(9142,3356);
L(9245,3340);
L(9348,3383);
L(9452,3409);
L(9555,3335);
L(9657,3364);
L(9759,3900);
ctx.stroke();
ctx.closePath();
} // End percentage_plot_1 
if (typeof(gnuplot.hide_percentage_plot_2) == "undefined"|| !gnuplot.hide_percentage_plot_2) {
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(080,096,208)";
ctx.strokeStyle = "rgb(000,000,000)";
T(2602,713,10.0,"Right","Exploits");
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(080,096,208)";
ctx.beginPath();
M(902,663);
L(1322,663);
M(440,2852);
L(444,2804);
L(453,2699);
L(462,2598);
L(471,2502);
L(481,2412);
L(490,2328);
L(499,2251);
L(508,2181);
L(517,2119);
L(526,2064);
L(535,2018);
L(544,1979);
L(553,1948);
L(562,1924);
L(572,1908);
L(581,1899);
L(590,1896);
L(599,1899);
L(608,1907);
L(617,1920);
L(626,1936);
L(636,1956);
L(645,1977);
L(654,2000);
L(663,2024);
L(672,2047);
L(681,2069);
L(691,2090);
L(700,2108);
L(709,2124);
L(718,2136);
L(727,2145);
L(737,2150);
L(746,2152);
L(755,2151);
L(764,2147);
L(773,2141);
L(783,2134);
L(792,2127);
L(801,2121);
L(810,2117);
L(820,2117);
L(829,2121);
L(838,2132);
L(847,2150);
L(856,2176);
L(866,2211);
L(875,2255);
L(884,2307);
L(893,2365);
L(902,2427);
L(912,2490);
L(921,2551);
L(930,2603);
L(939,2643);
L(948,2663);
L(958,2660);
L(967,2629);
L(976,2568);
L(985,2480);
L(995,2373);
L(1004,2263);
L(1013,2178);
M(1106,2491);
L(1194,1558);
L(1282,2379);
L(1369,3046);
L(1457,3137);
L(1544,2907);
L(1632,2617);
L(1719,2342);
L(1806,2093);
L(1893,1908);
L(1981,1834);
L(2069,1874);
L(2156,1981);
L(2244,2092);
L(2331,2174);
L(2419,2221);
L(2506,2244);
L(2594,2254);
L(2681,2260);
L(2768,2268);
L(2856,2284);
L(2943,2312);
L(3030,2355);
L(3118,2411);
L(3205,2474);
L(3292,2538);
L(3380,2595);
L(3467,2641);
L(3554,2672);
L(3642,2691);
L(3729,2700);
L(3816,2707);
L(3904,2718);
L(3991,2740);
L(4078,2778);
L(4166,2831);
L(4253,2896);
L(4341,2966);
L(4428,3030);
L(4516,3080);
L(4603,3110);
L(4691,3121);
L(4778,3115);
L(4866,3099);
L(4953,3082);
L(5041,3068);
L(5128,3062);
L(5215,3066);
L(5303,3080);
L(5390,3106);
L(5477,3142);
L(5565,3190);
L(5652,3246);
L(5739,3305);
L(5827,3361);
L(5914,3408);
L(6001,3443);
L(6089,3465);
L(6176,3478);
L(6263,3489);
L(6351,3504);
L(6438,3529);
L(6526,3564);
L(6613,3607);
L(6700,3652);
L(6788,3689);
L(6876,3711);
L(6963,3712);
L(7050,3690);
L(7138,3645);
L(7225,3586);
L(7313,3521);
L(7400,3464);
L(7487,3422);
L(7575,3399);
L(7662,3389);
L(7750,3380);
L(7837,3355);
L(7924,3304);
L(8011,3224);
L(8099,3122);
L(8186,3016);
L(8274,2923);
L(8361,2859);
L(8448,2829);
L(8535,2835);
L(8623,2877);
L(8710,2954);
L(8798,3061);
L(8885,3177);
L(8973,3270);
L(9060,3308);
L(9148,3289);
L(9235,3252);
L(9323,3253);
L(9410,3312);
L(9498,3388);
L(9586,3464);
L(9673,3558);
L(9759,3491);
ctx.stroke();
ctx.closePath();
} // End percentage_plot_2 
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(255,000,000)";
ctx.strokeStyle = "rgb(128,128,128)";

// plot boundaries and axis scaling information for mousing 
gnuplot.plot_term_xmax = 1000;
gnuplot.plot_term_ymax = 500;
gnuplot.plot_xmin = 44.0;
gnuplot.plot_xmax = 975.9;
gnuplot.plot_ybot = 468.0;
gnuplot.plot_ytop = 30.1;
gnuplot.plot_width = 931.9;
gnuplot.plot_height = 437.9;
gnuplot.plot_axis_xmin = -9.4608e+07;
gnuplot.plot_axis_xmax = 4.1809e+08;
gnuplot.plot_axis_ymin = 0;
gnuplot.plot_axis_ymax = 50;
gnuplot.plot_axis_x2min = "none"
gnuplot.plot_axis_y2min = "none"
gnuplot.plot_logaxis_x = 0;
gnuplot.plot_logaxis_y = 0;
gnuplot.plot_axis_width = gnuplot.plot_axis_xmax - gnuplot.plot_axis_xmin;
gnuplot.plot_axis_height = gnuplot.plot_axis_ymax - gnuplot.plot_axis_ymin;
gnuplot.plot_timeaxis_x = "DateTime";
}
