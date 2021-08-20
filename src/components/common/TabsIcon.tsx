import { images } from 'assets/images'
import React from 'react'
import TabIcon from './TabIcon'

type Props = {
  name: string
  focused: boolean
}

const TabsIcon: React.FC<Props> = ({ name, focused }) => {
  const renderTab = () => {
    switch (name) {
      case 'Home':
        return (
          <TabIcon
            icon={focused ? images.ic_home_active : images.ic_home_inactive}
          />
        )
      case 'Chat':
        return (
          <TabIcon
            icon={focused ? images.ic_home_active : images.ic_home_inactive}
          />
        )
      case 'SocialNetwork':
        return (
          <TabIcon
            icon={focused ? images.ic_home_active : images.ic_home_inactive}
          />
        )
      case 'Profile':
        return (
          <TabIcon
            icon={focused ? images.ic_home_active : images.ic_home_inactive}
          />
        )
      default:
        return (
          <TabIcon
            icon={focused ? images.ic_home_active : images.ic_home_inactive}
          />
        )
    }
  }
  return renderTab()
}

export default TabsIcon
