import { motion } from "framer-motion";



interface PathProps {
  openPath: string,
  closedPath: string,
  hide: boolean
}

const Path = ({ openPath, closedPath, hide, ...rest }: PathProps) => {
  return (
    <motion.path
      strokeWidth="1.5"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      variants={{
        open: {
          d: openPath,
          opacity: hide ? 0 : 1,
          pathLength: hide ? 0 : 1,
          transition: { duration: 0.3 }
        },
        closed: {
          d: closedPath,
          opacity: 1,
          pathLength: 1,
          transition: { duration: 0.3 }
        },
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
    initial="closed"
    animate={isOpen ? "open" : "closed"}>
    <svg width="30" height="30" viewBox="0 0 24 24">
      <Path openPath="M 5 19 L 19 5" closedPath="M 5 7 19 7" hide={false} />
      <Path openPath="M 5 12 19 12" closedPath="M 5 12 19 12" hide={true} />
      <Path openPath="M 5 5 L 19 19" closedPath="M 5 17 19 17" hide={false} />
    </svg>
  </motion.button>
    ;
};