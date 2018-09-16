const fs = require('fs');
const { resolveSourceDir, resolveDestDir } = require('./assets');

test('ResolveSourceDir', () => {
    var value = resolveSourceDir('assets');
    expect(value).toEqual(expect.stringContaining('package-assets/assets'));
});

test('ResolveSourceDir', () => {
    var value = resolveDestDir('assets');
    expect(value).toEqual(expect.stringContaining('package-assets/assets'));
});
