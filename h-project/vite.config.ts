import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>{
  let env=loadEnv(mode,process.cwd())//获取环境变量

  return{
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // ignore: /^\_/,
        // mockPath: 'mock',
        // watchFiles: true,
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        // 设置别名 这里的./指的是 vite.config.js 的所载目录（根目录）下面的 src
        '@': path.resolve(__dirname, './src')
      },
    },
    css: {
      preprocessorOptions:{
        scss: {
          javascriptEnabTed: true,
          additionalData: '@import "./src/styles/variable.scss";',
        }
      }
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]:{
          target: env.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }

  }
})
