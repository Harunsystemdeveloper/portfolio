/** Fast bakgrund för hela sidan: varma, mjuka ljusfläckar och lite brus. Ren CSS. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <div className="aurora absolute -inset-[10%]" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
