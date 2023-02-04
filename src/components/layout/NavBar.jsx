import {Box, Button, Flex, NavLink} from "theme-ui";
import Link from "next/link";

export const NavBar = () => {
  return (
    <Flex as="nav" sx={{justifyContent: 'space-between', p: 3}}>
      <Flex sx={{ alignItems: 'center' }}>
        <div>
          <NavLink sx={{ p: '2', display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '2'}}>
            Hold The Grip
          </NavLink>
        </div>
        <Link href="/routes">
          Routes
        </Link>
      </Flex>
      <Box sx={{ display: 'flex', placeItems: 'center' }}>
        <Button py={1}>Get Started</Button>
      </Box>
    </Flex>
  )
}