import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Carga automática de todas las imágenes que metas dentro de
 * src/assets/novaClub/ con extensiones png|jpg|jpeg|webp|gif
 *
 * Nota: usa import.meta.glob de Vite (requiere que estén en /src, no en /public).
 * Cuando añadas o borres imágenes, el dev server se actualiza solo.
 */
const useScreenshots = () => {
    const modules = import.meta.glob("../assets/novaClub/*.{png,jpg,jpeg,webp,gif}", {
        eager: true,
        as: "url",
    });
    // Ordena por nombre para controlar el orden (01_, 02_, etc.)
    return useMemo(() => Object.values(modules).sort(), [modules]);
};

export default function ScreenshotsNovaClub() {
    const images = useScreenshots();
    const [lightbox, setLightbox] = useState(null); // url o null

    return (
        <main className="min-h-screen bg-fondo text-white">
            {/* NAV simple (vuelve a Home) */}
            <header className="sticky top-0 bg-fondo/80 backdrop-blur border-b border-white/10 z-50">
                <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4 text-sm">
                    <Link to="/" className="font-semibold hover:text-acento">
                        ← Volver
                    </Link>
                    <span className="text-gray-400">Galería NovaClub</span>
                </nav>
            </header>

            <section className="w-full max-w-5xl mx-auto px-6 py-10">
                <h1 className="text-2xl font-semibold text-acento mb-2">
                    Capturas del sistema de administración de Nova Club
                </h1>


                {images.length === 0 ? (
                    <div className="text-gray-500 bg-card/40 border border-white/10 rounded-xl p-6">
                        Aún no hay imágenes. Arrastra tus PNG/JPG a{" "}
                        <code className="text-gray-300">src/assets/novaClub/</code>.
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {images.map((src, i) => (
                            <button
                                key={i}
                                onClick={() => setLightbox(src)}
                                className="group relative rounded-xl overflow-hidden border border-white/10 bg-card/50 hover:scale-[1.01] transition"
                                title="Ver grande"
                            >
                                <img
                                    src={src}
                                    alt={`Captura NovaClub ${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/30 grid place-items-center text-sm">
                                    <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-lg">
                                        Ampliar
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </section>

            {/* Lightbox simple */}
            {lightbox && (
                <div
                    onClick={() => setLightbox(null)}
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur grid place-items-center p-4 cursor-zoom-out"
                >
                    <img
                        src={lightbox}
                        alt="captura ampliada"
                        className="max-w-[95vw] max-height-[85vh] md:max-w-[80vw] rounded-xl border border-white/10 shadow-2xl"
                        style={{ maxHeight: "85vh" }}
                    />
                </div>
            )}

            <footer className="text-center text-xs text-gray-600 py-10">
                © {new Date().getFullYear()} David Tejero — NovaClub
            </footer>
        </main>
    );
}
