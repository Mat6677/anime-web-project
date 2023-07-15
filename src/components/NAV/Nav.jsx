import { NavDesk } from "./NavDesk"
import { NavMobile } from "./NavMobile"

export const Nav = ({nav}) => {
  if (nav) {
    return <NavDesk></NavDesk>
  } else{
    return <NavMobile></NavMobile>
  }
}
