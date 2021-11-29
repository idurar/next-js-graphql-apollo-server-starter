export enum ColorType {
  RED,
  GREEN,
  YEllOW,
  BLUE,
}

export enum SpotsType {
  none,
  hidden,
  dotted,
  dashed,
  solid,
  double,
  groove,
  ridge,
  inset,
  outset,
}

export interface MushroomType {
  name: string;
  spots: SpotsType;
  color: ColorType;
  latlng: [number, number];
}
