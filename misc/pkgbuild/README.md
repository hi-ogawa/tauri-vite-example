# PKGBUILD

```sh
# build deb file
pnpm build --bundles deb

# generate PKGBUILD file based on deb file
bash misc/pkgbuild/generate.sh

# install locally
(cd misc/pkgbuild/build && makepkg -si)
```
