import { defineConfig } from 'vitest/config'
import reactNative from 'vitest-react-native'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [reactNative(), react()],
})
