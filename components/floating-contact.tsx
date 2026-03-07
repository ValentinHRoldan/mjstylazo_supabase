"use client";

import { useState } from "react";
import { MessageCircle, Instagram, X } from "lucide-react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      
      {/* Opciones */}
      {open && (
        <>
          <a
            href="https://wa.me/5493834610413?text=Hola%21%20Quería%20hacer%20una%20consulta"
            target="_blank"
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/mj_stylaz0/"
            target="_blank"
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </>
      )}

      {/* Botón principal */}
      <button
        onClick={() => setOpen(!open)}
          className="
            w-14 h-14
            rounded-full
            bg-black
            text-white
            flex items-center justify-center
            shadow-lg
            transition-all duration-200
            hover:scale-110
            hover:shadow-xl
            hover:bg-gray-800
            floating-contactt
            "
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}