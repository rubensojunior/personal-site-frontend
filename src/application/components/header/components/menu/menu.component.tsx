import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export function Menu() {
  const { asPath } = useRouter()

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Aprenda Comigo', path: '/aprenda-comigo' },
  ]

  return (
    <Flex
      alignItems="center"
      gap={['1.6rem', '1.6rem', '1.6rem', '4.6rem', '4.6rem', '4.6rem']}
    >
      {menuItems.map(menuItem => {
        const isSelected =
          (asPath.includes(menuItem.path) && menuItem.path !== '/') ||
          (menuItem.path === '/' && asPath === '/')
        return (
          <Link key={menuItem.label} href={menuItem.path}>
            <Text
              fontSize={[
                '1.4rem',
                '1.4rem',
                '1.4rem',
                '1.6rem',
                '1.6rem',
                '1.6rem',
              ]}
              lineHeight={1.2}
              fontWeight={500}
              color={isSelected ? 'red.500' : 'white'}
            >
              {menuItem.label}
            </Text>
          </Link>
        )
      })}
    </Flex>
  )
}
