// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let chars  = ['H', 'Q', 'D', 'N', 'P'],
      values = [50, 25, 10, 5, 1],
      result = {};

  if (currency > 0 && currency < 10000) {
    values.reduce((remained, item, i) => {
      if(item <= remained) {
        result[chars[i]] = parseInt(remained / item);

        return remained - result[chars[i]] * item;
      }

      return remained;
    }, currency);
  } else if (currency > 9999) {
    result.error = `You are rich, my friend! We don't have so much coins for exchange`;
  }

  return result;
};