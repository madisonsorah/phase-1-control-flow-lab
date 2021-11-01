function scuberGreetingForFeet(ride){
  if (ride > 2500) {
    return 'No can do.';
  } else if (ride > 2000 && ride < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (ride <= 400) {
    return 'This one is on me!';
}
}

function ternaryCheckCity(city){
  let cityResponse;
  city === 'NYC' ? (cityResponse = 'Ok, sounds good.') : (cityResponse = 'No go.');
  return cityResponse;
}

function switchOnCharmFromTip(tip){
  let tipResponse;
  switch (tip) {
    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.';
      break;
    default:
      tipResponse = 'Bye.';
      break;
  }
  return tipResponse;
}