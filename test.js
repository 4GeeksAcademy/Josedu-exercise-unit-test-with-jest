const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


  test('convertir de euros a dolares', () => {
    expect(fromEuroToDollar(100)).toBeCloseTo(107);
  });

  
  test('convertir de dolares a yenes', () => {
    expect(fromDollarToYen(100)).toBeCloseTo(14626.17);
  });

  test('convertir de yenes a libras', () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.56); 
  });
