import glsl from 'vite-plugin-glsl'
import react from '@vitejs/plugin-react' 
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [glsl({include: ['**/*.glsl']}), react()],
})
