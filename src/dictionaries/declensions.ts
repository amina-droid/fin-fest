type TextForms = [string, string, string] // ['минута', 'минуты', 'минут']
type Dictionary = Readonly<{
  [key in string | number]: string;
}>;
const createDeclensions = (textForms: TextForms) => new Proxy<Dictionary>({}, {
  get(target, p) {
    const n = Math.abs(Number(p)) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) { return textForms[2]; }
    if (n1 > 1 && n1 < 5) { return textForms[1]; }
    if (n1 === 1) { return textForms[0]; }
    return textForms[2];
  },
});

export const QUESTION_WORDS = createDeclensions(['вопрос', 'вопроса', 'вопросов']);
export const SCORES_WORDS = createDeclensions(['балл', 'балла', 'баллов']);
export const PRIZE_WORDS = createDeclensions(['подарок', 'подарка', 'подарков']);
export const EXEMPLAR_WORDS = createDeclensions(['экземпляр', 'экземпляра', 'экземпляров']);
