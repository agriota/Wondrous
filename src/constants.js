//If you want to read this table and you are a human, here is how:
//[36 * odds of making 1 line, 2 lines, 3 lines, number of layouts of 7 with this distribution]

//e.g. 104 layouts have a 6/36 chance of making one line, and 0 chance of 2 or 3.
const ODDSTABLE = [
[6,0,0,104],
[7,0,0,232],
[8,0,0,80],
[11,1,0,144],
[11,2,0,32],
[11,8,0,56],
[12,0,0,160],
[12,1,0,480],
[12,2,0,120],
[12,8,0,72],
[13,0,0,416],
[13,1,0,608],
[13,2,0,64],
[13,8,0,16],
[14,0,0,192],
[14,1,0,96],
[15,0,0,128],
[16,2,0,64],
[16,3,0,64],
[17,1,0,176],
[17,2,0,304],
[17,3,0,208],
[17,8,1,16],
[18,0,0,16],
[18,1,0,576],
[18,2,0,640],
[18,3,0,192],
[18,8,1,96],
[19,0,0,32],
[19,1,0,560],
[19,1,1,24],
[19,2,0,464],
[19,3,0,112],
[19,8,1,32],
[20,1,0,240],
[20,1,1,48],
[20,2,0,64],
[21,1,0,16],
[21,5,0,64],
[22,2,0,32],
[22,3,0,80],
[22,4,0,256],
[22,5,0,96],
[23,2,0,176],
[23,3,0,368],
[23,4,0,256],
[24,2,0,96],
[24,3,0,384],
[24,4,0,64],
[25,2,0,32],
[25,3,0,168],
[26,3,0,32],
[26,6,0,16],
[27,5,0,64],
[27,6,0,32],
[28,5,0,80],
[28,6,0,32],
[36,3,0,96],
[36,4,0,336],
[36,5,0,176],
[36,6,0,88],
[36,9,0,64],
[36,9,1,32],
[36,10,0,336],
[36,10,1,128],
[36,11,0,272],
[36,11,1,128],
[36,12,0,192],
[36,16,1,128],
[36,17,1,160],
[36,36,1,8],
[36,36,2,8],
[36,36,3,16]
]

const CELLS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const SUBSEQUENCE = [
[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],
[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],
[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],
[3,4],[3,5],[3,6],[3,7],[3,8],
[4,5],[4,6],[4,7],[4,8],
[5,6],[5,7],[5,8],
[6,7],[6,8],
[7,8]]

const INITSTATE = {
  active: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
  odds: [["",""],["",""],["",""]]
}

export {ODDSTABLE, INITSTATE, CELLS, SUBSEQUENCE}