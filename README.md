# Package Assets

Copy static assets from your node package into the current working directory.

## Usage

```js
var {copyAssetDir} = require('package-assets');

copyAssetDir('assets');
```

### Args
```js
copyAssetDir(src, dest);
```

`src`: the directory name or path in the root level of package.

`dest`: an optional destination directory name to copy the asset resources to within the 
current working directory. By default assets will just be unpacked from the source directory
directly into the working directory.


## License

This package has an MIT license, see `LICENSE` for the the full text.
