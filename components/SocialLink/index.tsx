import { FC, AnchorHTMLAttributes } from 'react'
import classnames from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const SocialLink: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <a
      rel="noreferrer"
      href="https://linkedin.com/in/jpalumickas"
      target="_blank"
      className={classnames([
        'text-gray-300 hover:text-gray-700 transition ease-in-out duration-500',
        className,
      ])}
      {...rest}
    >
      {children}
    </a>
  )
}
