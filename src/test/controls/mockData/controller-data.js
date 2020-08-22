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