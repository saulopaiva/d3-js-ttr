const Routes = [
  {source: "Vancouver", target: "Seatle", color: "gray", size: 1},
  {source: "Vancouver", target: "Calgary", color: "gray", size: 3},
  {source: "Seatle", target: "Vancouver", color: "gray", size: 1},
  {source: "Seatle", target: "Calgary", color: "gray", size: 4},
  {source: "Seatle", target: "Portland", color: "gray", size: 1},
  {source: "Seatle", target: "Helena", color: "yellow", size: 6},
  {source: "Portland", target: "Seatle", color: "gray", size: 1},
  {source: "Portland", target: "Salt Lake City", color: "blue", size: 6},
  {source: "Portland", target: "San Francisco", color: "green", size: 5},
  {source: "San Francisco", target: "Portland", color: "pink", size: 5},
  {source: "San Francisco", target: "Salt Lake City", color: "orange", size: 5},
  {source: "San Francisco", target: "Los Angeles", color: "yellow", size: 3},
  {source: "Los Angeles", target: "San Francisco", color: "pink", size: 3},
  {source: "Los Angeles", target: "Las Vegas", color: "gray", size: 2},
  {source: "Los Angeles", target: "Phoenix", color: "gray", size: 3},
  {source: "Los Angeles", target: "El Passo", color: "black", size: 6},
  {source: "Calgary", target: "Winnipeg", color: "white", size: 6},
  {source: "Calgary", target: "Helena", color: "gray", size: 4},
  {source: "Salt Lake City", target: "San Francisco", color: "white", size: 5},
  {source: "Salt Lake City", target: "Las Vegas", color: "orange", size: 3},
  {source: "Salt Lake City", target: "Helena", color: "pink", size: 3},
  {source: "Salt Lake City", target: "Denver", color: "red", size: 3},
  {source: "Denver", target: "Salt Lake City", color: "yellow", size: 3},
  {source: "Phoenix", target: "Denver", color: "white", size: 5},
  {source: "Phoenix", target: "Santa Fe", color: "gray", size: 3},
  {source: "Phoenix", target: "El Passo", color: "gray", size: 3},
  {source: "Helena", target: "Denver", color: "green", size: 4},
  {source: "Helena", target: "Winnipeg", color: "blue", size: 4},
  {source: "Helena", target: "Duluth", color: "orange", size: 6},
  {source: "Helena", target: "Omaha", color: "red", size: 5},
  {source: "El Passo", target: "Santa Fe", color: "gray", size: 2},
  {source: "El Passo", target: "Oklahoma", color: "yellow", size: 5},
  {source: "El Passo", target: "Dallas", color: "red", size: 4},
  {source: "El Passo", target: "Houston", color: "green", size: 6},
  {source: "Santa Fe", target: "Denver", color: "gray", size: 2},
  {source: "Santa Fe", target: "Oklahoma", color: "blue", size: 3},
  {source: "Denver", target: "Oklahoma", color: "red", size: 4},
  {source: "Denver", target: "Omaha", color: "pink", size: 4},
  {source: "Denver", target: "Kansas", color: "orange", size: 4},
  {source: "Kansas", target: "Denver", color: "black", size: 4},
  {source: "Winnipeg", target: "Duluth", color: "black", size: 4},
  {source: "Winnipeg", target: "Sault St. Marie", color: "gray", size: 6},
  {source: "Winnipeg", target: "Sault St. Marie", color: "gray", size: 6},
  {source: "Omaha", target: "Duluth", color: "gray", size: 2},
  {source: "Omaha", target: "Chicago", color: "blue", size: 4},
  {source: "Omaha", target: "Kansas", color: "gray", size: 1},
  {source: "Kansas", target: "Omaha", color: "gray", size: 1},
  {source: "Kansas", target: "Saint Louis", color: "pink", size: 2},
  {source: "Saint Louis", target: "Kansas", color: "blue", size: 2},
  {source: "Kansas", target: "Oklahoma", color: "gray", size: 2},
  {source: "Oklahoma", target: "Kansas", color: "gray", size: 2},
  {source: "Oklahoma", target: "Little Rock", color: "gray", size: 2},
  {source: "Oklahoma", target: "Dallas", color: "gray", size: 2},
  {source: "Dallas", target: "Oklahoma", color: "gray", size: 2},
  {source: "Dallas", target: "Little Rock", color: "gray", size: 2},
  {source: "Dallas", target: "Houston", color: "gray", size: 1},
  {source: "Houston", target: "Dallas", color: "gray", size: 1},
  {source: "Houston", target: "New Orleans", color: "gray", size: 2},
  {source: "Duluth", target: "Omaha", color: "gray", size: 2},
  {source: "Duluth", target: "Sault St. Marie", color: "gray", size: 3},
  {source: "Duluth", target: "Toronto", color: "pink", size: 6},
  {source: "Duluth", target: "Chicago", color: "red", size: 3},
  {source: "Little Rock", target: "Nashville", color: "white", size: 3},
  {source: "Little Rock", target: "New Orleans", color: "green", size: 3},
  {source: "Little Rock", target: "Saint Louis", color: "gray", size: 2},
  {source: "Saint Louis", target: "Nashville", color: "gray", size: 2},
  {source: "Saint Louis", target: "Pitsburgh", color: "green", size: 5},
  {source: "Saint Louis", target: "Chicago", color: "green", size: 2},
  {source: "Chicago", target: "Saint Louis", color: "white", size: 2},
  {source: "Chicago", target: "Toronto", color: "white", size: 4},
  {source: "Chicago", target: "Pitsburgh", color: "black", size: 3},
  {source: "Pitsburgh", target: "Chicago", color: "orange", size: 3},
  {source: "Sault St. Marie", target: "Montreal", color: "black", size: 5},
  {source: "Sault St. Marie", target: "Toronto", color: "gray", size: 2},
  {source: "New Orleans", target: "Miami", color: "red", size: 6},
  {source: "New Orleans", target: "Atlanta", color: "yellow", size: 4},
  {source: "Atlanta", target: "New Orleans", color: "orange", size: 4},
  {source: "Nashville", target: "Pitsburgh", color: "yellow", size: 4},
  {source: "Nashville", target: "Raleigh", color: "black", size: 3},
  {source: "Nashville", target: "Atlanta", color: "gray", size: 1},
  {source: "Atlanta", target: "Miami", color: "blue", size: 5},
  {source: "Atlanta", target: "Charleston", color: "gray", size: 2},
  {source: "Atlanta", target: "Raleigh", color: "gray", size: 2},
  {source: "Raleigh", target: "Atlanta", color: "gray", size: 2},
  {source: "Miami", target: "Charleston", color: "pink", size: 4},
  {source: "Charleston", target: "Raleigh", color: "gray", size: 2},
  {source: "Raleigh", target: "Pitsburgh", color: "gray", size: 2},
  {source: "Raleigh", target: "Washington", color: "gray", size: 2},
  {source: "Washington", target: "Raleigh", color: "gray", size: 2},
  {source: "Washington", target: "Pitsburgh", color: "gray", size: 2},
  {source: "Washington", target: "New York", color: "orange", size: 2},
  {source: "New York", target: "Washington", color: "black", size: 2},
  {source: "Pitsburgh", target: "Toronto", color: "gray", size: 2},
  {source: "Pitsburgh", target: "New York", color: "white", size: 2},
  {source: "New York", target: "Pitsburgh", color: "green", size: 2},
  {source: "Toronto", target: "Montreal", color: "gray", size: 3},
  {source: "Montreal", target: "New York", color: "blue", size: 3},
  {source: "Montreal", target: "Boston", color: "gray", size: 2},
  {source: "Boston", target: "Montreal", color: "gray", size: 2},
  {source: "Boston", target: "New York", color: "red", size: 2},
  {source: "New York", target: "Boston", color: "yellow", size: 2},
]

export default Routes
