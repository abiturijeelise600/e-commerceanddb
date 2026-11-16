import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// NEXT_PUBLIC_* names are intentionally accepted for this Vite application.
export default defineConfig({ envPrefix: ['VITE_', 'NEXT_PUBLIC_'], plugins: [react()] })
