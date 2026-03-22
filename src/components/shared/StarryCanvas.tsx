'use client';

import { useEffect, useRef } from 'react';

export default function StarryCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Density of falling stars based on screen size
        const starCount = Math.min(Math.floor((width * height) / 8000), 200);

        class Star {
            x: number;
            y: number;
            size: number;
            speedY: number;
            speedX: number;
            opacity: number;

            constructor(resetY = false) {
                this.x = Math.random() * width;
                this.y = resetY ? -10 : Math.random() * height;

                // Z-index illusion: Deeper stars are smaller and slower
                const z = Math.random();
                this.size = z * 1.5 + 0.5;
                this.speedY = z * 1.5 + 0.5;
                this.speedX = z * 0.5 + 0.1; // Gentle diagonal drift
                this.opacity = z * 0.5 + 0.3; // Distant stars are dimmer
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                // Reset to top when off screen
                if (this.y > height + 10 || this.x > width + 10) {
                    this.x = Math.random() * width;
                    this.y = -10;
                }
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                context.fill();
            }
        }

        const stars: Star[] = [];
        for (let i = 0; i < starCount; i++) {
            stars.push(new Star(false));
        }

        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            }, 200);
        };

        window.addEventListener('resize', handleResize);

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw falling stars
            stars.forEach((star) => {
                star.update();
                star.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Dark base layer with an elegant static ambient glow overlay */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -2,
                    background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 80%)',
                    pointerEvents: 'none'
                }}
            />
            {/* The falling stars canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    pointerEvents: 'none',
                    mixBlendMode: 'screen'
                }}
                aria-hidden="true"
            />
        </>
    );
}
