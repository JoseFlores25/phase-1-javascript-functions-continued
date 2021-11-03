function saturdayFun(ride = "roller-skate") {
  return `This Saturday, I want to ${ride}!`;
}

let mondayWork = function (work = "go to the office") {
  return `This Monday, I will ${work}.`;
};

function wrapAdjective(visualFlair = "*") {
  return function (adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  };
}
