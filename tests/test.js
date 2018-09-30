const fsPromises = require('fs').promises;

//import PackageAssets 
const PackageAssets = require('../index');
const assets = PackageAssets();

test('ReadAsset', () => {
    assets.readAsset('package.json')
    .then((result) => {
        var myConfig = JSON.parse(result);  
        expect(myConfig["name"]).toEqual("package-assets");
    })
});

test('SetAssetDir', () => {
    expect(assets.setAssetDir('lib')).toEqual(true);
    expect(assets.setAssetDir('no_dir')).toEqual(false);

});

test('ResolveAssetDir', () => {
    expect(assets.setAssetDir('tests')).toEqual(true);
    expect(assets.resolveAssetDir()).toEqual(expect.stringContaining('tests'));
});

test('PackageAssets', () => {
    const newAssets = PackageAssets('tests');
    expect(assets.resolveAssetDir()).toEqual(expect.stringContaining('tests'));
});