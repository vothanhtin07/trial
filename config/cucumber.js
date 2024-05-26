
module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "",
        node_env: process.env.npm_config_NODE_ENV,
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "features/*.feature"
        ],
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "./reporter.js"
        ],
    }
}