import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { Client } from 'appwrite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

const client = new Client();
client.setProject("67a06e3f00371d2cfd1d");
