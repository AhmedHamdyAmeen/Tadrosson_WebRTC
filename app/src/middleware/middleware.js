/**
 * * Note: Take care about the middleware invocation order
 */
const { SESSION_SECRET_TOKEN } = require('../config/environment/env.config');

const middleware = async (app, cors, compression, express, bodyParser, apiBasePath, flash, session, passport) => {
    app.use(cors()); // Enable All CORS Requests for all origins
    app.use(compression()); // Compress all HTTP responses using GZip
    app.use(express.json()); // Api parse body data as json
    app.use(express.static(dir.public)); // Use all static files from the public folder
    app.use(bodyParser.urlencoded({ extended: true })); // Need for Slack API body parser
    app.use(apiBasePath + '/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // api docs

    app.use(flash()); // Show Messages for Client User
    // Provides session in express
    app.use(
        session({
            secret: SESSION_SECRET_TOKEN ?? 'Default_Session_Secrete',
            // Should we re-save our session variables if nothing has changed.
            resave: false,
            // Save empty value if there is no value.
            saveUninitialized: false,
        }),
    );

    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = middleware;
