// se usa https://github.com/chihab/ngx-env y https://github.com/kentcdodds/cross-env para leer las variables

export const environment = {
  production: false,
  NG_APP_ENV: process.env.NG_APP_MODE,
  API_URL: process.env.NG_APP_API_URL,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
