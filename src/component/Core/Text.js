import styled from 'styled-components'
import fontsize from './FontSize'
import color from './Color'

export const Hello = styled.p`
  font-size: ${fontsize.hello};
  color: ${color.green};
  line-height:0px;
  text-align: right;
`
export const Title = styled.p`
  font-size: ${fontsize.title};
  color: ${color.green};
  line-height:${props => props.lineHeight || '0px'};
  text-align: ${props => props.textAlign || ''};
  `
export const Header = styled.p`
  font-size: ${fontsize.header};
  color: ${color.font};
  line-height:${props => props.lineHeight || '0px'};
  text-align: ${props => props.textAlign || ''};
  `
export const Subtitle = styled.p`
  font-size: ${fontsize.subtitle};
  color: ${color.font};
  line-height:${props => props.lineHeight || '0px'};
  text-align: ${props => props.textAlign || ''};
`