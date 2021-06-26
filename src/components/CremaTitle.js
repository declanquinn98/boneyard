import * as THREE from 'three';
import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from "@react-spring/web";
import stereofidelic from '../assets/fonts/Stereofidelic.json';
import felix from '../assets/fonts/Felix Titling.json';


const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const CremaTitle = () => {

    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const props = useSpring({ xys, config: config.molasses });

    useEffect(() => {
        Preload();
    }, []);

    return (
        <div
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    color: "white",
                    fontFamily: 'Felix Titling',
                    src: "local('Felix Titling'), url(../assets/fonts/Felixti.ttf) format('ttf')",
                    justifyContent: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    fontSize: "30px",
                    textShadow: "0px 1px 5px rgba(0,0,0,0.25)",
                    zIndex: 1
                }}
            >

                <h1 style={{
                    marginTop: 0,
                    marginBottom: 0,
                }}>
                    The
                </h1>

                <div style={{ height: "10%" }} />

                <h1 style={{
                    marginTop: 0,
                    marginBottom: 0
                }}>
                    Espresso
                </h1>

                <div style={{ height: "15%" }} />

            </div>
            <div
                id={"magic"}
                style={{
                    width: "100%",
                    height: "100%",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />
        </div>





    )
}

const Preload = () => {
    let manager = new THREE.LoadingManager();
    manager.onLoad = function () {
        new Environment(typo, font2, particle);
    }

    const loader = new THREE.FontLoader(manager);
    const typo = loader.parse(stereofidelic);
    const font2 = loader.parse(felix);
    const particle = new THREE.TextureLoader(manager).load('https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png');
}

class Environment {

    constructor(font, font2, particle) {

        this.font = font;
        this.font2 = font2;
        this.particle = particle;
        this.container = document.querySelector('#magic');
        this.scene = new THREE.Scene();
        this.createCamera();
        this.createRenderer();
        this.setup()
        this.bindEvents();
    }

    bindEvents() {

        window.addEventListener('resize', this.onWindowResize.bind(this));

    }

    setup() {

        this.createParticles = new CreateParticles(this.scene, this.font, this.font2, this.particle, this.camera, this.renderer);
    }

    render() {

        this.createParticles.render()
        this.renderer.render(this.scene, this.camera)
    }

    createCamera() {

        this.camera = new THREE.PerspectiveCamera(65, this.container.clientWidth / this.container.clientHeight, 1, 10000);
        this.camera.position.set(0, 0, 100);

    }

    createRenderer() {

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.container.appendChild(this.renderer.domElement);

        this.renderer.setAnimationLoop(() => { this.render() })

    }

    onWindowResize() {

        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

    }
}

class CreateParticles {

