const fs = require('fs');

//import PackageAssets 
const PackageAssets = require('../index');
const assets = PackageAssets();

test('ReadAsset', () => {
    var myConfig = JSON.parse(manager.readAsset('package.json'));  
    expect(myConfig["name"]).toEqual("package-assets");
});
