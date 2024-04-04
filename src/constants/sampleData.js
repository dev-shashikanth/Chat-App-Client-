export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Annie",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Annie",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Besant",
    _id: "2",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John",
    _id: "3",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Annie",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachements: [],
    content: "Testing message from ram",
    _id: "asdfasfasdf",
    sender: {
      _id: "user._id",
      name: "ram",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachements: [
      {
        public_id: "asdasad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "asdfasfasdf 2",
    sender: {
      _id: "asdfasdf",
      name: "ramesh",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 30,
      groups: 10,
    },
  ],
  chats: [
    {
      name: "Example Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        {
          _id: "6",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          _id: "7",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Jodn Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Example Group 2",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        {
          _id: "10",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          _id: "11",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          _id: "12",
          avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      totalMembers: 3,
      totalMessages: 40,
      creator: {
        name: "Jodn Doe 2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachements: [],
      content: "Test message",
      _id: "asdfasdfa",
      sender: {
        _id: "user._id",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "John Doe",
      },
      chat: "chatId",
      createdAt: "1970-01-01T00:00:00.000Z",
    },
    {
      attachements: [
        {
          public_id: "asdfad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "Test message 2",
      _id: "asdfasdfaadsfasdf",
      sender: {
        _id: "sdfsdf",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "John Doe 2",
      },
      chat: "chatId",
      createdAt: "1970-01-01T00:00:00.000Z",
    },
  ],
};
