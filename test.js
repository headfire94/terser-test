class Test {
  update() {
    const some = wrap();
    const merged = { ...this, ...some };
    return merged;
  }
}

module.exports = Test
