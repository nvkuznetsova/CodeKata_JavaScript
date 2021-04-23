import { XyzUserListService } from './user-list.service';

describe('XyzUserListService', () => {
  let service: XyzUserListService;

  beforeEach(() => {
    service = new XyzUserListService();
  });

  it('should return a list with 16 amazing people', (done) => {
    service.get().then((response) => {
      expect(response.length).toBe(16);
      done();
    });
  });
});
