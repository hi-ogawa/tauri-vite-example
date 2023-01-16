# tauri vite example

[tauri](https://github.com/tauri-apps/tauri) port of https://github.com/hi-ogawa/electron-vite-experiment

```sh
# development
pnpm i
pnpm dev

# build (see misc/pkgbuild/README.md for installation on archlinux)
pnpm build
chmod +x src-tauri/target/release/bundle/appimage/tauri-vite-example_0.1.0_amd64.AppImage
./src-tauri/target/release/bundle/appimage/tauri-vite-example_0.1.0_amd64.AppImage
```

## references

- https://tauri.app/v1/guides/getting-started/setup/integrate
- https://tauri.app/v1/guides/building/linux
