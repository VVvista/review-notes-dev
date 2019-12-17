const myNav = require("./custom-nav.js");
const mySidebar = require("./sidebar/custom-sidebar");

module.exports = {
    title: '复盘笔记预发布环境（不可作为正式学习环境）',
    description: 'review notes',
    // base: '/review-notes/',
    markdown: {
        lineNumbers: false, // 代码块显示行号
        toc: {includeLevel: [2, 3]},
        extendMarkdown: md => {
        md.set({html: true}),
        md.use(require("markdown-it-katex"))
    }
    },
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'}],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }]
    ],
    themeConfig: {
        displayAllHeaders: false, // 当前活动页面的标题
        lastUpdated: '最后修改时间', // string | boolean
        smoothScroll: true,
        nav: myNav,
        sidebar: mySidebar,

        //----------------git-仓库和编辑链接---------------
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'GourdErwa/review-notes-dev',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // =以下为可选的编辑链接选项=
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'GourdErwa/review-notes-dev',
        // 假如文档不是放在仓库的根目录下：
        docsDir: '',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: false,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面'
    },
    plugins: [
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
        'vuepress-plugin-janitor',
        '@vuepress/container',
        '@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-154222368-1' // UA-00000000-0
            }
        ]]
}
;
