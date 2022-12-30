import request from '../index'
import config from '../config'
// import { ApiResponse } from '../types'
import { Navbar } from '@/stores/navbar'

const {
  navbar
} = config

const isProd = import.meta.env.MODE === 'production'

// 获取所有服务信息
export const getNavbar = () => {
  return request<Navbar>({
    url: navbar,
    method: 'get',
    params: isProd ? {
      timestamp: new Date().getTime()
    } : {
      token: 1,
      timestamp: new Date().getTime()
    }
  })
}