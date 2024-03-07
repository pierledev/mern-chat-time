/* eslint-disable react-refresh/only-export-components */
import Ava1 from './assets/avatar-male-01.png';
import Ava2 from './assets/avatar-female-02.png';
import Ava3 from './assets/avatar-male-03.png';
import Ava4 from './assets/avatar-female-04.png';
import Ava5 from './assets/avatar-male-05.png';
import Ava6 from './assets/avatar-female-06.png';

import { MdConnectWithoutContact, MdMarkUnreadChatAlt } from 'react-icons/md';
import { GiThreeFriends } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';
import { HiLightBulb } from 'react-icons/hi';
import { TbCurrencyDollarOff } from 'react-icons/tb';

export { Ava1, Ava2, Ava3, Ava4, Ava5, Ava6 };

export const features = [
  {
    id: 1,
    icon: <MdConnectWithoutContact />,
    heading: 'Instant Connections',
    subheading:
      "Just sign up and start chatting. It's that easy to meet new friends",
  },
  {
    id: 2,
    icon: <GiThreeFriends />,
    heading: 'Stranger, Not Anymore',
    subheading:
      'Chat with people from around the world and turn strangers into friends',
  },
  {
    id: 3,
    icon: <GrSecure />,
    heading: 'Safe & Secure',
    subheading:
      'Your safety is our priority. Enjoy chatting with peace of mind',
  },
  {
    id: 4,
    icon: <HiLightBulb />,
    heading: 'User-Friendly Interface',
    subheading:
      'Easy-to-use for everyone. Dive straight into chatting without any hassle',
  },
  {
    id: 5,
    icon: <MdMarkUnreadChatAlt />,
    heading: 'Real-Time Conversations',
    subheading:
      'We ensure you’re always just a few clicks away from a new connection',
  },
  {
    id: 6,
    icon: <TbCurrencyDollarOff />,
    heading: 'Always Free',
    subheading:
      'No subscriptions, no fees. Just open conversations and genuine connections',
  },
];

