import React, { useEffect, useState } from "react";

export default function HeroBackgroundExtreme() {
    // Seguimos parallax con el ratón para profundidad
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMove(e) {
            const { innerWidth, innerHeight } = window;
            // valores entre -0.5 y 0.5 aprox
            const x = (e.clientX / innerWidth) - 0.5;
            const y = (e.clientY / innerHeight) - 0.5;
            setMouse({ x, y });
        }
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    // FACTOR DE INTENSIDAD
    // Sube esto si quieres aún más locura (por ejemplo 200 en vez de 120)
    const INTENSITY_NEAR = 120; // capas cercanas (debería moverse más)
    const INTENSITY_FAR = 60;   // capas lejanas (se mueven menos, da profundidad)

    // helper para capas "cercanas"
    const nearLayer = (multX = 1, multY = 1, extra = "") => ({
        transform: `translate3d(${mouse.x * INTENSITY_NEAR * multX}px, ${mouse.y * INTENSITY_NEAR * multY}px, 0) ${extra}`,
    });

    // helper para capas "lejanas"
    const farLayer = (multX = 1, multY = 1, extra = "") => ({
        transform: `translate3d(${mouse.x * INTENSITY_FAR * multX}px, ${mouse.y * INTENSITY_FAR * multY}px, 0) ${extra}`,
    });

    return (
        <>
            {/* Capa 0: degradado radial grande (muy al fondo, se mueve suave) */}
            <div
                className="absolute inset-0 z-0 opacity-70"
                style={{
                    background:
                        "radial-gradient(circle at 50% 40%, rgba(56,189,248,0.35) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 70% 20%, rgba(168,85,247,0.25) 0%, rgba(0,0,0,0) 60%)",
                }}
            />

            {/* Capa 1: halo cian arriba izquierda (cercana → se mueve mucho) */}
            <div
                className="absolute z-0 rounded-full blur-[140px] opacity-70 mix-blend-screen"
                style={{
                    ...nearLayer(-1, -0.5),
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.9) 0%, rgba(0,0,0,0) 70%)",
                    width: "600px",
                    height: "600px",
                    top: "-200px",
                    left: "-200px",
                    filter:
                        "drop-shadow(0 0 40px rgba(56,189,248,0.8)) drop-shadow(0 0 120px rgba(56,189,248,0.6))",
                }}
            />

            {/* Capa 2: halo magenta/azul arriba derecha (cercana → se mueve mucho) */}
            <div
                className="absolute z-0 rounded-full blur-[160px] opacity-60 mix-blend-screen"
                style={{
                    ...nearLayer(1, -0.3),
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.8) 0%, rgba(0,0,0,0) 70%)",
                    width: "480px",
                    height: "480px",
                    top: "-120px",
                    right: "-160px",
                    filter:
                        "drop-shadow(0 0 60px rgba(168,85,247,0.6)) drop-shadow(0 0 160px rgba(168,85,247,0.4))",
                }}
            />

            {/* Capa 3: anillo pulsante detrás del texto (cercana) */}
            <div
                className="absolute z-10 left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 opacity-60 animate-glowPulse pointer-events-none"
                style={nearLayer(0.5, 0.5, "scale(1)")}
            >
                <div
                    className="rounded-full"
                    style={{
                        width: "80px",
                        height: "80px",
                        background:
                            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(56,189,248,0.4) 40%, rgba(0,0,0,0) 70%)",
                        boxShadow:
                            "0 0 80px rgba(56,189,248,0.8), 0 0 160px rgba(168,85,247,0.6)",
                        filter:
                            "blur(20px) drop-shadow(0 0 20px rgba(56,189,248,0.8))",
                    }}
                />
            </div>

            {/* Capa 4: rejilla suelo (lejana → se mueve menos para no marear) */}
            <div
                className="absolute left-1/2 bottom-0 z-0 opacity-40 pointer-events-none"
                style={{
                    ...farLayer(0.2, 0.2),
                    transform: `translateX(-50%) perspective(800px) rotateX(60deg) translateY(120px) scale(1.6)`,
                    width: "1400px",
                    height: "800px",
                    backgroundImage:
                        "repeating-linear-gradient(0deg, rgba(56,189,248,0.4) 0px, rgba(56,189,248,0.4) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(56,189,248,0.4) 0px, rgba(56,189,248,0.4) 1px, transparent 1px, transparent 60px)",
                    backgroundColor: "rgba(0,0,0,0)",
                    boxShadow:
                        "0 0 120px rgba(56,189,248,0.5), 0 0 260px rgba(168,85,247,0.4)",
                    filter: "drop-shadow(0 0 20px rgba(56,189,248,0.8))",
                }}
            />

            {/* Capa 5: rayo horizontal flotante (lejana → menos movimiento) */}
            <div
                className="absolute z-10 w-full left-0 right-0 h-[2px] opacity-60 blur-[2px] mix-blend-screen pointer-events-none"
                style={{
                    ...farLayer(0.4, -0.2),
                    top: "60%",
                    background:
                        "linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,1) 50%, rgba(56,189,248,0) 100%)",
                    boxShadow:
                        "0 0 40px rgba(56,189,248,0.9), 0 0 120px rgba(168,85,247,0.7)",
                }}
            />
        </>
    );
}
