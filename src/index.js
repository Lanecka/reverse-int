module.exports = function reverse (n) {
  if(n > 0) {
   return Number([...n.toString()].reverse().join(''));
  } else {
    const delSymbol = '-';
    const str = n.toString();
    const delSymbolStr = str.replace(delSymbol, '');

    return Number([...delSymbolStr].reverse().join(''));
  }
}
