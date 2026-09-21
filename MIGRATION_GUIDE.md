# 迁移指南：从静态HTML到Jekyll

## 已完成的工作

### 1. Jekyll基础结构
- ✅ 创建 `_layouts/` 目录
- ✅ 创建 `_includes/` 目录
- ✅ 创建 `assets/` 目录
- ✅ 创建 `_config.yml` 配置文件
- ✅ 创建 `Gemfile` 依赖管理文件

### 2. 模板提取
- ✅ 提取公共头部到 `_includes/head.html`
- ✅ 提取网站顶部到 `_includes/header.html`
- ✅ 提取网站底部到 `_includes/footer.html`
- ✅ 提取折叠脚本到 `_includes/collapse-script.html`
- ✅ 提取iframe脚本到 `_includes/iframe-script.html`
- ✅ 创建默认布局 `_layouts/default.html`

### 3. 页面转换
- ✅ `index.html` → `index.md` (Lenda Sarieh原版)
- ✅ `index_en.html` → `index_en.md` (英文版)
- ✅ `index_zh.html` → `index_zh.md` (简体中文版)
- ✅ `index_zh_t.html` → `index_zh_t.md` (繁体中文版)
- ✅ `index_zh_r.html` → `index_zh_r.md` (羅鶾版)
- ✅ `choose_language.html` → `choose_language.md` (语言选择页)

### 4. 配置更新
- ✅ 更新 `_config.yml` 排除旧HTML文件
- ✅ 配置默认布局
- ✅ 设置GitHub Actions工作流

### 5. GitHub Actions
- ✅ 创建 `.github/workflows/jekyll.yml` (Jekyll构建流程)
- ✅ 删除旧的 `.github/workflows/static.yml`
- ✅ 创建 `.nojekyll` 文件

## 待完成的任务

### 1. 静态资源迁移
- ⚠️ 检查并确保 `images/` 目录存在并包含所有图片
- ⚠️ 检查并确保 `fonts/` 目录存在并包含字体文件
- ⚠️ 检查 `js/` 目录结构

### 2. 其他语言版本迁移
以下语言版本尚未迁移到Jekyll：
- `index_zh_m.html` (焱暒妏)
- `index_hsn.html` (长沙话)
- `index_wingzau.html` (永州话)
- `index_Cantonese.html` (粤语)
- `index_lw.html` (景梁书)
- `index_xdi8.html` (Xdi8 Aho)
- `index_brdh.html` (Дихиѯѫнеца)
- `index_patgem.html` (patgem)
- `index_qmt.html` (Lhiâw Miùt)

这些文件暂时保留在仓库中，但被排除在Jekyll构建之外。

### 3. 本地测试
- ⚠️ 安装 Ruby 和 Jekyll
- ⚠️ 运行 `bundle install` 安装依赖
- ⚠️ 运行 `bundle exec jekyll serve` 本地测试
- ⚠️ 验证所有页面正常工作

### 4. 部署验证
- ⚠️ 推送到GitHub
- ⚠️ 检查GitHub Actions构建状态
- ⚠️ 验证GitHub Pages网站可访问

## 技术细节

### 布局系统
- 使用Jekyll的布局系统避免重复HTML结构
- 通过Front Matter控制页面特定变量（语言、显示文本等）
- 使用 `{% include %}` 标签重用HTML片段

### 多语言支持
- 每个语言版本是独立的Markdown文件
- 通过 `lang` 和 `lang_display` 变量控制语言设置
- URL保持与原HTML文件一致（通过 `.md` 后缀自动生成 `.html`）

### 样式和脚本
- 保持原有的 `style.css` 不变
- JavaScript内联在include文件中
- 折叠效果和iframe大小调整功能保持不变

## 维护建议

1. **添加新页面**：创建新的Markdown文件，使用默认布局
2. **修改公共部分**：编辑 `_includes/` 中的相应文件
3. **更改样式**：编辑 `style.css`
4. **添加新语言版本**：参考现有 `.md` 文件创建新文件
