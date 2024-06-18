const path = require("path");
var parse = require('pg-connection-string').parse;

var config = parse('postgres://avnadmin:AVNS_bw-xOCWkfmwwokdBfR2@rocketnotesdb-rocket-notes-db.e.aivencloud.com:17771/defaultdb?sslmode=require')

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "rocket-notes-rocket-notes-db.e.aivencloud.com",
      port: 17771,
      user: "avnadmin",
      password: "AVNS_tcH-_TCmqgo8b-wkthU",
      database: "defaultdb",
      ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUJq7iY6087H7OKWVufs2/354ajOowDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYzFhZjJiMDEtZTUxNC00MDYwLWI2ZDgtOTUwNDRjNDA1
OWYxIFByb2plY3QgQ0EwHhcNMjQwNjE4MDAzMDU3WhcNMzQwNjE2MDAzMDU3WjA6
MTgwNgYDVQQDDC9jMWFmMmIwMS1lNTE0LTQwNjAtYjZkOC05NTA0NGM0MDU5ZjEg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAIWifxHZ
u3sarNzPA3o9w9QTat3oHkN7hLhh5SvnqmIa8BJ/hOAFBrLcyI+by1Qz0UCQ8w3v
Z6AHsVrqR7ELP3faPjeyAlQerWl2yl7RFDa5TTJgQZnoyZ7AUe6upAoyUzTIgjP4
7mmknnBkDVVfW33bBp3JIZTZc/QYm63J+mKCdLXXOKpiKe6LhGhXIMlofQMSPcYz
XFgdm0i+lvyTAmnGMSNdAw/3X1BmvPFrOZQOI6rEfmif1fXWm7sSnDVu6Aqhz1hV
Sr2Bwv614Io953+X99BsranLZCq+C7GXBpMX/kkSu56YCfTGyFFnH0wXtpsOtdJg
wHZh+Pp6e3O0eYWDB7IATOtX6r3/OSctGpBdP+iLjihhiG+KW175cN0A5pdIJ+rn
BF1ae09oC0IuMHNK8jScYiLsVRRgA7AkwCfVIMfy/f7FMh05b8vH1S9eHk7ER1WL
1ujy4/XDih3rZfEeMPnBJs6iYGrz48FoNOQCSHZIT9ddYVdq84lpj01kHwIDAQAB
oz8wPTAdBgNVHQ4EFgQU8e1qhlSicLXcvoH4Z/sfy6frOWswDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBACdjSbQIXuD8buay
akpcQ54j0J+JWl1zDVH+ZagtmoZQlSRha1O/hdxQ09Dd9wiOZQ/miKgMmLoorv13
dbZ+IMp31DnJISlrf8zx8QfrsRcu5xb0KJ+DWaCMoudFXIy74773+v60BPiUAFhW
voCIzdEFHa2oBfnsc6CZSjqqtnkGUvGwG9ikRA952KSq7WapWva4p1qJxR4o5ouV
hjM3goCuepL5w4Nu5udXZL5JR952IbYPxy1Udxwmm5Pd1JrtX1tPGnxvjlDca7tZ
CVbKDLdE3u0galtgwrBmu0g3MOQTwzu0UITr7CfH7OksrcsbbIXP2I1sF5Q1Ps0x
NM/IUrM3peqtJEnfgaTQlc4fSHEUnGD3MA9l8GsyH0lX0MKv6fH2Xkfz2mSw8SpJ
Jz1U6wW/R4LqMi8wyD2WYrPDAVeNt3Okq8sOoEU+HNa3Y3TQxTQ/D0XHHUktB0Fi
tncCptsIvdu+resLUdeH4TaDpbxFnp8OF3Wil78103lIDYOSjg==
-----END CERTIFICATE-----`, 
      }
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: path.resolve(
        __dirname,
        "src",
        "database",
        "knex",
        "migrations"
      ),
    },
    useNullAsDefault: true,
  },
};
