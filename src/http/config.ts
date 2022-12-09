export default {
  // navbar的地址 测试环境和生产环境都是同一个服务地址，所以需要用完整地址
  navbar: `/static/web/qa/navbar.json`,

  // 管理后台
  uniauth: {
    // 获取默认项目信息
    defaultProject: '/user/defaultProject',

    // 获取项目列表
    projects: '/user/:appName/projects',

    // 获取应用权限
    permissions: '/permissions/:appName/:projectId/user/:email'
  },
}