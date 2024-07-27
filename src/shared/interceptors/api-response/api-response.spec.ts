import { ResponseInterceptor } from './api-response';

describe('ApiResponse', () => {
  it('should be defined', () => {
    expect(new ResponseInterceptor()).toBeDefined();
  });
});
