/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'sass',
    transform(code, id) {
      if (id.endsWith('.scss') || id.endsWith('.sass')) {
        const result = sass.renderSync({ file: id })
        return { code: result.css.toString() }
      }
    }
  }],
})