const testimonies = [
  {
    id: 1,
    avatar: Ava1,
    name: 'Alex Johnson',
    review:
      "Chat Time has opened up a world of new friendships for me. It's amazing to connect with people from so many different cultures.",
    country: 'USA',
  },
  {
    id: 2,
    avatar: Ava2,
    name: 'Maria Silva',
    review:
      'I was amazed by how easy and safe it was to meet new people on Chat Time. It’s now my go-to app for socializing.',
    country: 'Brazil',
  },
  {
    id: 3,
    avatar: Ava4,
    name: 'Sofia Chang',
    review:
      'The user-friendly interface made it super easy for me to start conversations. I’ve met so many interesting people here!',
    country: 'Taiwan',
  },
  {
    id: 4,
    avatar: Ava3,
    name: 'Liam Smith',
    review:
      "Thanks to Chat Time, I've found friends in countries I hope to visit someday. It's been an enriching experience.",
    country: 'Australia',
  },
  {
    id: 5,
    avatar: Ava6,
    name: 'Aisha Al-Farsi',
    review:
      'I love the anonymity feature because it lets me express myself freely. I’ve had nothing but positive interactions here.',
    country: 'Oman',
  },
  {
    id: 6,
    avatar: Ava5,
    name: 'Henrik Svensson',
    review:
      "Chat Time is a great way to learn about new cultures and languages. It's like traveling the world from my living room.",
    country: 'Sweden',
  },
  {
    id: 7,
    avatar: Ava6,
    name: 'Elena Rodriguez',
    review:
      "Finding Chat Time was a game-changer for me. I've made genuine connections that have enriched my life.",
    country: 'Spain',
  },
  {
    id: 8,
    avatar: Ava5,
    name: 'Kazuki Takahashi',
    review:
      "Every chat on Chat Time is a new adventure. I've learned so much about the world through the eyes of others.",
    country: 'Japan',
  },
  {
    id: 9,
    avatar: Ava4,
    name: 'Emma Dubois',
    review:
      'Chat Time has provided me with a safe space to meet new people and expand my social circle.',
    country: 'France',
  },
  {
    id: 10,
    avatar: Ava3,
    name: 'David Smith',
    review:
      'As someone who struggles with social anxiety, Chat Time has been a comfortable way for me to interact and make friends.',
    country: 'Canada',
  },
  {
    id: 11,
    avatar: Ava2,
    name: 'Ananya Patel',
    review:
      'I never imagined I could have friends from so many different countries. Chat Time has made that possible.',
    country: 'India',
  },
  {
    id: 12,
    avatar: Ava1,
    name: 'Mohammed Al-Amin',
    review:
      "It's fascinating to exchange stories with people from diverse backgrounds. Chat Time is like a bridge to the world.",
    country: 'Egypt',
  },
  {
    id: 13,
    avatar: Ava4,
    name: 'Isabella Rossi',
    review:
      'The privacy and safety features of Chat Time give me peace of mind while chatting with new people. I recommend this app!',
    country: 'Italy',
  },
  {
    id: 14,
    avatar: Ava3,
    name: 'Lucas Müller',
    review:
      "I've improved my language skills and made friends in the process, all thanks to Chat Time. Will definitely tell my friends!",
    country: 'Germany',
  },
  {
    id: 15,
    avatar: Ava2,
    name: 'Chloe Taylor',
    review:
      "Chat Time's user-friendly interface made it incredibly easy for me to dive into conversations right away.",
    country: 'New Zealand',
  },
  {
    id: 16,
    avatar: Ava1,
    name: 'Oliver Hansen',
    review:
      "I appreciate how Chat Time always connects me with people who share my interests. It's never a dull chat.",
    country: 'Denmark',
  },
  {
    id: 17,
    avatar: Ava6,
    name: 'Nadia Ivanova',
    review:
      'Chat Time is my go-to platform for when I feel the need to connect with someone and have a meaningful conversation.',
    country: 'Russia',
  },
  {
    id: 18,
    avatar: Ava5,
    name: 'Samuel Ofori',
    review:
      'Discovering different cultures and meeting new people has been an incredibly enriching experience, all thanks to Chat Time.',
    country: 'Ghana',
  },
];

export const testimoniesList1 = testimonies.slice(0, 6);
export const testimoniesList2 = testimonies.slice(6, 12);
export const testimoniesList3 = testimonies.slice(12); 

export const faqs = [
  {
    id: 1,
    question: 'How do I start chatting on Chat Time?',
    answer:
      "Getting started is simple! Just sign up on our website with your email. Once you've created your account, you can immediately start chatting with strangers from around the globe. No additional setup is required.",
  },
  {
    id: 2,
    question: 'Is Chat Time safe to use?',
    answer:
      'Yes, safety is our top priority. We have implemented several measures to ensure our users can chat in a safe and secure environment, including encryption and anonymity options. However, we always encourage our users to practice safe online interactions.',
  },
  {
    id: 3,
    question: 'Can I chat with people who speak different languages?',
    answer:
      "While our platform primarily facilitates conversations in English, we encourage users from all language backgrounds to join. Our community is diverse, and you're likely to meet someone who shares your language or interests.",
  },
  {
    id: 4,
    question: 'Is there a cost to use Chat Time?',
    answer:
      'No, Chat Time is completely free to use! We believe in making new connections accessible to everyone, so there are no subscription fees or hidden costs. Enjoy unlimited chatting without worrying about expenses.',
  },
  {
    id: 5,
    question: "How does Chat Time ensure I'm always talking to real people?",
    answer:
      'We have measures in place to prevent bots and fake profiles. Our system regularly monitors for suspicious activity to ensure that your chat experience is with genuine users looking to make real connections.',
  },
  {
    id: 6,
    question: 'What should I do if I encounter inappropriate behavior?',
    answer:
      "We strive to maintain a respectful community on Chat Time. If you encounter any inappropriate behavior, please use the report feature available on our platform to alert us. Our team will take immediate action to address the issue. Your safety and comfort are our concern, and we're committed to taking necessary actions to maintain a positive environment.",
  },
];
