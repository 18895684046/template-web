import { GlobalThemeOverrides } from 'naive-ui'

const $qaq_blue = '#0CB6F2'

// 自定义naive全局样式
export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: $qaq_blue
  },
  Button: {
    borderHover: `1px solid ${$qaq_blue}`,
    borderPressed: `1px solid ${$qaq_blue}`,
    borderFocus: `1px solid ${$qaq_blue}`,
    borderHoverPrimary: `1px solid ${$qaq_blue}`,
    borderPressedPrimary: `1px solid ${$qaq_blue}`,
    borderFocusPrimary: `1px solid ${$qaq_blue}`,
    textColorGhostHover: $qaq_blue,
    textColorGhostPressed: $qaq_blue,
    textColorGhostFocus: $qaq_blue,
    textColorGhostPrimary: $qaq_blue,
    textColorGhostHoverPrimary: $qaq_blue,
    textColorGhostPressedPrimary: $qaq_blue,
    textColorGhostFocusPrimary: $qaq_blue,
  }
}