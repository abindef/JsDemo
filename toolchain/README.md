# 前端工具链最佳实践

这个项目展示了现代前端开发的工具链最佳实践。

## 核心工具链组件

### 1. 构建工具
- **Vite**: 现代前端构建工具
  - 快速的开发服务器
  - 优化的生产构建
  - 开箱即用的 TypeScript 支持

### 2. 代码质量
- **ESLint**: 代码质量检查
- **Prettier**: 代码格式化
- **TypeScript**: 类型检查
- **Husky**: Git hooks
- **lint-staged**: 暂存文件检查

### 3. 测试工具
- **Vitest**: 单元测试框架
- **Testing Library**: 组件测试
- **测试覆盖率报告**

### 4. 版本控制
- **Commitizen**: 规范化的提交信息
- **Commitlint**: 提交信息检查

### 5. 样式工具
- **Sass**: CSS 预处理器
- **PostCSS**: CSS 后处理器
- **Tailwind CSS**: 原子化 CSS 框架

## 项目结构

\`\`\`
src/
├── assets/        # 静态资源
├── components/    # 通用组件
├── hooks/         # 自定义 hooks
├── layouts/       # 布局组件
├── pages/         # 页面组件
├── services/      # API 服务
├── stores/        # 状态管理
├── styles/        # 全局样式
├── types/         # TypeScript 类型
└── utils/         # 工具函数
\`\`\`

## 开发流程

1. **开发**
   ```bash
   npm run dev     # 启动开发服务器
   ```

2. **代码质量**
   ```bash
   npm run lint    # 代码检查
   npm run format  # 代码格式化
   ```

3. **测试**
   ```bash
   npm run test              # 运行测试
   npm run test:coverage     # 测试覆盖率
   ```

4. **提交代码**
   ```bash
   npm run commit   # 使用 Commitizen 提交
   ```

5. **构建**
   ```bash
   npm run build    # 生产构建
   npm run preview  # 预览构建结果
   ```

## Git 提交规范

- feat: 新功能
- fix: 修复
- docs: 文档更新
- style: 代码格式
- refactor: 重构
- test: 测试
- chore: 构建过程或辅助工具的变动

## CI/CD 流程

1. **代码提交**
   - 自动运行 lint-staged
   - 检查提交信息格式
   - 运行单元测试

2. **Pull Request**
   - 运行所有测试
   - 检查代码覆盖率
   - 自动部署预览环境

3. **合并主分支**
   - 自动构建
   - 运行 E2E 测试
   - 部署生产环境

## 最佳实践

1. **代码质量**
   - 使用 TypeScript 进行类型检查
   - 遵循 ESLint 规则
   - 保持一致的代码风格

2. **性能优化**
   - 代码分割
   - 路由懒加载
   - 图片优化

3. **测试策略**
   - 单元测试
   - 组件测试
   - E2E 测试

4. **安全实践**
   - 依赖更新
   - 安全扫描
   - XSS 防护

## 环境配置

- **开发环境**: `.env.development`
- **测试环境**: `.env.test`
- **生产环境**: `.env.production`

## 常见问题

1. **环境配置问题**
   - 检查 Node.js 版本
   - 确认环境变量设置

2. **构建问题**
   - 清除缓存
   - 检查依赖版本

3. **测试问题**
   - 隔离测试环境
   - 模拟外部依赖
