const mapSymbols = {
  openCurlyBraquet: '{',
  closeCurlyBraquet: '}',
  openSquareBraquet: '[',
  closeSquareBraquet: ']',
  openParenthesis: '(',
  closeParenthesis: ')',
}

const transformToArray = (expresion) => {
  const arrayExpresion = Array.from(expresion);
  return arrayExpresion;
}

const countRepetitions = (array, symbol) => {
  const countRepetitions = array.filter((item) => (item === symbol)).length;
  return countRepetitions
}

const verifyCompatibility = (itemA, itemB) => {
 if (itemA === '{' && itemB === '}') return true;
 if (itemA === '[' && itemB === ']') return true;
 if (itemA === '(' && itemB === ')') return true;

 return false;
}

const verifyOrder = (arrayExpresion) => {
  // Esta fucnión debería retornar true si el orden de apertura y cierre de los simbolos es correcto.
  // De lo contrario debería devolver false.
  const half = Math.ceil(arrayExpresion.length / 2);   // divide por dos el length y lo redondea hacia arriba
  const firstHalf = arrayExpresion.slice(0, half);     // se queda con la pirmer mitad del array
  const secondHalf = arrayExpresion.slice(-half);      // el signo menos empieza la extraccion desde el final del array... se queda con la segunda mitad del array

  const secondHalfReverted = secondHalf.reverse();

  let count = 0
  for (let i = 0; i < firstHalf.length; i++) {
    if (verifyCompatibility(firstHalf[i], secondHalfReverted[i])) {
      count++
    }
  }

  if (count !== firstHalf.length) return false;
  return true
}

const isBalanced = (expresion) => {
  const arrayExpresion = transformToArray(expresion);

  const openCurlyBraquetsOccurrence = countRepetitions(arrayExpresion, mapSymbols.openCurlyBraquet);
  const closeCurlyBraquetsOccurrence = countRepetitions(arrayExpresion, mapSymbols.closeCurlyBraquet);
  const openSquareBraquetsOccurrence = countRepetitions(arrayExpresion, mapSymbols.openSquareBraquet);
  const closeSquareBraquetsOccurrence = countRepetitions(arrayExpresion, mapSymbols.closeSquareBraquet);
  const openParenthesisOccurrence = countRepetitions(arrayExpresion, mapSymbols.openParenthesis);
  const closeParenthesisOccurrence = countRepetitions(arrayExpresion, mapSymbols.closeParenthesis);

  if (openCurlyBraquetsOccurrence !== closeCurlyBraquetsOccurrence) return false;
  if (openSquareBraquetsOccurrence !== closeSquareBraquetsOccurrence) return false;
  if (openParenthesisOccurrence !== closeParenthesisOccurrence) return false;

  const correctOrder = verifyOrder(arrayExpresion);

  if (!correctOrder) return false;

  return true;
}

  console.log('llaves', isBalanced('{}'));
  console.log('corchetes', isBalanced('[]'));
  console.log('parentesis', isBalanced('()'));
  console.log('A', isBalanced('[({[]})]'));
  console.log('B', isBalanced('[{}'));
  console.log('C', isBalanced('()'));
  console.log('D', isBalanced('([)]'));
  console.log('E', isBalanced('()()')); // Este caso no puede resolverse con la solución que he planteado.
  console.log('X', isBalanced('{{}}'));
  console.log('F', isBalanced('[(({}))}]'));