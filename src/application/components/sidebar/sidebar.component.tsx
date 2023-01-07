import { useSidebar } from '@/application/hooks'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { SidebarNav } from './components'
import { SidebarModel } from './models'

export function Sidebar({ menuItems = [], isHomePage = false }: SidebarModel) {
  const { isOpen, onClose } = useSidebar()

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p={'1.6rem'}>
            <DrawerCloseButton mt={'1rem'} size="lg" />
            <DrawerBody>
              <SidebarNav menuItems={menuItems} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  if (isHomePage) {
    return null
  }

  return (
    <Box as="aside" w={'256px'} mr={'3.2rem'} flexShrink={0}>
      <SidebarNav menuItems={menuItems} />
    </Box>
  )
}
