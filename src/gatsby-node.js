import { dumpLicenses } from "npm-license-crawler"

exports.onPostBootstrap = async ({ reporter }) => {
    const activity = reporter.activityTimer(`Build manifest and related icons`)
    activity.start()

    const crawlerOptions = {
        start: ['./'],
        // exclude: ['.'],
        // unknown: true,
        onlyDirectDependencies: true,
        production: true,
        // json: 'licenses.json'
    }
    await new Promise((resolve, reject) => {
        dumpLicenses(crawlerOptions,
            (error, res) => {
                if (error) {
                    throw new Error(error)
                } else {
                    resolve(res)
                }
            }
        )
    })

    activity.end()
}
