/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'

import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    MailIcon,
    MenuAlt2Icon,
    UserGroupIcon,
    XIcon,
    CogIcon
  } from '@heroicons/react/outline'

const navigation = [
  {
    name: 'Dashboard',
    href: '/web/dashboard',
    icon: HomeIcon
  },
  {
    name: 'People',
    icon: UserGroupIcon,
    open: false,
    children: [
      { name: 'Member List', href: '/web/people/member' },
    ],
  },
  {
    name: 'Collaboration',
    icon: UserGroupIcon,
    open: false,
    children: [
      { name: 'Small Group', href: '/web/group/small_group' },
    ],
  },
  // Static elements only starts from this index.
  {
    name: 'Communication',
    icon: MailIcon,
    open: false,
    children: [
      { name: 'New Communication', href: '/web/communication_new' },
      { name: 'History', href: '/web/communication' },
    ],
  },
  {
    name: 'Event',
    icon: CalendarIcon,
    open: false,
    children: [
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Reports',
    icon: ChartBarIcon,
    open: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Settings',
    icon: CogIcon,
    open: false,
    children: [
      { name: 'Church Profile', href: '/web/settings' },
      { name: 'Roles & Permission', href: '/web/roles' },
      { name: 'Manage User', href: '/web/manage_user' },
      { name: 'Color Mode', href: '/web/color_mode' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function determineCurrentItem(itemIndex) {
  let item
  item = navigation[itemIndex]

  if (item.href) {
    return item.href == window.location.pathname
  } else {
    return false
  }
}

function itemIsOpened(itemIndex) {
  let item
  item = navigation[itemIndex]

  let open = false

  if (item.children) {
    item.children.map((subItem) => {
      if (open) {
        return
      }
      open = subItem.href ? subItem.href == window.location.pathname : false
    })
  }

  return open
}

function determineCurrentSubItem(itemIndex, subItemIndex) {
  let item
  item = navigation[itemIndex]
  let subItem
  subItem = item.children[subItemIndex]

  if (subItem.href) {
    return subItem.href == window.location.pathname
  } else {
    return false
  }
}

export default function Sidebar() {
  return (
    <div className="flex flex-col flex-grow pt-5 pb-4 bg-purple-600 dark:bg-gray-900 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        <img
          className="h-8 w-28 object-cover object-center"
          src="/img/static/erista-logo-landscape.png"
          alt="Erista Logo"
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1 bg-purple-600 dark:bg-gray-900" aria-label="Sidebar">
          {navigation.map((item, itemIndex) =>
            !item.children
              ? (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        determineCurrentItem(itemIndex)
                          ? 'bg-orange-500 text-gray-100'
                          : 'text-gray-100 hover:bg-orange-400',
                        'group w-full flex items-center pl-2 pr-0 py-2 text-base font-normal rounded-md'
                      )}
                    >
                      <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-100" aria-hidden="true" />
                      {item.name}
                    </a>
                  </div>
                )
              : (
                  <Disclosure as="div" key={item.name} className="space-y-1" defaultOpen={itemIsOpened(itemIndex)}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            determineCurrentItem(itemIndex)
                              ? 'bg-orange-500 text-gray-100'
                              : 'text-gray-100 hover:bg-orange-400',
                            'group w-full flex items-center justify-between pl-2 pr-0 py-2 text-left text-base font-normal rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                          )}
                        >
                            <div className="flex">
                                <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-100" aria-hidden="true" />
                                {item.name}
                            </div>
                            <svg
                                className={classNames(
                                open ? 'rotate-90' : 'text-gray-100',
                                'flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150'
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill="currentColor" />
                            </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="space-y-1">
                          {item.children.map((subItem, subItemIndex) => (
                            <Disclosure.Button
                              key={subItem.name}
                              as="a"
                              href={subItem.href}
                              className={
                                classNames(
                                  determineCurrentSubItem(itemIndex, subItemIndex)
                                    ? 'bg-orange-500 text-gray-100'
                                    : 'text-gray-100 hover:bg-orange-400',
                                  'group w-full flex items-center pl-10 pr-0 py-2 text-base font-normal text-gray-100 rounded-md hover:text-gray-100 hover:bg-orange-400'
                                )
                              }
                            >
                              {subItem.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
          )}
        </nav>
      </div>
    </div>
  )
}