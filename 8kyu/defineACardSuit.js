/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// Solution 1
function defineSuit(card) {
    return card.includes('♣') ? 'clubs' :
    card.includes('♦') ? 'diamonds' :
    card.includes('♥') ? 'hearts' :
    card.includes('♠') ? 'spades' : null
  }

  // Solution 2
  function defineSuit(card) {
    const suit = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return suit[card.charAt(card.length - 1)]
  }