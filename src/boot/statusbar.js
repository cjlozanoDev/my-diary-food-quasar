import { boot } from "quasar/wrappers";
import { Capacitor } from "@capacitor/core";
// 💡 Importa el plugin Capawesome que corrige el solapamiento
import { EdgeToEdge } from "@capawesome/capacitor-android-edge-to-edge-support";
import { StatusBar, Style } from "@capacitor/status-bar";

export default boot(async () => {
  // Aseguramos que solo se ejecute en Android
  if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === "android") {
    try {
      // 🛑 1. HABILITAR LA SOLUCIÓN DEFINITIVA
      // Este es el comando que fuerza la corrección del "Edge-to-Edge" en Android 12+ (API 31+)
      await EdgeToEdge.enable();

      // 2. CONFIGURACIÓN VISUAL (Opcional pero Recomendado)
      // Esto asegura que los iconos sean visibles y que el fondo de la barra de estado coincida con tu Header
      // Usamos Style.Dark si tu Header de Quasar es oscuro.
      await StatusBar.setStyle({ style: Style.Dark });

      // Ya no es necesario llamar a setOverlaysWebView(false)
    } catch (e) {
      console.error("Error al configurar EdgeToEdge en Android:", e);
    }
  }
});
