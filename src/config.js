// ✏️ Everything personal lives here — edit freely.

export const NAME = 'Aitzaz';
export const AGE = 23; // born 2005

// 1st, 2nd, 3rd, 4th … 11th, 12th, 13th, 21st, 22nd …
export function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// 🔒 Everything stays blurred and locked until this exact moment, then opens for everyone.
// Midnight Pakistan time on his birthday, e.g. '2026-10-05T00:00:00+05:00'. null = never locked.
export const UNLOCK_AT = '2026-10-19T00:00:00+05:00';

// Who the letter is from
export const FROM = 'All friends and well-wishers';

export const LETTER = [
  'Dear Aitzaz,',
"Happy 23rd birthday! A simple text wasn't going to cut it this year, so I built you an entire website instead.",
'Thank you for being that rare kind of friend who stays up for the late-night talks, gets the jokes nobody else understands, and always has my back without hesitation.',
"Turning 23 is going to be massive. I hope it brings you big wins, unforgettable adventures, and every ounce of success you deserve. Never change who you are—the world is simply better with you in it.",
"Here's to you, today and every day.",
];

// One wish per year of his age, shown as flip cards (only the first AGE are used)
export const WISHES = [
  ['🗺️', 'Adventures worth retelling for years'],
['😂', 'Laughs that leave your stomach aching'],
['💪', 'Good health, every single day'],
['🏆', 'Victories, both big and quiet'],
['🌙', 'Late-night talks with the right people'],
['🎧', 'Playlists that hit without a single skip'],
['📅', 'Plans that actually make it out of the group chat'],
['🍕', 'Food that hits the spot every single time'],
['😎', 'Unshakable confidence in every room you enter'],
['🕊️', 'Complete peace of mind'],
['✨', 'Big dreams that start turning into reality'],
['🤝', 'Friends who stay through every chapter'],
['✈️', 'A trip you will be talking about forever'],
['🎯', 'New skills unlocked effortlessly'],
['🌅', 'Sunsets worth stopping everything for'],
['💛', 'All the kindness you give coming straight back to you'],
['☕', 'Mornings that start on the right note'],
['🚀', 'The courage to take the big leap'],
['🏡', 'Moments that make your family proud'],
['🍀', 'Zero bad days (or at least very few)'],
['🎉', 'Your absolute best year yet'],
['💡', 'Breakthrough ideas that change the game'],
['🥂', 'Milestones that demand a proper celebration'],
];

export const BALLOON_MESSAGES = [
  '21 looks good on you!',
  'Level 21 unlocked',
  'Legend status: confirmed',
  'Pura Hiiii!',
  'Cake first, questions later',
  'Main character energy',
  'Another lap around the sun',
  'Channiiii',
  'You deserve the world',
  'Still young, just cooler',
];

// Instagram-style profile above the memories grid
export const HANDLE = 'aitzaz.23';
export const BIO = ['Birthday boy · Level 23 unlocked', 'Send a wish or share a memory below'];
// Profile picture: put a photo in /public (e.g. public/affaq.jpg) and set AVATAR = 'affaq.jpg'
export const AVATAR = null;
