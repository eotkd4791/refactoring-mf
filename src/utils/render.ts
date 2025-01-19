export function render(html: string) {
  const $app = document.getElementById("app");
  if (!$app) {
    throw new Error("렌더링 타겟을 찾지 못했습니다.");
  }
  $app.innerHTML = html;
}
