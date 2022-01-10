// root디렉토리에서 하는지 프로덕트 디렉토리에서 작업하는지? 다를때 확인하는 폴더

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
