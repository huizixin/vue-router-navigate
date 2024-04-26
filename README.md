# vue-router-navigate

### 增加路由跳转方法：
`navigateTo`：保留当前页面缓存，跳转到应用内的某个页面，使用$router.navigateBack可以返回到原页面。
`redirectTo`：关闭当前页面缓存，跳转到应用内的某个页面。
`reLaunch`：关闭所有页面缓存，打开到应用内的某个页面。
`navigateBack`：关闭当前页面并清除缓存，返回上一页面或多级页面

`navigateTo`、`redirectTo`、`reLaunch`参数 和 router.push 方法一致


## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
