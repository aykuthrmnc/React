// interface Kanal {
//   isim: string;
//   yas: number;
// }
type Yas = number | string; // Unions
type Isim = "React" | "Vue"; // Literal Type

type Kanal<I, Y> = {
  isim: I;
  yas?: Y;
};

let kanal: Kanal<Isim, Yas> = {
  isim: "React",
  yas: 123,
};

type Topla = (x: number, y: number) => number;
// interface Topla {(x: number, y: number): number;}

const topla: Topla = (x, y) => x + y;

const kanallar: Kanal<Isim, Yas>[] = [
  { isim: "React", yas: 1000 },
  { isim: "Vue", yas: 500 },
];
