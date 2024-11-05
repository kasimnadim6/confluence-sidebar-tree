const LINK = 'https://youtube.com/devtoolstech/videos';

const DATA = [
  {
    id: 1001,
    label: 'Knowledge Base Articles',
    link: LINK,
    children: [
      {
        id: 1,
        label: 'Academic Technologies',
        link: LINK,
        children: [
          {
            id: 2,
            label: 'Lightboard',
            link: LINK,
          },
          {
            id: 3,
            label: 'OWL 360 Camera Tutorial',
            link: LINK,
          },
          {
            id: 4,
            label: 'ScreenPal',
            link: LINK,
          },
        ],
      },
      {
        id: 5,
        label: 'Apple',
        link: LINK,
        children: [
          {
            id: 6,
            label: 'iOS Articles',
            link: LINK,
            children: [
              {
                id: 23,
                label: 'VPN with iOS',
                link: LINK,
              },
              {
                id: 24,
                label: 'Upgrade iOS',
                link: LINK,
              },
            ],
          },
          {
            id: 12,
            label: 'Mac Articles',
            link: LINK,
            children: [
              {
                id: 29,
                label: 'Fix macOS',
                link: LINK,
              },
              {
                id: 41,
                label: 'Upgrade macOS',
                link: LINK,
              },
            ],
          },
          {
            id: 69,
            label: 'Purchase Apps',
            link: LINK,
          },
          {
            id: 67,
            label: 'Request License',
            link: LINK,
          },
        ],
      },
    ],
  },
  {
    id: 201,
    label: 'Devtools Tech',
    link: LINK,
  },
];

export default DATA;
