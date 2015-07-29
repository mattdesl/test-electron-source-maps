# test-electron-source-maps

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Testing a bug with source maps

Steps to reproduce:

```sh
# clone the repo
git clone -b test/first-run https://github.com/mattdesl/test-electron-source-maps.git

# cd into it
cd test-electron-source-maps

# install dependencies
npm install
```

To test the script in Electron: (view console)

```sh
npm run electron
```

The `debugger` will not break until you reload the page.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/test-electron-source-maps/blob/master/LICENSE.md) for details.
