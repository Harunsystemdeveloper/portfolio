/** Fast bakgrund för hela sidan: norrsken, rutnät och lite brus. Ren CSS. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <div className="aurora absolute -inset-[10%]" />
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
