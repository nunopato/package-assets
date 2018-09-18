const fs = require('fs');
const { resolveSourceDir, resolveDestDir, readAsset } = require('./assets');

test('ResolveSourceDir', () => {
    var value = resolveSourceDir('assets');
    expect(value).toEqual(expect.stringContaining('package-assets/assets'));
});

test('ResolveDestDir', () => {
    var value = resolveDestDir('assets');
    expect(value).toEqual(expect.stringContaining('package-assets/assets'));
});

test('ReadAsset', () => {
    var myConfig = JSON.parse(readAsset('package.json'));  
    expect(myConfig["name"]).toEqual("package-assets");
});
