<template>
    <div id="main">

    </div>
</template>

<script>
    import E from "wangeditor"
    export default{
        data() {
            return {
                editor: "",
            };
        },
      mounted () {
         //创建wangeditor实例
        this.editor = new E("#main");
        // 取消自动 focus
        this.editor.config.focus = false

        // 配置 onchange 回调函数--获取输入的值内容
        this.editor.config.onchange = newHtml => {
        //   console.log("change 之后最新的 html", newHtml);
        //把获取的富文本编辑内容--传递给弹框组件--- 父组件
            this.$emit('sendEditor',newHtml)
        };
        // 配置触发 onchange 的时间频率，默认为 200ms
        this.editor.config.onchangeTimeout = 500; // 修改为 500ms
        // 配置菜单栏，删减菜单，调整顺序
        // 默认情况下，显示所有菜单
        this.editor.config.menus = [
        "head",
        "bold",
        "fontSize",
        "fontName",
        "italic",
        "underline",
        "strikeThrough",
        "indent",
        "lineHeight",
        "foreColor",
        "backColor",
        "link",
        //   "list",
        //   "todo",
        //   "justify",
        //   "quote",
        "emoticon",
        "image",
        "video",
        "table",
        "code",
        "splitLine",
        "undo",
        "redo",
        ];

        this.editor.create();
        },
    };

</script>

<style>

</style>