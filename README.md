# Package Assets
[![Build Status](https://travis-ci.com/rmliddle/package-assets.svg?branch=master)](https://travis-ci.com/rmliddle/package-assets) ![NpmLicense](https://img.shields.io/npm/l/package-assets.svg)


Manage static assets in your node packages. 

## Installation

```sh
npm install package-assets
```

## Usage
To get started:

```js
const PackageAssets = require('package-assets');

//set asset directory
const assets = PackageAssets('config');
```

### .readAssetFile
Reads an asset file from the asset directory.

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
Copies the asset directory to the current working directory. Takes an optional argument `dest`. 

```js
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

### .resolveAssetDir
Resolves the full file path of the asset directory in your given package.

```js
var path = assets.resolveAssetDir()

console.log(path);
```

### .setAssetDir
Setter method for the asset directory on the PackageAssets object.

```js
var success = assets.setAssetDir('my/new/assets/dir');

console.log(success);
```

```js
assets.setAssetDir(path)
```

>`path` an required asset directory relative to package root.

## License

This package has an MIT license, see `LICENSE` for the the full text.
