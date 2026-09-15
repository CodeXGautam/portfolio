import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Atmosphere = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        camera.position.set(0, 0, 8);

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
        renderer.setClearColor(0x000000, 0);

        const group = new THREE.Group();
        scene.add(group);

        const geometry = new THREE.IcosahedronGeometry(2.25, 2);
        const material = new THREE.MeshBasicMaterial({
            color: 0xc8a77b,
            wireframe: true,
            transparent: true,
            opacity: 0.1,
        });
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);

        const ringGeometry = new THREE.TorusGeometry(2.9, 0.008, 12, 180);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xd9b98e, transparent: true, opacity: 0.2 });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2.35;
        group.add(ring);

        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 180;
        const positions = new Float32Array(particleCount * 3);
        for (let index = 0; index < particleCount; index += 1) {
            const radius = 2.8 + Math.random() * 2.5;
            const angle = Math.random() * Math.PI * 2;
            positions[index * 3] = Math.cos(angle) * radius;
            positions[index * 3 + 1] = (Math.random() - 0.5) * 5.2;
            positions[index * 3 + 2] = Math.sin(angle) * radius - 1;
        }
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMaterial = new THREE.PointsMaterial({ color: 0xe9d7bc, size: 0.014, transparent: true, opacity: 0.3 });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        const pointer = { x: 0, y: 0 };
        const handlePointerMove = (event) => {
            pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.4;
            pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.25;
        };
        const resize = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('resize', resize);
        resize();

        let frameId;
        const animate = () => {
            mesh.rotation.x += 0.0015;
            mesh.rotation.y += 0.003;
            ring.rotation.z -= 0.0015;
            particles.rotation.y += 0.0006;
            group.rotation.x += (pointer.y - group.rotation.x) * 0.025;
            group.rotation.y += (pointer.x - group.rotation.y) * 0.025;
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('resize', resize);
            geometry.dispose();
            material.dispose();
            ringGeometry.dispose();
            ringMaterial.dispose();
            particleGeometry.dispose();
            particleMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} className="atmosphere-canvas" aria-hidden="true" />;
};

export default Atmosphere;
