# Package Assets

Manage static assets in your node packages. 

## Usage
To get started:

```js
const PackageAssets = require('package-assets');

//default dir to your package root
const assets = PackageAssets('config');
```


### .readAssetFile

```js
assets.readAsset('configFile.json')
.then((result) => {
    return JSON.parse(result);
})
.catch((err) => {
    console.log(err);
});
```

```js
assets.readAssetFile(path)
```

>`path` the relative path from the asset root of the project  


### .copyAssetDir

```js
//copy config into cwd
assets.copyAssetDir()
.then((result) => {
    console.log(result.length);
})
.catch((err) => {
    console.log(err);
});
```

```js
assets.copyAssetDir(dest)
```

>`dest` an optional destination directory name to copy the asset resources to within the current working directory. By default assets will just be unpacked from the source directory directly into the working directory.

## License

This package has an MIT license, see `LICENSE` for the the full text.
