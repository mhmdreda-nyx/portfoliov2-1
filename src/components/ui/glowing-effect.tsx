"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface GlowingEffectProps {
    blur?: number;
    inactiveZone?: number;
    proximity?: number;
    spread?: number;
    variant?: "default" | "white";
    glow?: boolean;
    className?: string;
    disabled?: boolean;
    movementDuration?: number;
    borderWidth?: number;
}

const GlowingEffect = memo(
    ({
        blur = 0,
        inactiveZone = 0,
        proximity = 0,
        spread = 60,
        variant = "default",
        glow = false,
        className,
        movementDuration = 2,
        borderWidth = 1,
        disabled = true,
    }: GlowingEffectProps) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const lastPosition = useRef({ x: 0, y: 0 });
        const animationFrameRef = useRef<number>(0);

        const handleMove = useCallback(
            (e?: MouseEvent | { x: number; y: number }) => {
                if (!containerRef.current) return;
                if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

                animationFrameRef.current = requestAnimationFrame(() => {
                    const element = containerRef.current;
                    if (!element) return;

                    const { left, top, width, height } = element.getBoundingClientRect();
                    const mouseX = e?.x ?? lastPosition.current.x;
                    const mouseY = e?.y ?? lastPosition.current.y;

                    if (e) lastPosition.current = { x: mouseX, y: mouseY };

                    const center = [left + width * 0.5, top + height * 0.5];
                    const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
                    const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

                    if (distanceFromCenter < inactiveRadius) {
                        element.style.setProperty("--active", "0");
                        return;
                    }

                    const isActive =
                        mouseX > left - proximity &&
                        mouseX < left + width + proximity &&
                        mouseY > top - proximity &&
                        mouseY < top + height + proximity;

                    element.style.setProperty("--active", isActive ? "1" : "0");
                    if (!isActive) return;

                    const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
                    const targetAngle =
                        (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
                    const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
                    const newAngle = currentAngle + angleDiff;

                    animate(currentAngle, newAngle, {
                        duration: movementDuration,
                        ease: [0.16, 1, 0.3, 1],
                        onUpdate: (value) => {
                            element.style.setProperty("--start", String(value));
                        },
                    });
                });
            },
            [inactiveZone, proximity, movementDuration]
        );

        useEffect(() => {
            if (disabled) return;
            const handleScroll = () => handleMove();
            const handlePointerMove = (e: PointerEvent) => handleMove(e);
            window.addEventListener("scroll", handleScroll, { passive: true });
            document.body.addEventListener("pointermove", handlePointerMove, { passive: true });
            return () => {
                if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                window.removeEventListener("scroll", handleScroll);
                document.body.removeEventListener("pointermove", handlePointerMove);
            };
        }, [handleMove, disabled]);

        const gradient =
            variant === "white"
                ? `repeating-conic-gradient(from 236.84deg at 50% 50%, #000, #000 calc(25% / 5))`
                : `radial-gradient(circle, #00ff96 10%, transparent 20%),
           radial-gradient(circle at 40% 40%, #00e5ff 5%, transparent 15%),
           radial-gradient(circle at 60% 60%, #7c3aed 10%, transparent 20%),
           radial-gradient(circle at 40% 60%, #0ea5e9 10%, transparent 20%),
           repeating-conic-gradient(
             from 236.84deg at 50% 50%,
             #00ff96 0%,
             #00e5ff calc(25% / 5),
             #7c3aed calc(50% / 5),
             #0ea5e9 calc(75% / 5),
             #00ff96 calc(100% / 5)
           )`;

        return (
            <>
                <div
                    className={cn(
                        "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
                        glow && "opacity-100",
                        variant === "white" && "border-white",
                        disabled && "!block"
                    )}
                />
                <div
                    ref={containerRef}
                    style={
                        {
                            "--blur": `${blur}px`,
                            "--spread": spread,
                            "--start": "0",
                            "--active": "0",
                            "--glow-border-width": `${borderWidth}px`,
                            "--gradient": gradient,
                        } as React.CSSProperties
                    }
                    className={cn(
                        "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
                        glow && "opacity-100",
                        blur > 0 && "blur-[var(--blur)]",
                        className,
                        disabled && "!hidden"
                    )}
                >
                    <div
                        style={{
                            position: "absolute",
                            pointerEvents: "none",
                            inset: `calc(-1 * var(--glow-border-width, 1px))`,
                            borderRadius: "inherit",
                            border: `var(--glow-border-width, 1px) solid transparent`,
                            background: `var(--gradient)`,
                            opacity: "var(--active)",
                            transition: "opacity 300ms",
                            maskClip: "padding-box, border-box",
                            maskComposite: "intersect",
                            maskImage: `linear-gradient(#0000, #0000), conic-gradient(
                from calc((var(--start) - var(--spread)) * 1deg),
                #00000000 0deg,
                #fff,
                #00000000 calc(var(--spread) * 2deg)
              )`,
                            WebkitMaskClip: "padding-box, border-box",
                            WebkitMaskComposite: "intersect",
                            WebkitMaskImage: `linear-gradient(#0000, #0000), conic-gradient(
                from calc((var(--start) - var(--spread)) * 1deg),
                #00000000 0deg,
                #fff,
                #00000000 calc(var(--spread) * 2deg)
              )`,
                        }}
                    />
                </div>
            </>
        );
    }
);

GlowingEffect.displayName = "GlowingEffect";
export { GlowingEffect };
