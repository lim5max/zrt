import React, { useEffect, useRef } from 'react';

const ParticleLogo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let dpr = window.devicePixelRatio || 1;

    let animationFrameId;
    let particles = [];

    let time = 0;
    let assembleProgress = 0;
    let rotationY = 0;

    const PERSPECTIVE = 800;

    const mouse = { x: -1000, y: -1000, radius: 120 };

    const init = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      if (width === 0 || height === 0) return;
      assembleProgress = 0;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const isMobile = width < 768;

      const logoW = 119;
      const logoH = 108;

      const scale = (height / logoH) * 1.15;

      const drawW = Math.ceil(logoW * scale);
      const drawH = Math.ceil(logoH * scale);

      const hiddenCanvas = document.createElement('canvas');
      hiddenCanvas.width = drawW;
      hiddenCanvas.height = drawH;
      const hCtx = hiddenCanvas.getContext('2d', { willReadFrequently: true });

      const path1Str = "M54.2793 94.5951L25.3417 77.9507C22.502 76.4384 20.9867 73.4147 20.9867 70.3906C20.9867 64.7864 20.9867 59.1857 20.9867 53.5815C20.9867 47.9776 20.9867 42.3766 20.9867 36.7725C20.9867 33.7485 22.502 30.7247 25.3417 29.2128L54.2793 12.568C54.8773 12.1867 54.8513 11.6216 54.2793 11.2402L40.093 3.10851L34.7948 0.0847841C34.4201 -0.10598 34.2295 0.0847841 33.8482 0.0847841L6.99446 15.7827C2.6394 18.2411 0 22.7838 0 27.7008C0 36.2961 0 44.9371 0 53.5815C0 62.2262 0 70.8674 0 79.4625C0 84.3795 2.6394 88.922 6.99446 91.3808L33.8482 107.079C34.2295 107.079 34.4201 107.269 34.7948 107.079L40.093 104.055L54.2793 95.9229C54.8513 95.5417 54.8773 94.9763 54.2793 94.5951Z";
      const path2Str = "M64.0248 94.5951L92.9624 77.9507C95.8025 76.4384 97.3176 73.4147 97.3176 70.3906C97.3176 64.7864 97.3176 59.1857 97.3176 53.5815C97.3176 47.9776 97.3176 42.3766 97.3176 36.7725C97.3176 33.7485 95.8025 30.7247 92.9624 29.2128L64.0248 12.568C63.4266 12.1867 63.4528 11.6216 64.0248 11.2402L78.2111 3.10851L83.5095 0.0847841C83.8842 -0.10598 84.0748 0.0847841 84.4561 0.0847841L111.31 15.7827C115.665 18.2411 118.304 22.7838 118.304 27.7008C118.304 36.2961 118.304 44.9371 118.304 53.5815C118.304 62.2262 118.304 70.8674 118.304 79.4625C118.304 84.3795 115.665 88.922 111.31 91.3808L84.4561 107.079C84.0748 107.079 83.8842 107.269 83.5095 107.079L78.2111 104.055L64.0248 95.9229C63.4528 95.5417 63.4266 94.9763 64.0248 94.5951Z";

      hCtx.scale(scale, scale);
      hCtx.fillStyle = '#fff';
      const combinedPath = new Path2D(path1Str + " " + path2Str);
      hCtx.fill(combinedPath);

      particles = [];
      const imgData = hCtx.getImageData(0, 0, drawW, drawH).data;

      // Центр лого в координатах canvas (для вращения вокруг центра лого)
      const logoCenterX = drawW / 2;
      const logoCenterY = drawH / 2;

      // Где рисуем лого на экране (справа)
      const screenCenterX = width - drawW * 0.45;
      const screenCenterY = height / 2;

      const step = isMobile ? 7 : 6;
      // Толщина формы в Z-пространстве
      const zDepth = drawW * 0.35;

      for (let y = 0; y < drawH; y += step) {
        for (let x = 0; x < drawW; x += step) {
          const index = (y * drawW + x) * 4;
          const alpha = imgData[index + 3];

          if (alpha > 128) {
            if (Math.random() < 0.2) continue;

            // 3D координаты относительно центра лого
            const localX = x - logoCenterX + (Math.random() - 0.5) * 4;
            const localY = y - logoCenterY + (Math.random() - 0.5) * 4;
            // Z — случайная глубина, создаёт объём
            const localZ = (Math.random() - 0.5) * zDepth;

            // Scattered start position (3D)
            const scatterRadius = Math.max(width, height) * 0.7;
            const scatterAngle = Math.random() * Math.PI * 2;
            const scatterPhi = Math.random() * Math.PI;
            const scatterDist = Math.random() * scatterRadius;

            particles.push({
              // Current 3D position (starts scattered)
              x: Math.cos(scatterAngle) * Math.sin(scatterPhi) * scatterDist,
              y: Math.sin(scatterAngle) * Math.sin(scatterPhi) * scatterDist,
              z: Math.cos(scatterPhi) * scatterDist,
              // Target 3D position (local, relative to logo center)
              baseX: localX,
              baseY: localY,
              baseZ: localZ,
              // Screen anchor for projection
              screenCenterX,
              screenCenterY,
              size: Math.random() * 1.8 + 0.8,
              density: (Math.random() * 25) + 5,
              brightness: Math.random() * 0.4 + 0.2,
              opacity: Math.random() * 0.5 + 0.15,
              angle: Math.random() * Math.PI * 2,
              driftDistance: Math.random() * 3.5 + 0.5,
              wobblePhase: Math.random() * Math.PI * 2,
              wobbleAmp: Math.random() * 5 + 2,
            });
          }
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.03;

      // Slow Y-axis rotation
      rotationY += 0.003;
      const cosR = Math.cos(rotationY);
      const sinR = Math.sin(rotationY);

      // Assembly animation
      if (assembleProgress < 1) {
        assembleProgress = Math.min(1, assembleProgress + 0.008);
      }
      const ease = 1 - Math.pow(1 - assembleProgress, 3);

      // Collect projected particles for depth sorting
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Wobble
        const wobbleX = Math.cos(p.wobblePhase + time * 0.7) * p.wobbleAmp * (1 - ease * 0.7);
        const wobbleY = Math.sin(p.wobblePhase * 1.3 + time * 0.5) * p.wobbleAmp * (1 - ease * 0.7);
        const wobbleZ = Math.sin(p.wobblePhase * 0.7 + time * 0.6) * p.wobbleAmp * 0.5 * (1 - ease * 0.5);

        // Target position with drift + wobble
        const targetX = p.baseX + Math.cos(p.angle + time) * p.driftDistance + wobbleX;
        const targetY = p.baseY + Math.sin(p.angle + time) * p.driftDistance + wobbleY;
        const targetZ = p.baseZ + wobbleZ;

        // Smoothly move towards target
        const speed = assembleProgress < 1 ? 8 : 12;
        p.x -= (p.x - targetX) / speed;
        p.y -= (p.y - targetY) / speed;
        p.z -= (p.z - targetZ) / speed;

        // Apply Y-axis rotation
        const rx = p.x * cosR - p.z * sinR;
        const ry = p.y;
        const rz = p.x * sinR + p.z * cosR;

        // Perspective projection
        const zOffset = PERSPECTIVE + rz;
        if (zOffset <= 0) continue;
        const projScale = PERSPECTIVE / zOffset;

        const screenX = p.screenCenterX + rx * projScale;
        const screenY = p.screenCenterY + ry * projScale;

        // Mouse repulsion (in screen space)
        const dx = mouse.x - screenX;
        const dy = mouse.y - screenY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let pushX = 0, pushY = 0;
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          pushX = -(dx / dist) * force * p.density * 1.5;
          pushY = -(dy / dist) * force * p.density * 1.5;
        }

        // Depth-based scaling
        const depthFactor = Math.max(0.3, Math.min(1.2, projScale));
        const drawSize = p.size * depthFactor;
        const drawOpacity = p.opacity * depthFactor * 0.9;

        projected.push({
          screenX: screenX + pushX,
          screenY: screenY + pushY,
          z: rz,
          size: drawSize,
          opacity: drawOpacity,
          brightness: p.brightness,
        });
      }

      // Sort by Z (back to front)
      projected.sort((a, b) => a.z - b.z);

      // Draw
      for (let i = 0; i < projected.length; i++) {
        const pp = projected[i];
        const b = pp.brightness;
        const r = Math.round(120 + b * 100);
        const g = Math.round(140 + b * 95);
        const bl = Math.round(160 + b * 80);
        ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${pp.opacity})`;
        ctx.beginPath();
        ctx.arc(pp.screenX, pp.screenY, pp.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const timeoutId = setTimeout(init, 50);
    render();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        init();
      }, 200);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'auto'
      }}
    />
  );
};

export default ParticleLogo;
