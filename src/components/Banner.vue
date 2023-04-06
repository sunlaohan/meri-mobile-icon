<template>
  <div>
    <h1 class="banner">meri-mobile-icon</h1>
    <div class="code">
      <div>
        <h3>Installation</h3>
        <pre><code>npm install meri-mobile-icon --save<br/>yarn add meri-mobile-icon</code></pre>
      </div>
      <div>
        <h3>Usage</h3>
        <pre><code>import { IconHome } from 'meri-mobile-icon'<br/>&lt;span v-html="IconHome({size:36,color:'#009C22'})" /&gt;</code></pre>
      </div>
    </div>
    <h3 style="text-align:center">提示:传入参数 {origin:true}  使用svg 原有的颜色</h3>
  </div>
</template>

<script>
  export default {
    name: "Banner"
  };
</script>

<style lang="css">
  .banner{
    padding-top: 30px;
    text-align: center;
  }
  .code{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 720px;
  }
  .code div{
    width: 48%;
  }
  pre{
    width: 100%;
    padding: 20px;
    border-radius: 6px;
    color: #476391;
    background-color: #e7ecf3;
    overflow: auto;
  }
  h3{
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    padding: 10px 0;
  }
</style>
