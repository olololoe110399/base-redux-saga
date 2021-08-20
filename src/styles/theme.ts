import normalizeText from './normalizeText'

export const baseFontSize = 14
export const baseSpacing = 16

export const colors = {
  purpleHeart: '#5F27CD',
  woodsmoke: '#09090B',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#888888',
  portage: '#9D96EE',
  tundora: '#444444',
  mercury: '#E5E5E5'
}

export const fonts = {
  header1: normalizeText(baseFontSize * 3),
  header2: normalizeText(baseFontSize * 2.5),
  header3: normalizeText(baseFontSize * 2),
  header4: normalizeText(baseFontSize * 1.75),
  header5: normalizeText(baseFontSize * 1.5),
  header6: normalizeText(baseFontSize * 1.25),
  medium: normalizeText(baseFontSize * 1.125),
  normal: normalizeText(baseFontSize),
  small: normalizeText(baseFontSize * 0.875),
  xsmall: normalizeText(baseFontSize * 0.75),
  xxsmall: normalizeText(baseFontSize * 0.5),
  bold: 600,
  bolder: 800
}

export const fontsFamily = {
  BoldItalic: 'SegoeUI-BoldItalic',
  Bold: 'SegoeUI-Bold',
  Italic: 'SegoeUI-Italic',
  LightItalic: 'SegoeUI-LightItalic',
  Light: 'SegoeUI-Light',
  Regular: 'SegoeUI',
  SemiBoldItalic: 'SegoeUI-SemiBoldItalic',
  SemiBold: 'SegoeUI-SemiBold'
}

export const spacings = {
  none: 0,
  full: '100%',
  xxsmall: normalizeText(baseSpacing * 0.25),
  xsmall: normalizeText(baseSpacing * 0.5),
  small: normalizeText(baseSpacing * 0.75),
  normal: normalizeText(baseSpacing),
  medium: normalizeText(baseSpacing * 1.5),
  large: normalizeText(baseSpacing * 2),
  xLarge: normalizeText(baseSpacing * 2.5),
  xxLarge: normalizeText(baseSpacing * 3),
  xxxLarge: normalizeText(baseSpacing * 3.5),
  xxxxLarge: normalizeText(baseSpacing * 4)
}

export const imagesStyle = {
  width: spacings.medium,
  height: spacings.medium
}

export const customTxt = (
  family?: string,
  size?: number,
  txtColor?: string
) => ({
  fontFamily: family || fontsFamily.Regular,
  fontSize: size ? normalizeText(size) : spacings.normal,
  color: txtColor || colors.woodsmoke
})
