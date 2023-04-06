import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
// import pkg from './package.json'
import pkg from './package.json' assert { type: 'json' };


const override = { compilerOptions: { module: 'ESNext' } }

export default {
    input:"src/index.ts",
    output:[
        {file:pkg.exports.require,format:'cjs'},
        {file:pkg.exports.import,format:"esm"}
    ],
    plugins:[typescript(
        {tsconfig:"./tsconfig.json",tsconfigOverride:override}
    ),commonjs(),terser()]
}