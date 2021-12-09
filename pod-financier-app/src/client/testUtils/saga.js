import { runSaga } from 'redux-saga';
import axios from 'axios';
import sinon from 'sinon';

export function testCallHttpSaga({
  saga,
  sagaParams = [],
  testedUrl,
  testedRequestOptions,
  testedSuccessActionType,
  testedFailureActionType
}) {
  describe(saga.name, () => {
    let sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
    });

    afterEach(() => {
      sandbox.restore();
    });

    test('success', async () => {
      const successData = { items: ['success_1', 'success_2'] };
      const dispatched = [];

      const stubRequest = sandbox.stub(axios, 'request').resolves({ data: successData });

      await runSaga({
        dispatch: (action) => dispatched.push(action)
      }, saga, ...sagaParams).toPromise();

      expect(stubRequest.lastCall.args).toEqual([{ url: testedUrl, ...testedRequestOptions }]);

      expect(dispatched).toEqual([{ type: testedSuccessActionType, payload: successData }]);
    });

    test('failure', async () => {
      const error = { message: 'error' };
      const dispatched = [];

      const stubRequest = sandbox.stub(axios, 'request').rejects(error);

      await runSaga({
        dispatch: (action) => dispatched.push(action)
      }, saga, ...sagaParams).toPromise();

      expect(stubRequest.lastCall.args).toEqual([{ url: testedUrl, ...testedRequestOptions }]);

      expect(dispatched).toEqual([{ type: testedFailureActionType, payload: error }]);
    });
  });
}

