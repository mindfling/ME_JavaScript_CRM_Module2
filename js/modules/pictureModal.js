/* eslint-disable max-len */

// * выводим картинку в отдельное окно
export const openPictureWindow = (width, height, url) => {
  // вычисляем позицию окна по центру доступной области экрана
  const winPosX = (window.screen.availWidth - width) / 2;
  const winPosY = (window.screen.availHeight - height) / 2;
  const win = window.open('about:blank', '',
    `popup,width=${width},height=${height},left=${winPosX},top=${winPosY}`);
  // todo make it dynamic
  win.document.body.style.cssText = `
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;
  win.document.body.innerHTML = `<img
  src="${url}" 
  alt="image" 
  class="image" 
  style="display:flex;justify-content:center;align-items:center;width:100%;height:100%;object-fit:cover;">`;
  // закрытие окна по Escape
  win.document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      console.log('close event: ', event.key);
      win.close();
    }
  });

  return win;
};
