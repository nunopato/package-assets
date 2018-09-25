const fs = require('fs');

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
