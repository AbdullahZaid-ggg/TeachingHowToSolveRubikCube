// Modern Rubik's Cube Simulator for LBL Tutorial
// Features: 3D visualization, mouse controls, keyboard shortcuts, scramble/reset

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(400, 400);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set(5, 5, 5);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const ambientLight = new THREE.AmbientLight(0x808080, 0.6);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const colors = {
    white: 0xffffff,
    yellow: 0xffff00,
    red: 0xff0000,
    orange: 0xffa500,
    green: 0x00ff00,
    blue: 0x0000ff
};

const cubes = [];
for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
            const cube = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.95, 0.95));
            cube.position.set(x, y, z);
            cube.userData = { x, y, z };
            cube.colors = [
                x === 1 ? colors.red : 0x000000,
                x === -1 ? colors.orange : 0x000000,
                y === 1 ? colors.white : 0x000000,
                y === -1 ? colors.yellow : 0x000000,
                z === 1 ? colors.green : 0x000000,
                z === -1 ? colors.blue : 0x000000
            ];
            updateMaterials(cube);
            scene.add(cube);
            cubes.push(cube);
        }
    }
}

function updateMaterials(cube) {
    cube.material = cube.colors.map(color => new THREE.MeshLambertMaterial({
        color,
        emissive: color !== 0x000000 ? new THREE.Color(color).multiplyScalar(0.3) : 0x000000
    }));
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

document.getElementById('scramble').addEventListener('click', scramble);
document.getElementById('reset').addEventListener('click', reset);

function scramble() {
    const moves = ['r', 'l', 'u', 'd', 'f', 'b'];
    for (let i = 0; i < 20; i++) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        const shift = Math.random() < 0.5;
        onKeyDown({ key: move, shiftKey: shift });
    }
}

function reset() {
    cubes.forEach(cube => {
        const { x, y, z } = cube.userData;
        cube.position.set(x, y, z);
        cube.rotation.set(0, 0, 0);
        cube.colors = [
            x === 1 ? colors.red : 0x000000,
            x === -1 ? colors.orange : 0x000000,
            y === 1 ? colors.white : 0x000000,
            y === -1 ? colors.yellow : 0x000000,
            z === 1 ? colors.green : 0x000000,
            z === -1 ? colors.blue : 0x000000
        ];
        updateMaterials(cube);
        scene.add(cube);
    });
}

window.addEventListener('mousedown', onMouseDown);
window.addEventListener('keydown', onKeyDown);

function onMouseDown(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(cubes);
    if (intersects.length > 0) {
        const { face, object: cube } = intersects[0];
        const { normal } = face;
        let axis, index, clockwise = true;
        if (Math.abs(normal.x) > 0.9) {
            axis = 'x';
            index = cube.userData.x;
            clockwise = normal.x > 0;
        } else if (Math.abs(normal.y) > 0.9) {
            axis = 'y';
            index = cube.userData.y;
            clockwise = normal.y > 0;
        } else if (Math.abs(normal.z) > 0.9) {
            axis = 'z';
            index = cube.userData.z;
            clockwise = normal.z > 0;
        }
        rotateLayer(axis, index, clockwise);
    }
}

function onKeyDown(event) {
    const key = event.key.toLowerCase();
    const shift = event.shiftKey;
    let axis, index, clockwise = !shift;
    switch (key) {
        case 'r': axis = 'x'; index = 1; break;
        case 'l': axis = 'x'; index = -1; break;
        case 'u': axis = 'y'; index = 1; break;
        case 'd': axis = 'y'; index = -1; break;
        case 'f': axis = 'z'; index = 1; break;
        case 'b': axis = 'z'; index = -1; break;
        default: return;
    }
    rotateLayer(axis, index, clockwise);
}

function rotateLayer(axis, index, clockwise) {
    const layer = cubes.filter(cube => cube.userData[axis] === index);
    const group = new THREE.Group();
    layer.forEach(cube => {
        scene.remove(cube);
        group.add(cube);
    });
    scene.add(group);
    const angle = clockwise ? -Math.PI / 2 : Math.PI / 2;
    const rotationAxis = new THREE.Vector3();
    rotationAxis[axis] = 1;
    group.rotateOnAxis(rotationAxis, angle);
    group.children.forEach(cube => {
        cube.getWorldPosition(cube.position);
        cube.userData.x = Math.round(cube.position.x);
        cube.userData.y = Math.round(cube.position.y);
        cube.userData.z = Math.round(cube.position.z);
        rotateColors(cube, axis, clockwise);
        updateMaterials(cube);
        scene.add(cube);
    });
    scene.remove(group);
}

function rotateColors(cube, axis, clockwise) {
    const c = cube.colors;
    if (axis === 'x') {
        if (clockwise) {
            [c[2], c[4], c[3], c[5]] = [c[5], c[2], c[4], c[3]];
        } else {
            [c[2], c[4], c[3], c[5]] = [c[4], c[3], c[5], c[2]];
        }
    } else if (axis === 'y') {
        if (clockwise) {
            [c[4], c[0], c[5], c[1]] = [c[1], c[4], c[0], c[5]];
        } else {
            [c[4], c[0], c[5], c[1]] = [c[0], c[5], c[1], c[4]];
        }
    } else if (axis === 'z') {
        if (clockwise) {
            [c[2], c[0], c[3], c[1]] = [c[1], c[2], c[0], c[3]];
        } else {
            [c[2], c[0], c[3], c[1]] = [c[0], c[3], c[1], c[2]];
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();