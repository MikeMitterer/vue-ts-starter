// import 'jest-extended';
// import { loggerFactory } from '../../main/config/ConfigLog4j';
import * as TestConfig from '@mmit/communication/lib/testconfig';

describe('ReadConfigFile', () => {
    // const logger = loggerFactory.getLogger('test.ReadConfigFile');

    // beforeEach(() => {
    // });
    //
    // afterEach(() => {
    // });

    const testServer = TestConfig.read({ searchPath: [__dirname, '..'] });
    // const rest = RequestFactory.create({
    //     baseURL: `${testServer.scheme}://${testServer.host}:${testServer.port}/api/v1`,
    // });
    // const readConfigFileService = '/service/<changeme>';

    test('Test port', () => {
        expect(testServer.port).toBe('8060');
    });
});
