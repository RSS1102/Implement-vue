import { defineConfig } from "vite";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  // 配置路径
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});
