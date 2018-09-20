# Package Assets

Manage static assets in your node packages. 

## Usage
Suppose we wanted to read a config file into an object, we could use `readAssetFile`.

```js
const PackageAssets = require('package-assets');
const assets = PackageAssets('config/');

var myConfig = JSON.parse(assets.readAsset('configFile.json'));  
```

### Args
```js
assets.readAssetFile(path);
```

>`path` the relative path from the asset root of the project

Suppose we wanted to copy an asset directory into the `cwd`, we could use `copyAssetDir`.


```js
const PackageAssets = require('package-assets');

//default dir to your package root
const assets = PackageAssets();

//copy assets into dist
assets.copyAssetDir('dist');

//OR copy assets into cwd
assets.copyAssetDir();
```

### Args
```js
assets.copyAssetDir(dest);
```

>`dest` an optional destination directory name to copy the asset resources to within the current working directory. By default assets will just be unpacked from the source directory directly into the working directory.

## License

This package has an MIT license, see `LICENSE` for the the full text.
