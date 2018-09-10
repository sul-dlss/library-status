import areBeingMaintained from '../../src/utils/maintenanceUtils';
import { maintenanceWindows } from '../../src/config';

describe('areBeingMaintained', () => {
  it('not in window', () => {
    expect(areBeingMaintained(new Date('2018-09-10T18:00:58.779Z'), maintenanceWindows)).toBe(false);
  });
  it('in first window', () => {
    expect(areBeingMaintained(new Date('2018-09-09T11:00:58.779Z'), maintenanceWindows)).toBe(true);
  });
  it('in second window', () => {
    expect(areBeingMaintained(new Date('2018-09-11T11:00:58.779Z'), maintenanceWindows)).toBe(true);
  });
  it('in second window', () => {
    expect(areBeingMaintained(new Date('2018-09-13T11:00:58.779Z'), maintenanceWindows)).toBe(true);
  });
  it('in second window', () => {
    expect(areBeingMaintained(new Date('2018-09-15T11:00:58.779Z'), maintenanceWindows)).toBe(true);
  });
});
