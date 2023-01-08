type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const nav: Item[] = [
  {
    name: 'Spotify',
    items: [
      {
        name: 'Playlists',
        slug: 'playlists',
        description: 'All connected playlists',
      },
      {
        name: 'Accounts',
        slug: 'accounts',
        description: 'All connected Spotify Accounts',
      
        
      }
    ],
  },
  
  {
    name: 'Settings',
    items: [
      {
        name: 'Account Settings',
        slug: 'settings',
        description: 'Account settings',
        isDisabled: true,
      },
      {
        name: 'Cronjobs',
        slug: 'cronjobs',
        description: 'Registered Cronjobs',
        isDisabled: true,
      },
      {
        name: 'API Keys',
        slug: 'api-keys',
        description: 'Generated API keys',
        isDisabled: true,
      }
    ],
  },
  
];
