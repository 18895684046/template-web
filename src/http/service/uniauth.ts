import request from '../index'
import config from '../config'
import { ApiResponse } from '../types'

const preUrl = '/api/uniauth'

interface DefaultProject {
  id: string;
  projectId: string;
  projectName: string;
  description: string;
  stage: string;
  studio: string;
  accessed: boolean;
  iconUrl: string;
  createTime: string;
  createUser: string;
  gameType: string;
  location: string;
  active: boolean;
}

const {
  uniauth: {
    defaultProject,
    projects,
    permissions
  }
} = config

// 获取用户默认项目信息
export const getDefaultProject = () => {
  return request<ApiResponse<DefaultProject>>({
    url: preUrl + defaultProject,
    method: 'get',
  })
}

// 更新默认项目id
export const updateDefaultProject = (data: { projectId: string }) => {
  return request({
    url: preUrl + defaultProject,
    method: 'put',
    data
  })
}

// 获取所有项目信息
export const getProjects = (params: { appName: string }) => {
  return request({
    url: preUrl + projects,
    method: 'get',
    params
  })
}

// 获取用户权限
export const getPermissions = (
  params: {
    appName: string,
    projectId: string,
    email: string
  }
) => {
  return request({
    url: preUrl + permissions,
    method: 'get',
    params
  })
}