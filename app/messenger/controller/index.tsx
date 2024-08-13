'use client'

import { useEffect, useReducer } from 'react'
import classNames from 'classnames'

import defaultState from './state'
import reducer from './reducer'

import Chat from '../components/chat'
import UserDetails from '../components/userDetails'
import SideBar from '../components/sidebar'
import EmptyChat from '../components/emptyChat'

function Messenger() {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const { conversations, selectedConversationId, ui } = state
  const { hasDetailsBlock, mobileScreen } = ui

  console.warn('Messenger', state)

  const selectedConversation = selectedConversationId
    ? conversations.find((item) => item.id === selectedConversationId)
    : undefined

  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dispatch({ type: 'setActiveConversation', id: undefined })
        dispatch({ type: 'changeMobileScreen', screen: 'list' })
      }
    })
  }, [])

  return (
    <div className="w-full h-[calc(100vh-60px)] grid grid-cols-12">
      <div
        className={classNames(
          'bg-background h-full col-span-12 border-0 border-r-[1px] border-border',
          'md:col-span-3',
          {
            hidden: mobileScreen !== 'list',
            'md:block': true,
          }
        )}
      >
        <SideBar
          conversations={conversations}
          onConversationClick={(id) => {
            dispatch({ type: 'setActiveConversation', id })
            dispatch({ type: 'changeMobileScreen', screen: 'chat' })
          }}
        />
      </div>
      <div
        className={classNames('bg-background h-full col-span-12', {
          'md:col-span-6': hasDetailsBlock,
          'md:col-span-9': !hasDetailsBlock,

          hidden: mobileScreen !== 'chat',
          'md:block': true,
        })}
      >
        {selectedConversation ? (
          <Chat
            firstName={selectedConversation.user.firstName}
            lastName={selectedConversation.user.lastName}
            avatarUrl={selectedConversation.user.avatarUrl}
            onShowDetails={() => dispatch({ type: 'toggleDetailsBlock' })}
          />
        ) : (
          <EmptyChat />
        )}
      </div>

      {hasDetailsBlock && (
        <div
          className={classNames(
            'bg-background border-0 border-l-[1px] border-border h-full col-span-12',
            'md:col-span-3',
            {
              hidden: mobileScreen !== 'details',
              'md:block': true,
            }
          )}
        >
          {selectedConversation && (
            <UserDetails
              firstName={selectedConversation.user.firstName}
              lastName={selectedConversation.user.lastName}
              avatarUrl={selectedConversation.user.avatarUrl}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Messenger
