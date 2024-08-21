import { editor } from "@silverbulletmd/silverbullet/syscalls";

export async function updateAnki() {
  const noteName = await editor.getCurrentPage();
  const url = '/note2anki_outside/?filepath=' + noteName + '.md'
  const res = await fetch(url);
    if (res.status < 200 || res.status >= 300) {
      throw new Error(await res.text());
    }
  const text = await res.text()
  await editor.flashNotification(text);

}
