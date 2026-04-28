/* ============================================================
   Mountain House Hub — Three.js Hero Animation
   Floating geometric shapes + particle field (green & gold)
   ============================================================ */

(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  // ── Scene setup ──────────────────────────────────────────
  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 7);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setClearColor(0x000000, 0);

  // ── Colors ───────────────────────────────────────────────
  const GREEN      = new THREE.Color(0x3b82f6);
  const GREEN_DIM  = new THREE.Color(0x2563eb);
  const GOLD       = new THREE.Color(0x94a3b8);
  const GOLD_LIGHT = new THREE.Color(0xcbd5e1);

  // ── Lighting ─────────────────────────────────────────────
  const ambientLight = new THREE.AmbientLight(0x0a1020, 1.5);
  scene.add(ambientLight);

  const greenLight = new THREE.PointLight(0x3b82f6, 4, 20);
  greenLight.position.set(-4, 2, 3);
  scene.add(greenLight);

  const goldLight = new THREE.PointLight(0x94a3b8, 3, 18);
  goldLight.position.set(4, -2, 2);
  scene.add(goldLight);

  // ── Floating Shapes ───────────────────────────────────────
  const shapes = [];

  const shapeDefs = [
    { geo: new THREE.IcosahedronGeometry(1.1, 1),   pos: [-2.5, 0.3, -1],  color: GREEN,     wire: true,  speed: 0.004,  rotAxis: new THREE.Vector3(0.3, 1, 0.2) },
    { geo: new THREE.OctahedronGeometry(0.7),        pos: [2.8, 1.2, -0.5], color: GOLD,      wire: true,  speed: 0.006,  rotAxis: new THREE.Vector3(1, 0.4, 0.6) },
    { geo: new THREE.TetrahedronGeometry(0.55),      pos: [1.8, -1.6, 0.5], color: GREEN_DIM, wire: true,  speed: 0.008,  rotAxis: new THREE.Vector3(0.5, 0.8, 0.3) },
    { geo: new THREE.IcosahedronGeometry(0.45, 0),   pos: [-3.2, -1.4, 0],  color: GOLD_LIGHT,wire: true,  speed: 0.010,  rotAxis: new THREE.Vector3(0.7, 0.3, 1) },
    { geo: new THREE.OctahedronGeometry(0.35),       pos: [3.5, -0.3, -2],  color: GREEN,     wire: true,  speed: 0.007,  rotAxis: new THREE.Vector3(0.2, 1, 0.5) },
    { geo: new THREE.IcosahedronGeometry(0.28, 0),   pos: [-1.2, 2.2, 0.8], color: GOLD,      wire: true,  speed: 0.012,  rotAxis: new THREE.Vector3(1, 0.2, 0.4) },
    { geo: new THREE.IcosahedronGeometry(1.6, 1),    pos: [0, 0, -3],        color: GREEN,     wire: true,  speed: 0.002,  rotAxis: new THREE.Vector3(0.1, 1, 0.3) },
  ];

  shapeDefs.forEach(def => {
    const mat = new THREE.MeshBasicMaterial({
      color: def.color,
      wireframe: def.wire,
      transparent: true,
      opacity: 0.35
    });
    const mesh = new THREE.Mesh(def.geo, mat);
    mesh.position.set(...def.pos);
    mesh.userData = { speed: def.speed, rotAxis: def.rotAxis, floatOffset: Math.random() * Math.PI * 2, floatSpeed: 0.4 + Math.random() * 0.4, baseY: def.pos[1] };
    scene.add(mesh);
    shapes.push(mesh);
  });

  // ── Solid glowing core icosahedron ────────────────────────
  const coreGeo = new THREE.IcosahedronGeometry(0.9, 3);
  const coreMat = new THREE.MeshPhongMaterial({
    color: 0x0a1430,
    emissive: 0x0d2060,
    shininess: 80,
    transparent: true,
    opacity: 0.7
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.set(-2.5, 0.3, -1);
  scene.add(core);

  // ── Particles ─────────────────────────────────────────────
  const PARTICLE_COUNT = 600;
  const positions  = new Float32Array(PARTICLE_COUNT * 3);
  const pColors    = new Float32Array(PARTICLE_COUNT * 3);
  const pSpeeds    = new Float32Array(PARTICLE_COUNT);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    pSpeeds[i] = 0.002 + Math.random() * 0.006;

    // mix blue and silver particles
    const isSilver = Math.random() > 0.6;
    pColors[i * 3]     = isSilver ? 0.796 : 0.231;
    pColors[i * 3 + 1] = isSilver ? 0.835 : 0.510;
    pColors[i * 3 + 2] = isSilver ? 0.878 : 0.965;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('color',    new THREE.BufferAttribute(pColors, 3));

  const pMat = new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true
  });

  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // ── Mouse parallax ────────────────────────────────────────
  const mouse  = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  window.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth  - 0.5) * 1.4;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * -1.0;
  });

  // ── Resize ────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });

  // ── Animation loop ────────────────────────────────────────
  let clock = 0;
  function animate() {
    requestAnimationFrame(animate);
    clock += 0.016;

    // Smooth mouse follow
    target.x += (mouse.x - target.x) * 0.04;
    target.y += (mouse.y - target.y) * 0.04;
    camera.position.x = target.x * 0.8;
    camera.position.y = target.y * 0.5;
    camera.lookAt(0, 0, 0);

    // Rotate & float shapes
    shapes.forEach(mesh => {
      const d = mesh.userData;
      mesh.rotateOnAxis(d.rotAxis.normalize(), d.speed);
      mesh.position.y = d.baseY + Math.sin(clock * d.floatSpeed + d.floatOffset) * 0.18;
    });
    core.rotation.y += 0.003;
    core.rotation.x += 0.001;

    // Drift particles upward
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3 + 1] += pSpeeds[i];
      if (pos[i * 3 + 1] > 7) pos[i * 3 + 1] = -7;
    }
    pGeo.attributes.position.needsUpdate = true;

    // Pulse lights
    greenLight.intensity = 3.5 + Math.sin(clock * 1.2) * 0.8;
    goldLight.intensity  = 2.8 + Math.sin(clock * 0.9 + 1) * 0.7;

    renderer.render(scene, camera);
  }

  animate();
})();
