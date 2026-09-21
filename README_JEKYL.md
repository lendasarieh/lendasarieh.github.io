# Lenda Sarieh 官方网站

这是白菜语（Lenda Sarieh）的官方网站，现已迁移到基于 Jekyll 的静态网站生成器。

## 项目结构

```
lendasarieh.github.io/
├── _config.yml          # Jekyll 配置文件
├── _includes/           # 可重用的HTML片段
│   ├── head.html       # 页面头部
│   ├── header.html     # 网站顶部导航
│   ├── footer.html     # 网站底部
│   ├── collapse-script.html  # 折叠效果脚本
│   └── iframe-script.html    # iframe大小调整脚本
├── _layouts/            # 页面布局模板
│   └── default.html    # 默认布局
├── assets/              # 静态资源目录
├── images/              # 图片资源（需要手动创建）
├── index.md            # 主页（Lenda Sarieh语言版本）
├── index_en.md         # 英文版本
├── index_zh.md         # 简体中文版本
├── index_zh_t.md       # 繁体中文版本
├── index_zh_r.md       # 羅鶾版本
├── choose_language.md  # 语言选择页面
├── style.css           # 样式表
├── Gemfile             # Ruby依赖管理
└── .github/workflows/jekyll.yml  # GitHub Actions工作流
```

## 本地开发

### 前置要求

- Ruby 3.2 或更高版本
- Bundler
- Jekyll

### 安装依赖

```bash
gem install bundler jekyll
bundle install
```

### 本地运行

```bash
bundle exec jekyll serve
```

网站将在 `http://localhost:4000` 上运行。

## 部署

网站通过 GitHub Pages 自动部署。推送到 `master` 分支后会自动触发构建和部署。

## 语言版本

目前支持以下语言版本：

- **Lenda Sarieh** (`index.md`) - 白菜语原版
- **English** (`index_en.md`) - 英文版
- **简体中文** (`index_zh.md`) - 简体中文版
- **繁體中文** (`index_zh_t.md`) - 繁体中文版
- **羅鶾** (`index_zh_r.md`) - 羅鶾版本

其他语言版本（如焱暒妏、长沙话、永州话、粤语、景梁书、Xdi8 Aho、Дихиѯѫнеца、patgem、Lhiâw Miùt）尚未迁移到Jekyll，原始HTML文件已被排除在构建之外。

## 注意事项

1. **图片资源**：确保 `images/` 目录存在并包含所有必要的图片文件。如果该目录不在本地，请从远程仓库拉取。
2. **字体文件**：`fonts/` 目录（包含XEGOEALL_Regular.ttf和FiraXdi8-Regular.ttf）也需要存在。
3. **旧HTML文件**：原有的HTML文件（如index.html、index_en.html等）已被排除在Jekyll构建之外，但暂时保留在仓库中以备参考。

## 贡献

欢迎贡献新的语言版本或改进现有内容！

## 联系方式

如有问题，请联系 Jack Wang: jack201806@outlook.com
