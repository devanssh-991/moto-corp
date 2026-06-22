export const vehicles = [
  { id: 'v1', name: 'Aether GT', type: 'Car', power: '780 hp', range: '610 km', price: 142000 },
  { id: 'v2', name: 'Orion S', type: 'Car', power: '690 hp', range: '570 km', price: 128000 },
  { id: 'v3', name: 'Nebula X', type: 'SUV', power: '640 hp', range: '540 km', price: 118000 },
  { id: 'v4', name: 'Vanta R', type: 'Coupe', power: '820 hp', range: '520 km', price: 168000 },
  { id: 'v5', name: 'Solace Touring', type: 'Sedan', power: '560 hp', range: '640 km', price: 98000 },
  { id: 'v6', name: 'Apex E-Rally', type: 'Crossover', power: '510 hp', range: '490 km', price: 86000 },
  { id: 'v7', name: 'Devansh 123', type: 'car', power: '1000hp', range: '1000kms', price: 320000 },
  { id: 'v9', name: 'Shvansh 789', type: 'Bike', power: '1000hp', range: '1000kms', price: 320000 },
  { id: 'v10', name: 'John Doe 789', type: 'Car', power: '102hp', range: '1000kms', price: 31311 },
]

export const bikes = [
  { id: 'b1', name: 'VOLT BS', type: 'Sport Bike', power: '168 hp', range: '280 km', price: 36000 },
  { id: 'b2', name: 'Raven Street', type: 'Naked Bike', power: '122 hp', range: '240 km', price: 24000 },
  { id: 'b3', name: 'Arc Comet', type: 'Touring Bike', power: '140 hp', range: '320 km', price: 28500 },
  { id: 'b4', name: 'Pulse Trail', type: 'Adventure Bike', power: '108 hp', range: '300 km', price: 22500 },
]

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
    price
  )