    constructor(scene, font, font2, particleImg, camera, renderer) {

        this.scene = scene;
        this.font = font;
        this.font2 = font2;
        this.particleImg = particleImg;
        this.camera = camera;
        this.renderer = renderer;

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(-200, 200);

        this.colorChange = new THREE.Color();

        this.buttom = false;

        this.data = {
            text: `BONE YARD`,
            amount: 500,
            //1
            particleSize: 1.25,
            particleColor: 0xffffff,
            textSize: 10,
            area: 75,
            ease: .07,
        }
        this.setup();
        this.bindEvents();

    }
    setup() {

        const geometry = new THREE.PlaneGeometry(this.visibleWidthAtZDepth(100, this.camera), this.visibleHeightAtZDepth(100, this.camera));
        const material = new THREE.MeshBasicMaterial({ transparent: true });
        this.planeArea = new THREE.Mesh(geometry, material);
        this.planeArea.visible = false;
        this.createText();

    }
    bindEvents() {
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
    onMouseMove() {

        this.mouse.x = (window.event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (window.event.clientY / window.innerHeight) * 2 + 1;

    }

    render(level) {

        //  const time = ((.001 * performance.now()) % 12) / 12;
        // const zigzagTime = (1 + (Math.sin(time * 2 * Math.PI))) / 6;

        this.raycaster.setFromCamera(this.mouse, this.camera);

        const intersects = this.raycaster.intersectObject(this.planeArea);

        if (intersects.length > 0) {

            const pos = this.particles.geometry.attributes.position;
            const copy = this.geometryCopy.attributes.position;
            const coulors = this.particles.geometry.attributes.customColor;
            const size = this.particles.geometry.attributes.size;

            const mx = intersects[0].point.x;
            const my = intersects[0].point.y;
            // const mz = intersects[0].point.z;

            for (var i = 0, l = pos.count; i < l; i++) {

                const initX = copy.getX(i);
                const initY = copy.getY(i);
                const initZ = copy.getZ(i);

                let px = pos.getX(i);
                let py = pos.getY(i);
                let pz = pos.getZ(i);

                //fully white overrides top 
                //fully black overrides top + bottom\
                //Affects outside of top letters
                //Currently mid crema color
                this.colorChange.setHSL(.091, 0.75, 0.87)
                coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b)
                coulors.needsUpdate = true;

                size.array[i] = this.data.particleSize;
                size.needsUpdate = true;

                let dx = mx - px;
                let dy = my - py;
                // const dz = mz - pz;

                const mouseDistance = this.distance(mx, my, px, py)
                let d = (dx = mx - px) * dx + (dy = my - py) * dy;
                const f = - this.data.area / d;

                if (mouseDistance < this.data.area) {

                    const t = Math.atan2(dy, dx);
                    px += f * Math.cos(t);
                    py += f * Math.sin(t);

                    pos.setXYZ(i, px, py, pz);
                    pos.needsUpdate = true;

                    size.array[i] = this.data.particleSize * 1.3;
                    size.needsUpdate = true;

                    if ((px > (initX + 10)) || (px < (initX - 10)) || (py > (initY + 10) || (py < (initY - 10)))) {

                        //darkest crema color
                        //changes subset of particles
                        this.colorChange.setHSL(0.066, .89, .75)
                        coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b)
                        coulors.needsUpdate = true;

                        size.array[i] = this.data.particleSize / 1.8;
                        size.needsUpdate = true;

                    }


                }

                px += (initX - px) * this.data.ease;
                py += (initY - py) * this.data.ease;
                pz += (initZ - pz) * this.data.ease;

                pos.setXYZ(i, px, py, pz);
                pos.needsUpdate = true;

            }
        }
    }

    createText() {

        let thePoints = [];

        let shapes = this.font.generateShapes(this.data.text, this.data.textSize);

        let geometry = new THREE.ShapeGeometry(shapes);

        geometry.computeBoundingBox();

        const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;

        geometry.center();

        let holeShapes = [];

        for (let q = 0; q < shapes.length; q++) {

            let shape = shapes[q];

            if (shape.holes && shape.holes.length > 0) {

                for (let j = 0; j < shape.holes.length; j++) {

                    let hole = shape.holes[j];
                    holeShapes.push(hole);
                }
            }

        }
        shapes.push.apply(shapes, holeShapes);

        let colors = [];
        let sizes = [];

        for (let x = 0; x < shapes.length; x++) {

            let shape = shapes[x];

            const amountPoints = (shape.type === 'Path') ? this.data.amount / 2 : this.data.amount;

            let points = shape.getSpacedPoints(amountPoints);

            points.forEach((element, z) => {

                const a = new THREE.Vector3(element.x, element.y, 0);
                thePoints.push(a);
                colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
                sizes.push(1)

            });
        }

        let geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
        geoParticles.translate(xMid, yMid, 0);

        geoParticles.setAttribute('customColor', new THREE.Float32BufferAttribute(colors, 3));
        geoParticles.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({

            uniforms: {
                //lightest crema color
                color: { value: new THREE.Color(0xdfcea5) },
                pointTexture: { value: this.particleImg }
            },
            vertexShader: `

  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;

  void main() {

    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * ( 300.0 / -mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;

  }
  `,
            fragmentShader: `
    
 uniform vec3 color;
 uniform sampler2D pointTexture;

 varying vec3 vColor;

 void main() {

   gl_FragColor = vec4( color * vColor, 1 );
   gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

 }
 `,

            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
        });

        this.particles = new THREE.Points(geoParticles, material);
        this.scene.add(this.particles);

        this.geometryCopy = new THREE.BufferGeometry();
        this.geometryCopy.copy(this.particles.geometry);

    }

    visibleHeightAtZDepth(depth, camera) {

        const cameraOffset = camera.position.z;
        if (depth < cameraOffset) depth -= cameraOffset;
        else depth += cameraOffset;

        const vFOV = camera.fov * Math.PI / 180;

        return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
    }
    visibleWidthAtZDepth(depth, camera) {

        const height = this.visibleHeightAtZDepth(depth, camera);
        return height * camera.aspect;

    }
    distance(x1, y1, x2, y2) {

        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }
}

