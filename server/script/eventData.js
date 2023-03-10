const {
  models: { OpenMic },
} = require("../db");

const openMicSeed = async () => {
  await OpenMic.create({
    name: "Pillow Fight",
    description: "Weekly Monday 6pm bucket mic",
    venue: "Pine Box Rock Shop",
    date: "2023-03-13",
    time: "18:00",
    weekday: "Monday",
    signup: "Bucket",
    social: "https://www.instagram.com/pillowfightmic/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "U Host? Comedy",
    description: "R U Looking 4 Laffs?",
    venue: "The Rosemont",
    date: "2023-03-15",
    time: "19:00",
    weekday: "Wednesday",
    price: "supporting the venue through a drink purchase",
    signup:
      "Google form: https://docs.google.com/forms/d/e/1FAIpQLSdNKO956Z7mxSXzesepNT7XbR7th1YfHenh3mvKLY8usDmRiA/viewform",
    setTime: 4,
    social: "https://www.instagram.com/uhostcomedy/",
    recurring: "every 1st & 3rd Wednesday",
    categories: "LGBTQ+",
  });
  await OpenMic.create({
    name: "Sparkle Motion",
    description:
      "a covid-safe, supportive women+queer+allies mic + free well-shot",
    venue: "The Hop Shop",
    date: "2023-03-13",
    time: "19:00",
    weekday: "Monday",
    signup:
      "Google form: https://docs.google.com/forms/d/e/1FAIpQLSeVXtgDgT7uFRQZJ4VUOoXWKDMRNT04fwwE6VXyAfNDsKfZbA/viewform or walk in",
    setTime: 4,
    social: "https://www.instagram.com/sparklemotionmic/",
    recurring: "weekly",
    categories: "LGBTQ+, Women, Allies",
  });
  await OpenMic.create({
    name: "Efficiency",
    description: "9-10pm every single goddamn Monday at Easy Lover",
    venue: "Easy Lover",
    date: "2023-03-13",
    time: "21:00",
    weekday: "Monday",
    social: "https://www.instagram.com/p/CpdBEgkrCXL/?hl=en",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Tammany Hall",
    description: "a gosh dang open mic in Park Slope",
    venue: "Halyards",
    date: "2023-03-14",
    time: "18:00",
    weekday: "Tuesday",
    signup: "Bucket",
    social: "https://www.instagram.com/tammanyhallmic/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "House of Gacci",
    description: "hosted by Indigo Asim",
    venue: "Easy Lover",
    date: "2023-03-14",
    time: "19:00",
    weekday: "Tuesday",
    signup: "Bucket",
    recurring: "weekly",
    categories: "LGBTQ+",
  });
  await OpenMic.create({
    name: "Is this Gay?",
    description: "A Mic for queer people and women",
    venue: "Mood Ring",
    date: "2023-03-14",
    time: "19:00",
    weekday: "Tuesday",
    recurring: "weekly",
    signup: "Bucket",
    social: "https://www.instagram.com/isthisgaymic/",
    categories: "LGBTQ+, Women",
  });
  await OpenMic.create({
    name: "Friend Island",
    description: "weekly open mic",
    venue: "Fiction Bar/Cafe",
    date: "2023-03-14",
    time: "19:00",
    weekday: "Tuesday",
    price: "1 Drink Minimum",
    signup: "Google form",
    social: "https://www.instagram.com/friendislanduk/?hl=en",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Tits to the Glass",
    description: "Bi weekly variety show",
    venue: "The Skinny Bar",
    date: "2023-03-21",
    time: "19:30",
    weekday: "Tuesday",
    price: "$2 signup",
    signup: "Instagram DM",
    social: "https://www.instagram.com/friendislanduk/?hl=en",
    recurring: "biweekly",
  });
  await OpenMic.create({
    name: "Tits to the Glass",
    description: "Bi weekly variety show",
    venue: "The Skinny Bar",
    date: "2023-03-21",
    time: "19:30",
    weekday: "Tuesday",
    price: "$2 signup",
    signup: "Instagram DM",
    social: "https://www.instagram.com/friendislanduk/?hl=en",
    recurring: "biweekly",
  });
  await OpenMic.create({
    name: "A MIC NAMED BILLY!",
    description:
      "A WEEKLY COMEDY OPEN MIC HOSTED BY THE BAD (TRANS) B*YS OF COMEDY REID POPE, CLARA OLSHANSKY AND GARA!",
    venue: "Branded Saloon",
    date: "2023-03-19",
    time: "18:00",
    weekday: "Sunday",
    price: "2 Drink Minimum",
    signup: "Bucket",
    setTime: 4,
    social: "https://www.instagram.com/brandedsaloon/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Branded Saloon Comedy Open Mic",
    venue: "Branded Saloon",
    date: "2023-03-14",
    time: "20:00",
    weekday: "Tuesday",
    social: "https://www.instagram.com/brandedsaloon/",
    recurring: "biweekly",
  });
  await OpenMic.create({
    name: "BCC Open Ass Mic",
    description:
      "Performers get 3 minute slots to try their material out with little pops from After School Special in between.",
    venue: "BCC - Eris Mainstage",
    date: "2023-03-14",
    time: "20:30",
    weekday: "Tuesday",
    price: "Free with suggested donation",
    signup: "In person - line",
    setTime: 3,
    social: "https://www.instagram.com/comedybrooklyn/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Silly Goof",
    venue: "Starr Bar",
    date: "2023-03-15",
    time: "18:00",
    weekday: "Wednesday",
    price: "1 Drink Minimum",
    signup: "Bucket",
    setTime: 3,
    social: "https://www.instagram.com/sillygoofcomedy/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "LFG",
    description: "having fun! making friends! doing jokes!",
    venue: "Good Judy",
    date: "2023-03-15",
    time: "19:00",
    weekday: "Wednesday",
    signup:
      "Google Form: https://docs.google.com/forms/d/e/1FAIpQLSe7bDknRFgSjjwrHNJAV6RhB4CSQYBPJ-yO5Tb8gF-y4y3jAA/viewform",
    setTime: 3,
    social: "https://www.instagram.com/_letsfkngo_/",
    recurring: "every 1st & 3rd Wednesday",
  });
  await OpenMic.create({
    name: "BAPHTA",
    venue: "Footlight Underground",
    date: "2023-03-15",
    time: "19:30",
    weekday: "Wednesday",
    signup:
      "Google Form: https://docs.google.com/forms/d/e/1FAIpQLSfaB11nfmAPPU3yntzfXRkdT4INISdQVf5z0acnDc12QT1Rqg/viewform or in-person",
    setTime: 3,
    social: "https://www.instagram.com/baphta/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Mom and Pop Mic",
    description: "NYC comedy open mic built on unconditional love",
    venue: "Minami Lounge",
    date: "2023-03-15",
    time: "21:00",
    weekday: "Wednesday",
    signup: "Google Form",
    social: "https://www.instagram.com/mom.and.pop.mic/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Molly is Late",
    description: "The least punctual comedy open mic in Brooklyn",
    venue: "Pete's Candy Store",
    date: "2023-03-16",
    time: "17:00",
    weekday: "Thursday",
    signup: "Bucket",
    social: "https://www.instagram.com/mollyislatemic/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Backyard Baseball",
    venue: "Easy Lover",
    date: "2023-03-16",
    time: "18:00",
    weekday: "Thursday",
    signup:
      "Google Form: https://docs.google.com/forms/d/e/1FAIpQLSdNIsOJ15S4YGaEsx7EG88JdblIfvwfu_EXKkM3iSWt2wpMSA/closedform",
    setTime: 4,
    social: "https://www.instagram.com/backyardbbmic/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Fran",
    description: "Open Mic for Queens in Brooklyn",
    venue: "Easy Lover",
    date: "2023-03-16",
    time: "20:00",
    weekday: "Thursday",
    signup: "Google Form",
    social: "https://www.instagram.com/franopenmic/",
    recurring: "biweekly",
    categories: "LGBTQ+, Women, Marginalized Voices",
  });
  await OpenMic.create({
    name: "Too Many Hosts",
    description: "weekly mic",
    venue: "Secret Pour",
    date: "2023-03-16",
    time: "19:00",
    weekday: "Thursday",
    signup: "in-person",
    setTime: 3,
    social: "https://www.instagram.com/toomanyhosts/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Waho",
    venue: "Fiction Bar/Cafe",
    date: "2023-03-16",
    time: "19:30",
    weekday: "Thursday",
    signup:
      "Google Form: https://docs.google.com/forms/d/1tFgpQM8mnI1AvozVdBr1k29X9a1q4pIy4ijovkCqDeI/closedform#responses",
    social: "https://www.instagram.com/wahomic/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Eye Candy",
    venue: "Pete's Candy Store",
    date: "2023-03-16",
    time: "15:30",
    weekday: "Saturday",
    price: "1 Drink Minimum",
    signup: "Bucket",
    setTime: 3,
    social: "https://www.instagram.com/eyecandycomedy/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "JERRY SEINFELD PRESENTS…",
    venue: "Black Cat LES",
    date: "2023-03-19",
    time: "19:30",
    weekday: "Sunday",
    signup:
      "Google Form: https://docs.google.com/forms/d/e/1FAIpQLSdqTEAWIDsC3ELFacu0Npnh_OpS9P8nvrHyXusBYi2Py-wPvA/viewform",
    setTime: 4,
    social: "https://www.instagram.com/eyecandycomedy/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Jimmy Buffet Presents",
    venue: "Pine Box Rock Shop",
    date: "2023-03-17",
    time: "18:00",
    weekday: "Friday",
    signup: "Bucket",
    setTime: 3,
    social: "https://www.instagram.com/jimmybuffettpresents/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Friday Mic",
    venue: "Halyards",
    date: "2023-03-18",
    time: "18:30",
    weekday: "Friday",
    signup: "Google Form",
    setTime: 4,
    social: "https://www.instagram.com/friday_mic/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Early Years",
    venue: "Fiction Bar/Cafe",
    date: "2023-03-17",
    time: "18:45",
    weekday: "Friday",
    price: "1 Drink Minimum",
    signup: "Bucket",
    setTime: 3,
    social: "https://www.instagram.com/theearlyyearsshow/",
    recurring: "biweekly",
  });
  await OpenMic.create({
    name: "Unladylike",
    description:
      "Are you a female or non-binary comedian looking to try out new material or polish up your jokes in a supportive space? Join Sarah Adelman and Yvette Segan every Sunday at 5pm at Stand Up NY for the Unlady-Mic! Each comedian gets 5 minutes of stage time in a fun, encouraging room!",
    venue: "Stand Up NY",
    date: "2023-03-19",
    time: "17:00",
    weekday: "Sunday",
    price: "$6",
    signup: "Webform: https://standupny.com/unladylike-open-mic/",
    setTime: 5,
    social: "https://www.instagram.com/unladylikecomedy/",
    recurring: "weekly",
    categories: "Women, Nonbinary",
  });
  await OpenMic.create({
    name: "Harlem Nights",
    venue: "Harlem Nights Bar",
    date: "2023-03-13",
    time: "20:00",
    weekday: "Monday",
    signup: "in-person 30 minutes before",
    social: "https://www.instagram.com/harlemnightsbar/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "QED Open Mics",
    venue: "Q.E.D.",
    weekday: "varies",
    price: "make a purchase at the venue",
    signup:
      "Bucket, check out the schedule: https://qedastoria.com/collections/open-mic-nights",
    setTime: 4,
    social: "https://www.instagram.com/qedastoria/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Freddy's",
    description: "Open Mics on Monday's and Wednesday's",
    venue: "Freddy's Bar",
    weekday: "varies",
    signup: "https://www.freddysbar.com/",
    social: "https://www.instagram.com/freddysbrklyn/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "Freddy's",
    description: "Open Mics on Monday's and Wednesday's",
    venue: "Freddy's Bar",
    weekday: "varies",
    signup: "https://www.freddysbar.com/",
    social: "https://www.instagram.com/freddysbrklyn/",
    recurring: "weekly",
  });
  await OpenMic.create({
    name: "New York Comedy Club",
    description: "Various open mics",
    venue: "New York Comedy Club",
    weekday: "varies",
    signup: "https://newyorkcomedyclub.com/open-mics-calendar",
    social: "https://www.instagram.com/freddysbrklyn/",
    recurring: "weekly",
    categories: "LGBTQ+, Women",
  });
};

module.exports = openMicSeed;
