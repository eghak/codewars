/*
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"
*/

// The GIVEN wrong code
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      return name;
    case 2:
      name = "Venus";
      return name;
    case 3:
      name = "Earth";
      return name;
    case 4:
      name = "Mars";
      return name;
    case 5:
      name = "Jupiter";
      return name;
    case 6:
      name = "Saturn";
      return name;
    case 7:
      name = "Uranus";
    case 8:
      name = "Neptune";
  }

  return name;
}

// Solution 1: add "return name" at the end of each case
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      return name;
    case 2:
      name = "Venus";
      return name;
    case 3:
      name = "Earth";
      return name;
    case 4:
      name = "Mars";
      return name;
    case 5:
      name = "Jupiter";
      return name;
    case 6:
      name = "Saturn";
      return name;
    case 7:
      name = "Uranus";
    case 8:
      name = "Neptune";
  }

  return name;
}

// Solution 2: add "break" at the end of each case
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
  }

  return name;
}
