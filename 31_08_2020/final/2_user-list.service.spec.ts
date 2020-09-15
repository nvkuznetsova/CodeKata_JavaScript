import { XyzUserListService } from './user-list.service';

import { TestBed, async, inject } from '@angular/core/testing';

describe('XyzUserListService', () => {
    let service: XyzUserListService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [ XyzUserListService]
        })
    }))

    it('should return a User List with 16 users', async(
        inject([ XyzUserListService ], (service: XyzUserListService) => {
            service.get().then(response => {
                expect(response.length).toBe(16);
            })
        })
    ))
})
