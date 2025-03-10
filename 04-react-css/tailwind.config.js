module.exports = {
  //purge:지정한 파일 안에서 사용하지 않는 스타일이 있을 경우 삭제하는 옵션
  // purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
