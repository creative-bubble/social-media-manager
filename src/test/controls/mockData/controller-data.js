// post AddGroup controller

exports.postSuccess = jest.fn(() => {
    return {
        message: "Created successfuly",
        name: "TestGroupName",
        type: "success"
    };
});

exports.postError = jest.fn(() => {
    return {
        error: "error",
        message: "group already exist",
        statusCode: 409,
        type: "exist"
    };
});

// get getGroups

exports.getSuccess = jest.fn(() => {
    return [
        {
            id: 1,
            name: 'TestGroup1',
            createdAt: '2020-07-14T16:22:48.531Z',
            updatedAt: '2020-07-14T16:22:48.531Z'
        },
        {
            id: 2,
            name: 'TestGroup2',
            createdAt: '2020-07-14T16:22:48.531Z',
            updatedAt: '2020-07-14T16:22:48.531Z'
        },
    ]
});