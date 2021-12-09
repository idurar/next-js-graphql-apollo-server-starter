// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ColorType, SpotsType, MushroomType } from '@/types/mushroom';
import { useRouter } from 'next/router';

const mushrooms: MushroomType[] = [
  {
    name: 'nervous bell',
    spots: SpotsType.dashed,
    color: ColorType.RED,
    latlng: [52.082042, 5.236192],
  },
  {
    name: 'nice benz',
    spots: SpotsType.dotted,
    color: ColorType.BLUE,
    latlng: [52.080678, 5.236457],
  },
  {
    name: 'quizzical chaplygin',
    spots: SpotsType.double,
    color: ColorType.RED,
    latlng: [52.081624, 5.235895],
  },
  {
    name: 'nifty bhabha',
    spots: SpotsType.groove,
    color: ColorType.BLUE,
    latlng: [52.080671, 5.236392],
  },
  {
    name: 'peaceful dijkstra',
    spots: SpotsType.hidden,
    color: ColorType.GREEN,
    latlng: [52.081451, 5.235404],
  },
  {
    name: 'nostalgic bhaskara',
    spots: SpotsType.inset,
    color: ColorType.BLUE,
    latlng: [52.080552, 5.234156],
  },
  {
    name: 'silly burnell',
    spots: SpotsType.ridge,
    color: ColorType.BLUE,
    latlng: [52.080598, 5.234361],
  },
  {
    name: 'romantic cray',
    spots: SpotsType.groove,
    color: ColorType.GREEN,
    latlng: [52.080253, 5.234631],
  },
  {
    name: 'vigilant bose',
    spots: SpotsType.solid,
    color: ColorType.RED,
    latlng: [52.081063, 5.236819],
  },
  {
    name: 'quirky buck',
    spots: SpotsType.dashed,
    color: ColorType.GREEN,
    latlng: [52.081163, 5.236446],
  },
  {
    name: 'stoic cartwright',
    spots: SpotsType.double,
    color: ColorType.BLUE,
    latlng: [52.080861, 5.235876],
  },
  {
    name: 'pensive clarke',
    spots: SpotsType.dotted,
    color: ColorType.YEllOW,
    latlng: [52.081199, 5.234929],
  },
  {
    name: 'strange cannon',
    spots: SpotsType.hidden,
    color: ColorType.YEllOW,
    latlng: [52.080273, 5.234664],
  },
  {
    name: 'stupefied bohr',
    spots: SpotsType.none,
    color: ColorType.RED,
    latlng: [52.081883, 5.235415],
  },
  {
    name: 'pedantic colden',
    spots: SpotsType.hidden,
    color: ColorType.BLUE,
    latlng: [52.081813, 5.236781],
  },
  {
    name: 'priceless davinci',
    spots: SpotsType.dashed,
    color: ColorType.GREEN,
    latlng: [52.081538, 5.236694],
  },
  {
    name: 'vibrant chandrasekhar',
    spots: SpotsType.outset,
    color: ColorType.RED,
    latlng: [52.081182, 5.237143],
  },
  {
    name: 'wizardly booth',
    spots: SpotsType.groove,
    color: ColorType.GREEN,
    latlng: [52.080429, 5.237424],
  },
  {
    name: 'suspicious driscoll',
    spots: SpotsType.inset,
    color: ColorType.YEllOW,
    latlng: [52.080074, 5.236462],
  },
  {
    name: 'optimistic blackburn',
    spots: SpotsType.ridge,
    color: ColorType.RED,
    latlng: [52.080144, 5.235857],
  },
  {
    name: 'reverent curie',
    spots: SpotsType.groove,
    color: ColorType.BLUE,
    latlng: [52.081222, 5.235965],
  },
];

// name: 'objective black',
// name: 'practical curran',
// name: 'recursing darwin',
// name: 'relaxed dhawan',
// name: 'sad chatterjee',
// name: 'serene cohen',
// name: 'sharp dubinsky',
// name: 'sleepy chebyshev',
// name: 'sweet brattain',
// name: 'tender dewdney',
// name: 'thirsty brahmagupta',
// name: 'trusting blackwell',
// name: 'unruffled cerf',
// name: 'upbeat carver',
// name: 'vigorous bouman',
// name: 'wonderful carson',
// name: 'xenodochial borg',
// name: 'youthful brown',
// name: 'zealous boyd',
// name: 'zen chatelet',

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<{ success: boolean; result: MushroomType[] }>,
// ) {
//   setTimeout(() => {
//     res.status(200).json({ success: true, result: mushrooms });
//   }, 1000);
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const { method, query } = req;

  setTimeout(() => {
    res.status(200).json({ method, query });
  }, 1000);
}
