// XXX: �O���[�o���ϐ��ł͂Ȃ����B

var img;

var goToNorth;
var goToNorthEast;
var goToNorthWest;
var goToSouth;
var goToSouthEast;
var goToSouthWest;
var goToEast;
var goToWest;

var index;

var x, y;
var vx, vy;

/**
 * �C���[�W�v�f�𐶐�����B
 * �ϐ��i�摜�A�摜�̗v�f���A�ʒu�A���x�j������������B
 */
function main() {
    img = document.createElement("img");
    img.src="img/left_s.png";
    img.style.position="absolute";
    document.body.appendChild(img);

    goToNorth     = ["img/left_n.png" , "img/right_n.png" ];
    goToNorthEast = ["img/left_ne.png", "img/right_ne.png"];
    goToNorthWest = ["img/left_nw.png", "img/right_nw.png"];
    goToSouth     = ["img/left_s.png" , "img/right_s.png" ];
    goToSouthEast = ["img/left_se.png", "img/right_se.png"];
    goToSouthWest = ["img/left_sw.png", "img/right_sw.png"];
    goToEast      = ["img/left_e.png" , "img/right_e.png" ];
    goToWest      = ["img/left_w.png" , "img/right_w.png" ];

    index=0;

    x=0;
    y=0;
    vx=50;
    vy=50;

    setInterval(update, 1000);
}

/**
 * �ʒu�Ƒ��x�A�摜��ύX����B
 */
function update() {

	// 0�i�����j��������1�i�E���j�ɁA1��������0�ɂ���B
    if (index == 0) {
        index = 1;
    } else if (index == 1) {
        index = 0;
    } else {
        index = 0;  // error
    }

    x = x + vx;
    y = y + vy;
    if (x <= 0 || x >= 360) vx = -vx;
    if (y <= 0 || y >= 260) vy = -vy;
    img.style.left = x + "px";
    img.style.top  = y + "px";

    // �i�ޕ����ɂ���āA�摜��ύX����B
    if (vx == 0 && vy > 0) {
        img.src=goToNorth[index];
    } else if (vx > 0 && vy < 0) {
        img.src=goToNorthEast[index];
    } else if (vx < 0 && vy < 0) {
        img.src=goToNorthWest[index];
    } else if (vx == 0 && vy < 0) {
        img.src=goToSouth[index];
    } else if (vx > 0 && vy > 0) {
        img.src=goToSouthEast[index];
    } else if (vx < 0 && vy > 0) {
        img.src=goToSouthWest[index];
    } else if (vx > 0 && vy == 0) {
        img.src=goToEast[index];
    } else if (vx < 0 && vy == 0) {
        img.src=goToWest[index];
    } else {
        ;  // error
    }
}