"use client"

import ProductCard from "./ProductCard";
import productsData from "../context/data.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Usá emojis si no lo tenés

export default function Carrousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % productsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? productsData.length - 1 : prev - 1
    );
  };

  // Cantidad de ítems visibles (1 activo + 1 a cada lado)
  const getVisibleItems = () => {
    const total = productsData.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    return [
      { ...productsData[prev], index: prev, position: "left" },
      { ...productsData[activeIndex], index: activeIndex, position: "center" },
      { ...productsData[next], index: next, position: "right" },
    ];
  };

  return (
    <div className="relative w-full max-w-[90vw]  mx-auto flex flex-col gap-16 items-center justify-center overflow-hidden h-[90vh]">
      <h1 className="text-4xl font-semibold">Novedades en Oferta</h1>
      {/* Botón Izquierdo */}
      <button
        onClick={handlePrev}
        className="absolute left-0 z-50 p-2 bg-white shadow rounded-full border"
      >
        <ChevronLeft />
      </button>

      {/* Carrusel */}
      <div className="flex items-center justify-center gap-6 w-full">
        <AnimatePresence initial={false} mode="popLayout">
          {getVisibleItems().map(({ index, position, ...product }) => {
            const isActive = position === "center";
            const scale = isActive ? 1.2 : 0.9;
            const blurClass = isActive ? "blur-none" : "blur-sm opacity-60";
            const zIndex = isActive ? 10 : 5;

            return (
              <motion.div
                key={index}
                className={`transition-all duration-100 ${blurClass}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale, zIndex }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  minWidth: "280px",
                  height: "380px"
                }}
              >
                <ProductCard
                  nombre={product.nombre}
                  precio={product.precio}
                  categoria={product.categoria}
                  colores={product.colores}
                  stock={product.stock}
                  imagen={product.imagen}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Botón Derecho */}
      <button
        onClick={handleNext}
        className="absolute right-0 z-50 p-2 bg-white shadow rounded-full border"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
