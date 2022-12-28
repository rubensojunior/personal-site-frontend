import { Box, Link, Stack, Text } from '@chakra-ui/react'
import { SidebarNavModel } from './models'

export function SidebarNav({ menuItems }: SidebarNavModel) {
  return (
    <Stack spacing={'3.2rem'} align="flex-start">
      {menuItems.map(menuItem => (
        <Box key={menuItem.slug}>
          <Text fontWeight="bold" color="red.500" fontSize={'1.2rem'}>
            {menuItem.name.toUpperCase()}
          </Text>
          <Stack spacing={'0.8rem'} mt={'1.6rem'} align="stretch">
            {menuItem.posts.map(post => (
              <Link
                key={post.topic}
                href={`/aprenda-comigo/${post.slug}`}
                display="flex"
                alignItems="center"
              >
                <Text fontWeight="medium" fontSize={'1.4rem'}>
                  {post.topic}
                </Text>
              </Link>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  )
}
