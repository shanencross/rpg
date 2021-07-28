const canSneak = (state) => ({
  sneak: () => {
    state.inStealth = true;
    return `${state.name} enters stealth.}`;
  }
})