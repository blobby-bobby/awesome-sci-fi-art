import { FunctionComponent } from "react"
import { HiMiniArrowUpRight } from "react-icons/hi2";
import './styles.scss'

interface LinkProps {
    linkPath: string,
    linkTitle: string,
    onClick: () => void,
}

export const Link: FunctionComponent<LinkProps> = (props) => {
  return (
    <a href={props.linkPath} className='link' target="_blank" rel="noopener noreferrer">
    <p>{props.linkTitle}</p> <HiMiniArrowUpRight size={20} />
    <div className='underline'></div>
    </a>
  )
}