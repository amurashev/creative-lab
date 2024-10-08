export const components: Record<
  string,
  {
    name: string
    description: string
    isHidden?: boolean
  }
> = {
  'conversation-card': {
    name: 'Conversation Card',
    description:
      'Simple component to use in some messenger applications as chat/conversation card',
  },
  'chat-message': {
    name: 'Chat message',
    description: 'Text message component to use in some messenger applications',
  },
  'job-card': {
    name: 'Job Card',
    description:
      'Display a job information with some details like: location, salary, position level',
  },
  'article-card-v-1': {
    name: 'Article Card (Type 1)',
    description: 'Display short information about article for some blogs',
  },
  'article-card-v-2': {
    name: 'Article Card (Type 2)',
    description: 'Display short information about article for some blogs',
  },
}
