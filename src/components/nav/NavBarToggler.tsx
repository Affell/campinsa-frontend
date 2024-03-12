import { motion } from "framer-motion";



interface PathProps {
  openPath: string,
  closedPath: string,
}

const Path = ({ openPath, closedPath, ...rest }: PathProps) => {
  return (
    <motion.path
      strokeWidth="1.5"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      variants={{
        open: { d: openPath, transition: { duration: 0.3 } },
        closed: { d: closedPath, transition: { duration: 0.3 } },
      }}
      {...rest}
    ></motion.path>
  );
};

interface NavBarTooglerProps {
  toggle: () => void
  isOpen: boolean
}
export default function NavBarToogler({ toggle, isOpen }: NavBarTooglerProps) {
  return <motion.button onClick={toggle}
    aria-controls="basic-navbar-nav"
    type="button"
    aria-label="Toggle navigation"
    className={"navbar-toggler " + (!isOpen ? "collapsed" : "")}
    animate={isOpen ? "open" : "closed"}>
    <svg width="30" height="30" viewBox="0 0 24 24" stroke-width="0.24000000000000005">
      <Path openPath="M 19 5 L 5 19" closedPath="M 5 7 19 7" />
      <Path openPath="" closedPath="M 5 12 19 12" />
      <Path openPath="M 5 5 L 19 19" closedPath="M 5 17 19 17" />
    </svg>
  </motion.button>
    ;
};