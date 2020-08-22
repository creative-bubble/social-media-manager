import GroupController from '../../controllers/group';
import { mockFetch } from '../helper/helper';
import mockData from './mockData/controller-data';
import { toast } from 'react-toastify';

afterEach(() => {
    jest.clearAllMocks();
});

describe('Controllers', () => {
    const { postAddGroup } = GroupController;

    describe('Group Controller', () => {

        describe('postAddGroup', () => {

            it('Create Group successfuly should show a toaster success', async () => {
                const spy = jest.spyOn(toast, 'success');
                mockFetch(mockData.postSuccess());
                await postAddGroup({name: 'TestGroupName'});
                //assertions
                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('Create Group Error should show a toaster Error', async () => {
                const spy = jest.spyOn(toast, 'error');
                mockFetch(mockData.postError());
                await postAddGroup({name: 'TestGroupName'});
                //assertions
                expect(spy).toHaveBeenCalledTimes(1);
            });

        });

    });

});