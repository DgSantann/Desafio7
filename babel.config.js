module.exports = {
    presets: [
      '@babel/preset-env',  { targets: 'node 16', modules: false },    // Para transpilação de ES6+
      '@babel/preset-typescript' // Para suporte ao TypeScript
    ], 
    plugins: ['@babel/plugin-transform-modules-commonjs'],
  };