import {SECTORS} from '@/app/api/data';
import {randomInt, range} from 'es-toolkit';

const colors = ["blue", "green", "red", "yellow", 'indigo', 'purple'];
const nextColor = () => {
  return colors[randomInt(colors.length)];
};

export const data = SECTORS.map((s, index) => {
  return {
    name: s,
    color: `${nextColor()}.8`,
    children: range(1, randomInt(5, 10)).map((_, i) => {
      return {
        name: `${s} ${i + 1}`,
        value: randomInt(100),
      }
    })
  }
})