# tauri vite example

tauri port of https://github.com/hi-ogawa/electron-vite-experiment

```sh
# development
pnpm i
pnpm dev

# build
pnpm build
ls -lh src-tauri/target/release/bundle/*/*.{AppImage,deb}
# -rwxr-xr-x 1 hiroshi hiroshi 147M Jan 16 13:22 src-tauri/target/release/bundle/appimage/tauri-vite-example_0.1.0_amd64.AppImage
# -rw-r--r-- 1 hiroshi hiroshi 3.4M Jan 16 13:21 src-tauri/target/release/bundle/deb/tauri-vite-example_0.1.0_amd64.deb
chmod +x src-tauri/target/release/bundle/appimage/tauri-vite-example_0.1.0_amd64.AppImage
./src-tauri/target/release/bundle/appimage/tauri-vite-example_0.1.0_amd64.AppImage
```

## references

- https://tauri.app/v1/guides/getting-started/setup/integrate
- https://tauri.app/v1/guides/building/linux
