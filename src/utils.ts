import { KaboomCtx } from "kaboom";

export function displayDialogue(text: string, onDisplayEnd: () => void) {
  const dialogueUI = document.getElementById(
    "textbox-container"
  ) as HTMLDivElement;
  const dialogue = document.getElementById("dialogue") as HTMLParagraphElement;

  dialogueUI.style.display = "block";

  let index = 0;
  let currentText = "";

  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 1);

  const closeBtn = document.getElementById("close") as HTMLButtonElement;

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn.removeEventListener("click", onCloseBtnClick);
  }

  closeBtn.addEventListener("click", onCloseBtnClick);
}

export function setCamScale(kbm: KaboomCtx) {
  const resizeFactor = kbm.width() / kbm.height();
  
  if (resizeFactor < 1) kbm.camScale(kbm.vec2(1));
  else kbm.camScale(kbm.vec2(1.5));
}
