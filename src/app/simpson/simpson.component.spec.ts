import { SimpsonRule } from './simpson_rule';
describe('SimpsonRule', () => {
  it('should return 16.0 for f(x) = 2x, x0 = 0, x1 = 4, numSeg = 4, ERROR = 0.0001', () => {
    const result = SimpsonRule.simpson(0, 4, 4, 0.0001, SimpsonRule.fx_2x);
    expect(result).toBeCloseTo(16.0, 2);
  });

  it('should return 0.3333 for f(x) = x^2, x0 = 0, x1 = 1, numSeg = 4, ERROR = 0.0001', () => {
    const result = SimpsonRule.simpson(0, 1, 4, 0.0001, SimpsonRule.fx_x2);
    expect(result).toBeCloseTo(0.3333, 4);
  });

  it('should return 1.38 for f(x) = 1/x, x0 = 1, x1 = 4, numSeg = 6, ERROR = 0.001', () => {
    const result = SimpsonRule.simpson(1, 4, 6, 0.001, SimpsonRule.fx_1_x);
    expect(result).toBeCloseTo(1.38, 1);
  });

  it('should return 0.35006 for x0=0, x1=1.1, dof=9, error=0.00001', () => {
    const result = SimpsonRule.TStudent( 0, 1.1,  9, 0.00001)
    expect(result).toBeCloseTo(0.35006, 4);
  });

  it('should return 0.36757 for x0=0, x1=1.1812, dof=10, error=0.00001', () => {
    const result = SimpsonRule.TStudent( 0, 1.1812, 10, 0.00001)
    expect(result).toBeCloseTo(0.36757, 4);
  });

  it('should return 0.49500 for x0=0, x1=2.750, dof=30, error=0.00001', () => {
    const result = SimpsonRule.TStudent( 0, 2.750,  30, 0.00001)
    expect(result).toBeCloseTo(0.49500, 4);
  });
});
