const database = [
  {
    _id: {
      $oid: '5b626b52fb6fc072a40e31fa',
    },
    activity: 'Learn Express.js',
    accessibility: 0.25,
    type: 'education',
    participants: 1,
    price: 0.1,
    link: 'https://expressjs.com/',
    key: '3943506',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b626b5bfb6fc072a40e31fc',
    },
    activity: 'Learn to greet someone in a new language',
    accessibility: 0.2,
    type: 'education',
    participants: 1,
    price: 0.1,
    key: '4704256',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b626b66fb6fc072a40e3205',
    },
    activity: 'Learn how to play a new sport',
    accessibility: 0.2,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '5808228',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b626b6ffb6fc072a40e3207',
    },
    activity: "Text a friend you haven't talked to in a long time",
    accessibility: 0.2,
    type: 'social',
    participants: 2,
    price: 0.05,
    link: '',
    key: '6081071',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b626b7afb6fc072a40e320a',
    },
    activity: 'Learn a new programming language',
    accessibility: 0.25,
    type: 'education',
    participants: 1,
    price: 0.1,
    link: '',
    key: '5881028',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b626b87fb6fc072a40e320b',
    },
    activity: 'Learn how to fold a paper crane',
    accessibility: 0.05,
    type: 'education',
    participants: 1,
    price: 0.1,
    key: '3136036',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6313ade7179a073344cad6',
    },
    activity: 'Find a DIY to do',
    accessibility: 0.3,
    type: 'diy',
    participants: 1,
    price: 0.4,
    link: '',
    key: '4981819',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63140be7179a073344cb4d',
    },
    activity: 'Learn about the Golden Ratio',
    accessibility: 0.2,
    type: 'education',
    participants: 1,
    price: 0.1,
    link: 'https://en.wikipedia.org/wiki/Golden_ratio',
    key: '2095681',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631454e7179a073344cbc5',
    },
    activity: 'Volunteer at a local animal shelter',
    accessibility: 0.5,
    type: 'charity',
    participants: 1,
    price: 0.1,
    link: '',
    key: '1382389',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63147be7179a073344cc0c',
    },
    activity: 'Play a game of Monopoly',
    accessibility: 0.3,
    type: 'social',
    participants: 4,
    price: 0.2,
    link: '',
    key: '1408058',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6314f8e7179a073344cc33',
    },
    activity: 'Bake pastries for you and your neighbor',
    accessibility: 0.3,
    type: 'cooking',
    participants: 1,
    price: 0.4,
    link: '',
    key: '8125168',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63152ee7179a073344cc6e',
    },
    activity: "Bake something you've never tried before",
    accessibility: 0.3,
    type: 'cooking',
    participants: 1,
    price: 0.4,
    link: '',
    key: '5665663',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631cdee7179a073344d2b6',
    },
    activity: 'Take your dog on a walk',
    accessibility: 0.2,
    type: 'relaxation',
    participants: 1,
    price: 0.0,
    link: '',
    key: '9318514',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631d01e7179a073344d2c7',
    },
    activity: 'Meditate for five minutes',
    accessibility: 0.05,
    type: 'relaxation',
    participants: 1,
    price: 0.0,
    link: '',
    key: '1516976 ',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631d34e7179a073344d2e8',
    },
    activity: "Start a book you've never gotten around to reading",
    accessibility: 0.1,
    type: 'relaxation',
    participants: 1,
    price: 0.1,
    link: '',
    key: '7114122',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631da3e7179a073344d315',
    },
    activity: 'Take a caffeine nap',
    accessibility: 0.08,
    type: 'relaxation',
    participants: 1,
    price: 0.1,
    link: '',
    key: '5092652',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631dbee7179a073344d322',
    },
    activity: 'Take a bubble bath',
    accessibility: 0.1,
    type: 'relaxation',
    participants: 1,
    price: 0.15,
    link: '',
    key: '2581372',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631ddee7179a073344d32b',
    },
    activity: 'Go to a nail salon',
    accessibility: 0.5,
    type: 'relaxation',
    participants: 1,
    price: 0.4,
    link: '',
    key: '7526324',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631e48e7179a073344d381',
    },
    activity: 'Listen to your favorite album',
    accessibility: 0.2,
    type: 'music',
    participants: 1,
    price: 0.08,
    link: '',
    key: '3136729',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631e7be7179a073344d43a',
    },
    activity: 'Learn to play a new instrument',
    accessibility: 0.6,
    type: 'music',
    participants: 1,
    price: 0.55,
    link: '',
    key: '3192099',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631ed5e7179a073344d548',
    },
    activity: 'Teach your dog a new trick',
    accessibility: 0.15,
    type: 'relaxation',
    participants: 1,
    price: 0.05,
    link: '',
    key: '1668223',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631f20e7179a073344d655',
    },
    activity: 'Make a to-do list for your week',
    accessibility: 0.05,
    type: 'relaxation',
    participants: 1,
    price: 0.0,
    link: '',
    key: '1668223',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631f5de7179a073344d704',
    },
    activity: 'Go swimming with a friend',
    accessibility: 0.1,
    type: 'social',
    participants: 2,
    price: 0.1,
    link: '',
    key: '1505028',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631face7179a073344d7e7',
    },
    activity: 'Go on a long drive with no music',
    accessibility: 0.2,
    type: 'relaxation',
    participants: 1,
    price: 0.1,
    link: '',
    key: '4290333',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b631fdee7179a073344d847',
    },
    activity: "Watch a movie you'd never usually watch",
    accessibility: 0.15,
    type: 'relaxation',
    participants: 1,
    price: 0.15,
    link: '',
    key: '9212950',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632022e7179a073344d881',
    },
    activity: 'Go see a movie in theaters with a few friends',
    accessibility: 0.3,
    type: 'social',
    participants: 4,
    price: 0.2,
    link: '',
    key: '5262759',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632086e7179a073344d8c3',
    },
    activity: 'Draw and color a Mandala',
    accessibility: 0.1,
    type: 'relaxation',
    participants: 1,
    price: 0.05,
    link: '',
    key: '4614092',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6320c7e7179a073344d918',
    },
    activity: 'Rearrange and organize your room',
    accessibility: 0.15,
    type: 'relaxation',
    participants: 1,
    price: 0.0,
    link: '',
    key: '6197243',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632128e7179a073344d9e5',
    },
    activity: 'Pot some plants and put them around your house',
    accessibility: 0.3,
    type: 'relaxation',
    participants: 1,
    price: 0.4,
    link: '',
    key: '6613330',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63222ae7179a073344daeb',
    },
    activity: "Plan a vacation you've always wanted to take",
    accessibility: 0.05,
    type: 'relaxation',
    participants: 1,
    price: 0.0,
    link: '',
    key: '7265395',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63226ce7179a073344db18',
    },
    activity: 'Take your cat on a walk',
    accessibility: 0.1,
    type: 'relaxation',
    participants: 1,
    price: 0.02,
    link: '',
    key: '5940465',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6322e1e7179a073344db91',
    },
    activity: 'Have a football scrimmage with some friends',
    accessibility: 0.2,
    type: 'recreational',
    participants: 8,
    price: 0,
    link: '',
    key: '1638604',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632384e7179a073344dbdd',
    },
    activity: 'Fill out a basketball bracket',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0,
    link: '',
    key: '7806284',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6323f3e7179a073344dc30',
    },
    activity: 'Play a game of tennis with a friend',
    accessibility: 0.4,
    type: 'recreational',
    participants: 2,
    price: 0.1,
    link: '',
    key: '1093640',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632454e7179a073344dc8e',
    },
    activity: 'Catch up with a friend over a lunch date',
    accessibility: 0.15,
    type: 'social',
    participants: 2,
    price: 0.2,
    link: '',
    key: '5590133',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632490e7179a073344dccd',
    },
    activity: 'Learn how to iceskate or rollerskate',
    accessibility: 0.25,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '5947957',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632505e7179a073344dd26',
    },
    activity: 'Go to a concert with local artists with some friends',
    accessibility: 0.3,
    type: 'social',
    participants: 3,
    price: 0.4,
    link: '',
    key: '2211716',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632538e7179a073344dd2d',
    },
    activity: 'Explore the nightlife of your city',
    accessibility: 0.32,
    type: 'social',
    participants: 1,
    price: 0.1,
    link: '',
    key: '2237769',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63259ce7179a073344dd4f',
    },
    activity: "Fix something that's broken in your house",
    accessibility: 0.3,
    type: 'diy',
    participants: 1,
    price: 0.1,
    link: '',
    key: '6925988',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6325d4e7179a073344dd91',
    },
    activity: 'Wash your car',
    accessibility: 0.15,
    type: 'busywork',
    participants: 1,
    price: 0.05,
    link: '',
    key: '1017771',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63260be7179a073344dda6',
    },
    activity: 'Find a charity and donate to it',
    accessibility: 0.1,
    type: 'charity',
    participants: 1,
    price: 0.4,
    link: '',
    key: '1488053',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63269ee7179a073344de25',
    },
    activity: 'Hold a yard sale',
    accessibility: 0.1,
    type: 'social',
    participants: 1,
    price: 0.0,
    link: '',
    key: '1432113',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6326dae7179a073344de35',
    },
    activity: 'Donate blood at a local blood center',
    accessibility: 0.35,
    type: 'charity',
    participants: 1,
    price: 0.0,
    link: 'https://www.redcross.org/give-blood',
    key: '6509779',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632704e7179a073344de44',
    },
    activity: 'Volunteer and help out at a senior center',
    accessibility: 0.1,
    type: 'charity',
    participants: 1,
    price: 0.0,
    link: '',
    key: '3920096',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63277ae7179a073344de7f',
    },
    activity: 'Shop at support your local farmers market',
    accessibility: 0.1,
    type: 'relaxation',
    participants: 1,
    price: 0.2,
    link: '',
    key: '8979931',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632817e7179a073344dee6',
    },
    activity: 'Learn a new recipe',
    accessibility: 0.05,
    type: 'cooking',
    participants: 1,
    price: 0.0,
    link: '',
    key: '6553978',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6329fbe7179a073344e071',
    },
    activity: 'Create a cookbook with your favorite recipes',
    accessibility: 0.05,
    type: 'cooking',
    participants: 1,
    price: 0.0,
    link: '',
    key: '1947449',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632a8ee7179a073344e0a0',
    },
    activity: 'Create a compost pile',
    accessibility: 0.15,
    type: 'diy',
    participants: 1,
    price: 0.0,
    link: '',
    key: '8631548',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632ae4e7179a073344e0b8',
    },
    activity: 'Volunteer at your local food shelter',
    accessibility: 0.1,
    type: 'charity',
    participants: 1,
    price: 0.0,
    link: '',
    key: '2055368',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b632b99e7179a073344e11c',
    },
    activity: 'Create or update your resume',
    accessibility: 0.1,
    type: 'busywork',
    participants: 1,
    price: 0.0,
    link: '',
    key: '9364041',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a0d3e7179a0733453ee4',
    },
    activity: 'Paint the first thing you see',
    accessibility: 0.2,
    type: 'recreational',
    participants: 1,
    price: 0.25,
    link: '',
    key: '1162360',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a117e7179a0733453eeb',
    },
    activity: "Start a blog for something you're passionate about",
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.05,
    link: '',
    key: '8364626',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a14fe7179a0733453ef0',
    },
    activity: 'Start a garden',
    accessibility: 0.35,
    type: 'recreational',
    participants: 1,
    price: 0.3,
    link: '',
    key: '1934228',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a22ee7179a0733453fce',
    },
    activity: "Clean out your closet and donate the clothes you've outgrown",
    accessibility: 0.1,
    type: 'charity',
    participants: 1,
    price: 0.0,
    link: '',
    key: '9026787',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a30ce7179a073345406c',
    },
    activity: 'Catch up on world news',
    accessibility: 0.07,
    type: 'recreational',
    participants: 1,
    price: 0.05,
    link: '',
    key: '6596257',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a376e7179a07334540c3',
    },
    activity: 'Create a personal website',
    accessibility: 0.12,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '3141417',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a4b7e7179a0733454128',
    },
    activity: 'Listen to a new podcast',
    accessibility: 0.12,
    type: 'relaxation',
    participants: 1,
    price: 0.05,
    link: '',
    key: '4124860',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a4f9e7179a073345413c',
    },
    activity: 'Have a paper airplane contest with some friends',
    accessibility: 0.05,
    type: 'social',
    participants: 4,
    price: 0.02,
    link: '',
    key: '8557562',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a579e7179a073345414a',
    },
    activity: 'Learn calligraphy',
    accessibility: 0.1,
    type: 'education',
    participants: 1,
    price: 0.1,
    link: '',
    key: '4565537',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a5b3e7179a0733454152',
    },
    activity: 'Start a collection',
    accessibility: 0.5,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '1718657',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a621e7179a0733454170',
    },
    activity: 'Go to a local thrift shop',
    accessibility: 0.2,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '8503795',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a64ee7179a073345423f',
    },
    activity: 'Make a couch fort',
    accessibility: 0.08,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '2352669',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a686e7179a073345427f',
    },
    activity: 'Pick up litter around your favorite park',
    accessibility: 0.05,
    type: 'charity',
    participants: 1,
    price: 0.0,
    link: '',
    key: '4894697',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a718e7179a07334542b2',
    },
    activity: 'Buy a new house decoration',
    accessibility: 0.3,
    type: 'recreational',
    participants: 1,
    price: 0.4,
    link: '',
    key: '3456114',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a7efe7179a073345432f',
    },
    activity: 'Write a thank you letter to an influential person in your life',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '4101229',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a80de7179a0733454340',
    },
    activity: 'Clean out your car',
    accessibility: 0.08,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '2896176',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63a9ece7179a07334543d7',
    },
    activity: 'Write a short story',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '6301585',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b297e7179a07334545f6',
    },
    activity: 'Do something nice for someone you care about',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '8321894',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b2c5e7179a0733454602',
    },
    activity: 'Think of a new business idea',
    accessibility: 0.05,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '6808057',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b31de7179a0733454612',
    },
    activity: 'Clean out your garage',
    accessibility: 0.1,
    type: 'busywork',
    participants: 1,
    price: 0.0,
    link: '',
    key: '7023703',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b40ae7179a073345462d',
    },
    activity: 'Learn to sew on a button',
    accessibility: 0.1,
    type: 'education',
    participants: 1,
    price: 0.05,
    link: '',
    key: '8731971',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b477e7179a0733454676',
    },
    activity: 'Learn how to french braid hair',
    accessibility: 0.1,
    type: 'education',
    participants: 1,
    price: 0.0,
    link: '',
    key: '8926492',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b592e7179a07334546f7',
    },
    activity: 'Learn how to whistle with your fingers',
    accessibility: 0.0,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '2790297',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b5ebe7179a0733454707',
    },
    activity: 'Learn to write with your nondominant hand',
    accessibility: 0.02,
    type: 'busywork',
    participants: 1,
    price: 0.0,
    link: '',
    key: '1645485',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b624e7179a073345470c',
    },
    activity: 'Make bread from scratch',
    accessibility: 0.2,
    type: 'cooking',
    participants: 1,
    price: 0.2,
    link: '',
    key: '4809815',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b653e7179a0733454711',
    },
    activity: 'Make a budget',
    accessibility: 0.1,
    type: 'busywork',
    participants: 1,
    price: 0.0,
    link: '',
    key: '4379552',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b63b68ae7179a0733454714',
    },
    activity: 'Learn how to write in shorthand',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '6778219',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b64fa62e7179a4c6138a81b',
    },
    activity: 'Make a simple musical instrument',
    accessibility: 0.25,
    type: 'recreational',
    participants: 1,
    price: 0.4,
    link: '',
    key: '7091374',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b64fac4e7179a4c6138a82d',
    },
    activity: 'Go to the gym',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.2,
    link: '',
    key: '4387026',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b64fb95e7179a4c6138a84e',
    },
    activity: "Try a food you don't like",
    accessibility: 0.05,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '6693574',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b64fc54e7179a4c6138a855',
    },
    activity: 'Conquer one of your fears',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '8344539',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b66029fe7179a4c6138f1a4',
    },
    activity: 'Go to a concert with some friends',
    accessibility: 0.4,
    type: 'social',
    participants: 4,
    price: 0.6,
    link: '',
    key: '4558850',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6602bfe7179a4c6138f1a6',
    },
    activity: 'Go to the library and find an interesting book',
    accessibility: 0.2,
    type: 'relaxation',
    participants: 1,
    price: 0.05,
    link: '',
    key: '8253550',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660300e7179a4c6138f1ad',
    },
    activity: 'Go to an escape room',
    accessibility: 0.3,
    type: 'social',
    participants: 4,
    price: 0.5,
    link: '',
    key: '5585829',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660341e7179a4c6138f1b9',
    },
    activity: 'Go to a karaoke bar with some friends',
    accessibility: 0.35,
    type: 'social',
    participants: 4,
    price: 0.5,
    link: '',
    key: '9072906',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b66036fe7179a4c6138f1bc',
    },
    activity: 'Repaint a room in your house',
    accessibility: 0.4,
    type: 'recreational',
    participants: 1,
    price: 0.3,
    link: '',
    key: '4877086',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b66065ce7179a4c6138f21d',
    },
    activity: 'Pull a harmless prank on one of your friends',
    accessibility: 0.2,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '1288934',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6606a1e7179a4c6138f21e',
    },
    activity: 'Take a spontaneous road trip with some friends',
    accessibility: 0.3,
    type: 'social',
    participants: 4,
    price: 0.2,
    link: '',
    key: '2085321',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6606dce7179a4c6138f224',
    },
    activity: 'Go stargazing',
    accessibility: 0.1,
    type: 'relaxation',
    participants: 1,
    price: 0.0,
    link: '',
    key: '8832605',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660708e7179a4c6138f22b',
    },
    activity: 'Invite some friends over for a game night',
    accessibility: 0.2,
    type: 'social',
    participants: 4,
    price: 0.0,
    link: '',
    key: '6613428',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660732e7179a4c6138f22f',
    },
    activity: 'Make homemade ice cream',
    accessibility: 0.2,
    type: 'cooking',
    participants: 1,
    price: 0.2,
    link: '',
    key: '3818400',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660782e7179a4c6138f236',
    },
    activity: 'Start a daily journal',
    accessibility: 0.0,
    type: 'relaxation',
    participants: 1,
    price: 0.0,
    link: '',
    key: '8779876',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b6607e6e7179a4c6138f246',
    },
    activity: 'Go to a music festival with some friends',
    accessibility: 0.2,
    type: 'recreational',
    participants: 4,
    price: 0.4,
    link: '',
    key: '6482790',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660822e7179a4c6138f24d',
    },
    activity: 'Make a bucket list',
    accessibility: 0.0,
    type: 'busywork',
    participants: 1,
    price: 0.0,
    link: '',
    key: '2735499',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660867e7179a4c6138f262',
    },
    activity: 'Binge watch a trending series',
    accessibility: 0.2,
    type: 'recreational',
    participants: 1,
    price: 0.2,
    link: '',
    key: '5881647',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b66096fe7179a4c6138f29c',
    },
    activity: 'Learn how to make a website',
    accessibility: 0.3,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '9924423',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660adae7179a4c6138f2cd',
    },
    activity: 'Create and follow a savings plan',
    accessibility: 0.2,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '9366464',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660b26e7179a4c6138f2d8',
    },
    activity: 'Watch a classic movie',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.1,
    link: '',
    key: '8081693',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660b69e7179a4c6138f2e8',
    },
    activity: 'Plan a trip to another country',
    accessibility: 0.0,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '5554727',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660b95e7179a4c6138f2f8',
    },
    activity: 'Learn how the internet works',
    accessibility: 0.1,
    type: 'education',
    participants: 1,
    price: 0.0,
    link: '',
    key: '9414706',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b660cfae7179a4c6138f369',
    },
    activity: 'Take a hike at a local park',
    accessibility: 0.1,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '8724324',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b661a03e7179a4c6138f57b',
    },
    activity: 'Make tie dye shirts',
    accessibility: 0.2,
    type: 'diy',
    participants: 1,
    price: 0.2,
    link: '',
    key: '8092359',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b661a44e7179a4c6138f58d',
    },
    activity: 'Make a scrapbook with pictures of your favorite memories',
    accessibility: 0.1,
    type: 'diy',
    participants: 1,
    price: 0.1,
    link: '',
    key: '5554174',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b661a6de7179a4c6138f591',
    },
    activity: 'Have a picnic with some friends',
    accessibility: 0.1,
    type: 'recreational',
    participants: 3,
    price: 0.1,
    link: '',
    key: '6813070',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b661a95e7179a4c6138f5d0',
    },
    activity: 'Have a bonfire with your close friends',
    accessibility: 0.1,
    type: 'recreational',
    participants: 4,
    price: 0.1,
    link: '',
    key: '8442249',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b7079b5e7179a7016f400e2',
    },
    activity: 'Memorize the fifty states and their capitals',
    accessibility: 0.0,
    type: 'busywork',
    participants: 1,
    price: 0.0,
    link: '',
    key: '4179309',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b78d843e7179a69ea612f01',
    },
    activity: 'Take a class at your local community center that interests you',
    accessibility: 0.15,
    type: 'recreational',
    participants: 1,
    price: 0.0,
    link: '',
    key: '8750692',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b79adc0e7179a69ea614df9',
    },
    activity: "Resolve a problem you've been putting off",
    accessibility: 0.0,
    type: 'busywork',
    participants: 1,
    price: 0.0,
    link: '',
    key: '9999999',
    enabled: true,
  },
  {
    _id: {
      $oid: '5b79adede7179a69ea614e00',
    },
    activity: 'Make a new friend',
    accessibility: 0.0,
    type: 'social',
    participants: 1,
    price: 0.0,
    link: '',
    key: '1000000',
    enabled: true,
  }];
