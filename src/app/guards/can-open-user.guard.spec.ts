import { TestBed, async, inject } from '@angular/core/testing';

import { CanOpenUserGuard } from './can-open-user.guard';

describe('CanOpenUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanOpenUserGuard]
    });
  });

  it('should ...', inject([CanOpenUserGuard], (guard: CanOpenUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
