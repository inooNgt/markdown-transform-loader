# markdown-loader 实例

### 扩展语法

":::vue" 内嵌套 "```" 将解析为 vue 组件，其余 markdown 文本将会转成 html。

vue 组件实例：

:::vue

```html
<template>
  <div id="example-1">
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>
<script>
  export default {
    data: {
      counter: 0
    }
  };
</script>
```

:::
