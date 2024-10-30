import { Copy, type CopyProps } from './Copy'

export const Date = (props: CopyProps) => {
  return (
    <Copy
      {...props}
      fontStyle="$XXS"
      css={{
        opacity: 0.6,
        marginTop: '-10px',
        marginBottom: '$20',

        '@tabletUp': {
          marginTop: '-20px',
          marginBottom: '$30',
        },

        ...props.css,
      }}
    />
  )
}
