# Package Assets
[![Build Status](https://travis-ci.com/rmliddle/package-assets.svg?branch=master)](https://travis-ci.com/rmliddle/package-assets) ![NpmLicense](https://img.shields.io/npm/l/package-assets.svg)


Conveniently handle static assets in your node package.

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
.catch(err => console.log(err));
```

```js
.readAssetFile(path)
```

>`path` the relative path from the asset root of the project  

### .writeAsset

Writes a string or buffer out to the asset file.

```js
var string = "Hello Package Assets!";
assets.write("hello.txt", string)
.then(success => console.log(success));
```

```js
.writeAsset(fileName, fileContent)
```

>`fileName` (required) the file name in which to save your asset content, under the asset path.
> `fileContent` (optional) the file content to save


### .copyAssetDir
Copies the asset directory to the current working directory. Takes an optional argument `dest`. 

```js
assets.copyAssetDir()
.then((result) => {
    console.log(result.length);
})
.catch(err => console.log(err));
```

```js
.copyAssetDir(dest)
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
.setAssetDir(path)
```

>`path` an required asset directory relative to package root.

## License

This package has an MIT license, see `LICENSE` for the the full text.
