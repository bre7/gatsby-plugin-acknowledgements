const reporter = {
    activityTimer: jest.fn().mockImplementation(function() {
        return {
            start: jest.fn(),
            end: jest.fn(),
        }
    }),
}
const { onPostBootstrap } = require(`../gatsby-node`)

const apiArgs = {
    reporter,
}

test(`Test plugin manifest options`, async () => {
    const deps = await onPostBootstrap(apiArgs)

    // expect(Object.keys(deps)).toHaveLength(3)
})
