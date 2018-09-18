# Package Assets

Manage static assets in your node packages. 

## Usage
Suppose we wanted to read a config file into an object, we could use `readAssetFile`.

```js
var {readAsset} = require('package-assets');

var myConfig = JSON.parse(readAsset('config/myConfig.json'));  
```

### Args
```js
readAssetFile(path);
```

>`path` the relative path from the package root of the project

Suppose we wanted to copy an asset directory into the `cwd`, we could use `copyAssetDir`.


```js
var {copyAssetDir} = require('package-assets');

//copy assets into dist
copyAssetDir('assets', 'dist');

//OR copy assets into cwd
copyAssetDir('assets');
```

### Args
```js
copyAssetDir(src, dest);
```

>`src` the directory name or path in the root level of package.

>`dest` an optional destination directory name to copy the asset resources to within the current working directory. By default assets will just be unpacked from the source directory directly into the working directory.


## License

This package has an MIT license, see `LICENSE` for the the full text.
