import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve, {
  nodeResolve,
} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import stripPropTypes from 'rollup-plugin-strip-prop-types';
import propTypesToTS from 'proptypes-to-ts-declarations';
import alias from '@rollup/plugin-alias';
import image from '@rollup/plugin-image';

import packageJson from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json'],
    }),
    alias({
      entries: [
        { find: '@', replacement: './src' },
      ],
    }),
    commonjs(),
    image(),
    stripPropTypes({
      sourceMap: true,
    }),
    nodeResolve(),
    propTypesToTS(
      'toast-toastique',
      './src/components/**/*.jsx',
      './index.d.ts',
    ),
  ],
};
