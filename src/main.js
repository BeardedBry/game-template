let clickers = 50;
let startTime = Date.now();

// position elements in dom
function sync(dom, pos) {
    dom.style.left = `${pos.x}px`;
    dom.style.top = `${pos.y}px`;
}