import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import filesize from 'rollup-plugin-filesize';
import minify from 'rollup-plugin-babel-minify';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import uglify from 'rollup-plugin-uglify';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.js',
      format: 'umd',
      name: 'wtfjht-client',
      globals: ['axios'],
    },
    {
      file: 'build/index.cjs.js',
      format: 'cjs',
      name: 'wtfjht-client',
      globals: ['axios'],
    },
    {
      file: 'build/index.esm.js',
      format: 'es',
      globals: ['axios'],
    },
  ],
  external: ['axios'],
  plugins: [
    globals(),
    builtins(),
    babel({ exclude: 'node_modules/**' }),
    localResolve(),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      preferBuiltins: true,
      browser: true,
      modulesOnly: true,
    }),
    minify(),
    uglify(),
    commonjs(),
    filesize(),
  ],
};

export default config;
