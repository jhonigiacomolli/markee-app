import { RefObject } from 'react'
import * as $ from './title-styles'

type TitleProps = {
  inputRef: RefObject<HTMLInputElement>
}
function Title ({ inputRef }: TitleProps) {
  return (
    <$.TitleWrapper>
      <$.TitleIcon />
      <$.Input ref={inputRef} value='Sem título' />
    </$.TitleWrapper>
  )
}

export { Title }
