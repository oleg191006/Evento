export async function sleep(ms?: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms ?? 1000);
  });
}
