export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

export const creators: Creator[] = [
  {
    name: '只梨',
    avatar: 'https://avatify.online/api/svg/eyJmYWNlIjo0LCJub3NlIjowLCJtb3V0aCI6MSwiZXllcyI6MTAsImV5ZWJyb3dzIjo1LCJnbGFzc2VzIjoyLCJoYWlyIjo1LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=',
    username: 'Peerk',
    title: '主页作者',
    desc: '一个平平无奇的普通人',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/SUPERMURLOC019' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/' },
    ],
    nameAliases: ['Supermurloc', 'Peerk', '只梨'],
    emailAliases: ['1572968626@qq.com'],
  },

].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
