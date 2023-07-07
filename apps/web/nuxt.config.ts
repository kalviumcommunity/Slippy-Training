// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@myturborepo/ui", "@nuxtjs/tailwindcss"],
  nitro: {
    preset: "netlify",
  },
  ssr: false,
  
  runtimeConfig: {
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVYkdi1pV/9uVr\nh1hJwWuxQ+2zopjnQxUC5UWG0HfVFkG8eAbVLoW/P+Fyr7BzB2LVikGcgY5bcMwn\nf2BoTbclyGkHmbp4nVrGlE2wYFLnSzpRbVmK3c758XS6ysChGDXDP+2FpXYYri/j\nyEQ0GY3JHVhAIKi5mUL49ESEI9lG1QgXYNT/wtNPMKbi4XOQPRtd2ULACo/m/R0Q\nyblbOtO2oFogc0/iMHTGZ4WOOTFXyQjo4g1pyfLfbBpO0gfNE201S7yoRSdplQeR\n7Y6oF3MVErRWcTdoXRDsrnOGQJ4pAmDD4HRvCiU6JY4fBHLkutceQ1mKVzM6qGsT\ndlvcRdDJAgMBAAECggEACDVDOOITitl1F6hzKHJRSYcy+2jWv/ZGpEcWv+aafwHf\nEM0DixkoTi7jY1rV9iwUuSkEm+XefZXAEfeEw5ZpltDhPIKs5U24HCsv7Z4NUBop\nFSpN/jxb0A39XPohBXkAEz9i/LHvwEFp7jklzjsNOFy9aaChxLjwHh/F2ADkQmkC\nqdAsYoFp0ZBl9Mr5JUOPl4FtL62Qy8knl+m4+oNDwjD36Bs2k4UanXVzMIlQeqdp\nJioRMxsiaifnHNRRTqPZM1nQTM3qP9Yoo8zOyUYKoog2JwbPStOvDnYq+ttD0d+/\nsceg6pazxXc6mhQZ1z48Zs8F5bE9wfL4FThH7s+c0QKBgQDNQIt9j2+Lch7+kNBY\nOMsnDW6r2HuhwYIkIPL3oNBCVftvYHyMLh+37dG3UdcRsYQlq8y09qSL4dDOPyuO\nfT4WWhNz11soTvK++UaMlPU2Sc2TZYHsOlEaC931s1JezsrQkHHK17U/nJqmVmWQ\nojKiI19orwdzPoEqNDIT/gg7RQKBgQC6UYx1dk+z/sA4jSYVSC5thSoz3ehUWc6e\nt5VKEI/M628YB52RP1spJjZa2wX89Ys2BOfkapdlVbzDFk1i/f8CmVEw9N75OJr/\nlqFHdEG8ye4ioWLdlTO2dYWHogCcr3x7QzEMQCEwG3IExGBURBcyauZzL/izvmT1\nXBPJGw5VtQKBgAry7n38MM8Xf1/FCdgq72td5BF2suGmGPMkbtGW2oUvYQJH+1ze\n+QIuxYkp7HcdKRd5Wqosngp4OVNHO2OWesFmfLMpQcucqoZVddX5/DqxJS4/s/aO\nBdWF3IlGz5YPIfKOQgO4Dgsep4FICpL0lA7iJCzJaXRUWT+PGTzHyFihAoGAfPks\nJLHaHlq3JneO3uGOusmCmE21g7bFf/KWAZsASax11QFusDl19TD7bo/RAW7WFMLP\npIfWyxLqTVUNTWQfg+fA7Pyi/zn3xY6M2XfijDZKNBJaVVS53h4QFf0VOgP/lFJq\neNQfLryKCyaJkpwljxzjPMoloLMJ1wYPA2rRf60CgYEArv1PnBspvx5s15P1C+xi\nGns72VZFw82Nmus9Kq559HLT8oTCw8TUV7RkJ6/ExHy4x6at8XX9tD/6xNjT6CCq\n04g8Xtq915NvNmihrBgEnNZ1B8W25+YxMUBPLYaHnnrywfbKwO7F0SUm83Am3Ako\nszddE2+cydWULZ7QhsKwBrc=\n-----END PRIVATE KEY-----\n',
    key : process.env.KEY
  },
});
