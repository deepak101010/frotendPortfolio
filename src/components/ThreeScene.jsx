import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = ({ opacity = 0.25 }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Particles field
    const particlesCount = 600;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      const radius = 40 + Math.random() * 60;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 40;
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = y;
      positions[i3 + 2] = Math.sin(angle) * radius;

      const c = 0.7 + Math.random() * 0.3;
      colors[i3] = c;
      colors[i3 + 1] = c;
      colors[i3 + 2] = c;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: opacity,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Soft vignette plane to add subtle depth
    const vignetteGeo = new THREE.PlaneGeometry(400, 400);
    const vignetteMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uOpacity: { value: opacity * 0.5 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uOpacity;
        void main() {
          vec2 c = vUv - 0.5;
          float r = length(c);
          float alpha = smoothstep(0.9, 0.4, r) * uOpacity;
          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        }
      `
    });
    const vignette = new THREE.Mesh(vignetteGeo, vignetteMat);
    vignette.position.z = -30;
    scene.add(vignette);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      const width = Math.max(1, clientWidth);
      const height = Math.max(1, clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      points.rotation.y = t * 0.05;
      points.rotation.x = Math.sin(t * 0.2) * 0.1;
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      geometry.dispose();
      material.dispose();
      vignetteGeo.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [opacity]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
  );
};

export default ThreeScene;
