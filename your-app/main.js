const { app, BrowserWindow } = require('electron');

// window 객체는 전역 변수로 유지한다.
// 이렇게 하지 않으면, 자바스크립트 객체가 가비지 콜렉트를 할 때
// 자동으로 창이 닫힌다.
let window;

function createWindow() {
  // 브라우저 창 생성
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // index.html 파일을 로드한다.
  win.loadFile('index.html');

  // 개발자 도구를 연다.
  win.webContents.openDevTools();

  // 창이 닫힐 때 발생
  win.on('closed', () => {
    // window 객체에 대한 참조를 해제한다.
    // 여러 개의 창을 지원하는 앱이라면 창을 배열에 저장할 수 있다.
    win = null;
  });
}

// Electron이 초기화를 마치고 브라우저 창을 생성할 준비가 되었을 때 발생
// 어떤 API는 이 이벤트 발생 이후에만 사용될 수 있다.
app.on('ready', createWindow);

// 모든 창이 닫혔을 때
app.on('window-all-closed', () => {
  // Mac OS의 경우 Cmd + Q를 누르기 전까지는 활성화된 상태다.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Mac OS의 경우 dock 아이콘이 클릭되고 다른 윈도우가 열려있지 않다면
  // 앱에서 새로운 창을 다시 연다.
  if (win === null) {
    createWindow();
  }
});
