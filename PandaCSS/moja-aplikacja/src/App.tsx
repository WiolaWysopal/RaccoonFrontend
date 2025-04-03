import { css, cva, cx } from './styled-system/css'
 
const someButton = cva({
  base: { padding: 4 },
  variants: {
    variant: {
      primary: {
        bg: { base: 'colorPalette.500', _dark: 'colorPalette.200' },
        color: { base: 'white', _dark: 'gray.900' }
      }
    }
  },
  defaultVariants: { variant: 'primary' }
})
 
export const App = () => {
  return (
    <>
      <div className="light">
        <button className={cx(css({ colorPalette: 'blue' }), someButton())}>
          Click me
        </button>
      </div>

      <div className="dark">
        <button className={cx(css({ colorPalette: 'blue' }), someButton())}>
          Click me
        </button>
      </div>
      
    </>
  )
}