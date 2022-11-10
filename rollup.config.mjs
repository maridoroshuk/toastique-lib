/* eslint-disable no-underscore-dangle */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve, {
  nodeResolve,
} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import stripPropTypes from 'rollup-plugin-strip-prop-types';
import alias from '@rollup/plugin-alias';
import image from '@rollup/plugin-image';
import { getBabelInputPlugin } from '@rollup/plugin-babel';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import packageJson from './package.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json'],
});
const projectRootDir = path.resolve(__dirname);

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
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src'),
        },
      ],
      customResolver,
    }),
    getBabelInputPlugin({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
    }),
    commonjs(),
    image(),
    stripPropTypes({
      sourceMap: true,
    }),
    nodeResolve(),
  ],
};
