import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'dist/Delta.js',
  output: {
    file: 'delta-rollup.js',
    format: 'amd',
    name: 'quill-delta',
    sourcemap: 'inline'
},
plugins: [commonjs(), nodeResolve()]
}