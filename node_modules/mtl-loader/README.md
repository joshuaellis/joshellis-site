# mtl-loader for webpack

This loader enables loading of [.mtl (material files)](https://en.wikipedia.org/wiki/Wavefront_.obj_file#Material_template_library) for the [.obj file format](https://en.wikipedia.org/wiki/Wavefront_.obj_file), importing the specified assets via regular import statements, to take advantage of webpacks hashing/cache-busting etc.

The loader matches references to assets matching ```.(jpeg|jpg|mpc|mps|mpb|cxc|cxs|cxb|png|tga)```, and imports them via a regular import statement, returing the materials defintion with all asset references replaced with the relevant webpack reference.

## Installation

```
$ npm install mtl-loader --save-dev
```

## Usage

Add mtl-loader to your webpack config, matching .mtl files.
[Documentation: Using loaders](https://webpack.js.org/concepts/#loaders)

In your code, load your .mtl file via a normal import statement.

```
import materials from './materials.mtl';
```

Then, using OBJLoader or OBJLoader2, load your materials like this.

```
const loader = new THREE.OBJLoader2();
loader.loadMtl('', 'your-materials-name', materials, someCallbackFunction);
```
